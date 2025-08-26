<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class SignupCompleteController extends Customer
{

    public function index()
    {
        return Inertia::render('Auth/SignupComplete');
    }
    public function store(Request $request)
    {
        $customer = Auth::guard('customer')->user();
        $attrs = $request->validate([
            'phone'    => ['required', 'string', "regex:/^(?:\+?\d{7,30}|0\d{6,29})$/", 'min:7', 'max:30'],
            'gender_id' => ['required'],
        ], [
            'gender_id.required' => 'Please select gender for better experience.',
        ]);


        $customer->update($attrs);
        return redirect()->route('home')->with('success', 'Profile Completed Successfully');
    }
}
