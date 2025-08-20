<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\DB;

class UniqueEmail implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $existsInCustomers = DB::table('customers')->where('email', $value)->exists();
        $existsInAdmins = DB::table('admins')->where('email', $value)->exists();

        if ($existsInCustomers || $existsInAdmins) {
            $fail("The $attribute has already been taken.");
        }
    }
}
