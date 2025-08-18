<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SessionController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }
    public function store(Request $request)
    {
        $credentials = $request->validate(['email' => ['required', 'email'], 'password' => 'required'], ['email.required' => 'Please fill data in fields', 'password.required' => 'Please fill data in fields']);
        if (Auth::guard('customer')->attempt($credentials)) {
            $request->session()->regenerate();
            return redirect()->route('Home')->with('success', 'Login Successful');
        }
        return back()->withErrors([
            'email' => 'Invalid email or password.',
        ])->withInput($request->only('email', 'password'));
    }
}
