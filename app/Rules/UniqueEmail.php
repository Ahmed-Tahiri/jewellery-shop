<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;

class UniqueEmail implements ValidationRule
{
    protected $currentAdminId;

    public function __construct($currentAdminId = null)
    {
        $this->currentAdminId = $currentAdminId;
    }
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $existsInCustomers = DB::table('customers')->where('email', $value)->exists();
        $query = DB::table('admins')->where('email', $value);
        if ($this->currentAdminId) {
            $query->where('id', '!=', $this->currentAdminId);
        }
        $existsInAdmins = $query->exists();
        if ($existsInCustomers || $existsInAdmins) {
            $fail("The $attribute has already been taken.");
        }
    }
}
