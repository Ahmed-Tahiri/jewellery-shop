<?php

namespace App\Http\Controllers;

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
        return Inertia::render('Admin/Signup');
    }
    public function store(Request $request)
    {
        $attrs = $request->validate([
            'first_name'   => ['required', 'string', 'min:2', 'max:50'],
            'last_name'    => ['required', 'string', 'min:2', 'max:50'],
            'email'        => ['required', 'string', 'email', 'unique:admins,email', 'max:100'],
            'password'     => ['required', 'string', Password::min(6), 'confirmed']
        ]);

        $admin = Admin::create([
            'first_name'   => $attrs['first_name'],
            'last_name'    => $attrs['last_name'],
            'email'        => $attrs['email'],
            'password'     => Hash::make($attrs['password'])

        ]);
        Auth::guard('admin')->login($admin);
        return redirect()->route('Dashboard')->with('success', 'Account created successfully');
    }
}
