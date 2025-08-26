<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Address extends Model
{
    protected $guarded = [];

    protected $casts = [
        'is_primary' => 'boolean',
    ];


    /**
     * Address belongs to a customer.
     */
    public function customer(): BelongsTo
    {
        return $this->belongsTo(Customer::class);
    }

    /**
     * Mark this address primary for its customer.
     * This will unset other addresses' is_primary for this customer.
     *
     * IMPORTANT: This method intentionally does NOT change the customer's profile phone/email.
     */
    public function markAsPrimary(): void
    {
        if (! $this->customer) {
            return;
        }

        // Unset other addresses' primary flag for this customer
        static::where('customer_id', $this->customer_id)
            ->where('id', '<>', $this->id)
            ->update(['is_primary' => false]);

        // Set this one
        $this->update(['is_primary' => true]);
    }
}
