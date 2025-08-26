<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Rules\UniqueEmail;
use App\Models\Customer;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class CustomerController extends Controller
{


    public function index()
    {
        return Inertia::render('Auth/Signup');
    }
    public function store(Request $request)
    {
        $attrs = $request->validate([
            'first_name'   => ['required', 'string', "regex:/^[\p{L}]+(?:[\p{L} '-][\p{L}]+)*$/u", 'min:2', 'max:50'],
            'last_name'    => ['required', 'string', "regex:/^[\p{L}]+(?:[\p{L} '-][\p{L}]+)*$/u", 'min:2', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:100', new UniqueEmail],
            'password' => ['required', 'string', Password::min(6), 'confirmed',],
        ]);
        $customer = Customer::create([
            'first_name'   => $attrs['first_name'],
            'last_name'    => $attrs['last_name'],
            'email'        => $attrs['email'],
            'password'     => Hash::make($attrs['password']),
            'last_login_at' => Carbon::now()
        ]);
        Auth::guard('customer')->login($customer);
        return redirect()->route('signup.complete')->with('success', 'Account created successfully');
    }
}
