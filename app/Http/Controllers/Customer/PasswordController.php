<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Customer\CustomerController;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PasswordController extends CustomerController
{

    public function index()
    {
        return Inertia::render('MyAccount/Password');
    }
}
