<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Customer\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class PasswordController extends CustomerController
{

    public function index()
    {
        return Inertia::render('MyAccount/Password');
    }

    public function update(Request $request)
    {
        if (Auth::guard('admin')->check() && Auth::guard('admin')->user()->role === 'admin') {
            return redirect()->route('signin');
        }
        $attrs = $request->validate([
            'current_password'     => ['required', 'string'],
            'new_password'     => ['required', 'string', Password::min(6), 'confirmed'],
            'new_password_confirmation'     => ['required', 'string'],

        ]);

        $authCustomer = Auth::guard('customer')->user();
        if (!Hash::check($attrs['current_password'], $authCustomer->password)) {
            return back()->withErrors(['current_password' => 'Current password does not match']);
        }

        if ($attrs['current_password'] === $attrs['new_password']) {
            return back()->withErrors(['new_password' => 'New password cannot be the same as current password']);
        }

        $authCustomer->update([
            'password' => Hash::make($attrs['new_password']),
        ]);

        return redirect()->back()->with('success', 'Password updated successfully.');
    }
}
