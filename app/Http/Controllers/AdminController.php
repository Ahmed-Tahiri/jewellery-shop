<?php

namespace App\Http\Controllers;

use App\Rules\UniqueEmail;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function create()
    {
        if (Admin::first()) {
            if (Auth::guard('customer')->check() && Auth::guard('customer')->user()->role === 'customer') {
                return redirect()->route('Home');
            }
            return redirect()->route('Dashboard');
        }
        return Inertia::render('Admin/Signup');
    }
    public function store(Request $request)
    {


        $attrs = $request->validate([
            'first_name'   => ['required', 'string', 'min:2', 'max:50'],
            'last_name'    => ['required', 'string', 'min:2', 'max:50'],
            'email' => ['required', 'string', 'email', 'max:100', new UniqueEmail],
            'password'     => ['required', 'string', Password::min(6), 'confirmed']
        ]);

        $admin = Admin::create([
            'first_name'   => $attrs['first_name'],
            'last_name'    => $attrs['last_name'],
            'email'        => $attrs['email'],
            'password'     => Hash::make($attrs['password']),
            'role' => 'admin'

        ]);
        Auth::guard('admin')->login($admin);
        return redirect()->route('Dashboard')->with('success', 'Account created successfully');
    }
}
