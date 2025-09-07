<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Status extends Model
{
    protected $guarded = [];


    public function status(): HasMany
    {
        return $this->hasMany(Product::class, 'status_id');
    }
}
