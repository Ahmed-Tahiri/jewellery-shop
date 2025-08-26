<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;

class UniqueEmail implements ValidationRule
{
    protected $currentAdminId;
    protected $currentCustomerId;

    public function __construct($currentAdminId = null, $currentCustomerId = null)
    {
        $this->currentAdminId = $currentAdminId;
        $this->currentCustomerId = $currentCustomerId;
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {

        $customerQuery = DB::table('customers')->where('email', $value);
        if ($this->currentCustomerId) {
            $customerQuery->where('id', '!=', $this->currentCustomerId);
        }
        $existsInCustomers = $customerQuery->exists();

        $adminQuery = DB::table('admins')->where('email', $value);
        if ($this->currentAdminId) {
            $adminQuery->where('id', '!=', $this->currentAdminId);
        }
        $existsInAdmins = $adminQuery->exists();

        if ($existsInCustomers || $existsInAdmins) {
            $fail("The $attribute has already been taken.");
        }
    }
}
