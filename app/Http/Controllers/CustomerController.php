<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{


    public function index()
    {
        return Inertia::render('Auth/Signup');
    }
    public function store(Request $request)
    {
        dd($request->all());
    }
}
