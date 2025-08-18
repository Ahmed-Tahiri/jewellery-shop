<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SessionController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Login');
    }
    public function store(Request $request)
    {
        dd($request->all());
    }
}
