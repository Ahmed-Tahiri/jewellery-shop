<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends AdminController
{
    public  function index()
    {
        return Inertia::render('Admin/Categories');
    }
}
