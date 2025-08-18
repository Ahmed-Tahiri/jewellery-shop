<?php

namespace App\Http\Controllers;

use App\Models\Customer;
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
            'first_name'   => ['required', 'string', 'min:2', 'max:50'],
            'last_name'    => ['required', 'string', 'min:2', 'max:50'],
            'phone'        => ['required', 'string', 'regex:/^\+?[0-9]+$/', 'min:7', 'max:100'],
            'email'        => ['required', 'string', 'email', 'unique:customers,email', 'max:100'],
            'password'     => ['required', 'string', Password::min(6), 'confirmed',],
            'address'      => ['required', 'string', 'min:2', 'max:100'],
            'town'         => ['required', 'string', 'min:2', 'max:100'],
            'region'       => ['required', 'string', 'min:2', 'max:100'],
            'postal_code'  => ['required', 'string', 'min:2', 'max:100'],
            'cnic'         => ['required', 'string', 'regex:/^[0-9]+$/', 'min:11', 'max:50', 'unique:customers,cnic'],
            'country'      => ['required', 'string', 'min:2', 'max:100'],
        ], ['cnic.regex' => 'Enter only numeric values', 'phone.regex' => 'Please Enter Valid Phone']);

        $customer = Customer::create([
            'first_name'   => $attrs['first_name'],
            'last_name'    => $attrs['last_name'],
            'cnic'         => $attrs['cnic'],
            'phone_no'     => $attrs['phone'],
            'email'        => $attrs['email'],
            'password'     => Hash::make($attrs['password']),
            'address'      => $attrs['address'],
            'town'         => $attrs['town'],
            'region'       => $attrs['region'],
            'postal_code'  => $attrs['postal_code'],
            'country'      => $attrs['country'],
        ]);
        Auth::guard('customer')->login($customer);
        return redirect()->route('Home')->with('success', 'Account created successfully');
    }
}
