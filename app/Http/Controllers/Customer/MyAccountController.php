<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Customer\CustomerController;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MyAccountController extends CustomerController
{

    public function index()
    {
        return Inertia::render('MyAccount/Index');
    }
}
