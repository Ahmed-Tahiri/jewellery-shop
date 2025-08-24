<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class PasswordController extends AdminController
{
    public function index()
    {
        return Inertia::render('Admin/Profile/Password');
    }


    public function update(Request $request)
    {
        if (Auth::guard('customer')->check() && Auth::guard('customer')->user()->role === 'customer') {
            return redirect()->route('Home');
        }
        $attrs = $request->validate([
            'current_password'     => ['required', 'string'],
            'new_password'     => ['required', 'string', Password::min(6), 'confirmed'],
            'new_password_confirmation'     => ['required', 'string'],

        ]);

        $authAdmin = Auth::guard('admin')->user();
        if (!Hash::check($attrs['current_password'], $authAdmin->password)) {
            return back()->withErrors(['current_password' => 'Current password does not match']);
        }

        if ($attrs['current_password'] === $attrs['new_password']) {
            return back()->withErrors(['new_password' => 'New password cannot be the same as current password']);
        }

        $authAdmin->update([
            'password' => Hash::make($attrs['new_password']),
        ]);

        return redirect()->back()->with('success', 'Password updated successfully.');
    }
}
