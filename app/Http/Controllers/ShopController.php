<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product\ColorTone;
use App\Models\Product\Metal;
use App\Models\Product\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShopController extends Controller
{
    public function index()
    {
        $categories = Category::all(['name', 'id']);
        $materials = Metal::all(['name', 'id']);
        $colors = ColorTone::all(['name', 'hex_code as colorCode', 'id']);
        $defaultVariant = Product::with(['defaultVariant', 'defaultVariant.primaryImage', 'subcategory.category', 'discount'])->first();

        $modifiedData = [
            'id' => $defaultVariant->id,
            'name' => $defaultVariant->name,
            'discount' => $defaultVariant->discount->discount_percent,
            'price' => $defaultVariant->defaultVariant->price,
            'category' => $defaultVariant->subcategory->category->name,
            'img' => $defaultVariant->defaultVariant->primaryImage,
            'slug' => $defaultVariant->slug,
        ];
        return Inertia::render('Site/Shop/Index', ['categories' => $categories, 'materials' => $materials, 'colors' => $colors, 'product' => $modifiedData]);
    }
    public function show($category, $slug)
    {
        $product = Product::where('slug', $slug)->with(['defaultVariant', 'defaultVariant.primaryImage', 'subcategory.category', 'discount'])->firstOrFail();
        $modifiedData = [
            'id' => $product->id,
            'name' => $product->name,
            'discount' => $product->discount->discount_percent,
            'price' => $product->defaultVariant->price,
            'category' => $product->subcategory->category->name,
            'img' => $product->defaultVariant->primaryImage,
            'slug' => $product->slug,
        ];
        return Inertia::render('Site/Shop/Show', ['product' => $modifiedData]);
    }
}
