<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product\ColorTone;
use App\Models\Product\Metal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        $categories = Category::all(['name', 'id']);
        $materials = Metal::all(['name', 'id']);
        $colors = ColorTone::all(['name', 'hex_code as colorCode', 'id']);
        return Inertia::render('Site/Shop/Index', ['categories' => $categories, 'materials' => $materials, 'colors' => $colors]);
    }
}
