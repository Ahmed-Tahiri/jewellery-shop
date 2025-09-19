<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    public function orderStatus()
    {
        return Inertia::render('Site/Order/Status');
    }
}
