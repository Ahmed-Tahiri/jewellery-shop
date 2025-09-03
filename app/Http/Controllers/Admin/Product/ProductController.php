<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{

    public function index()
    {
        return Inertia::render('Admin/Products/Index');
    }
    public function create()
    {
        return Inertia::render('Admin/Products/Create');
    }
}
