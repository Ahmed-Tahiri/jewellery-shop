<?php

namespace App\Http\Controllers;

use App\Models\Product\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $defaultVariants = Product::with(['defaultVariant', 'defaultVariant.primaryImage', 'subcategory.category', 'discount'])->get();
        $modifiedData = [];
        foreach ($defaultVariants as $variant) {
            $modifiedData[] = [
                'id' => $variant->id,
                'name' => $variant->name,
                'discount' => $variant->discount,
                'shortDescription' => $variant->short_description,
                'price' => $variant->defaultVariant->price,
                'category' => $variant->subcategory->category->name,
                'img' => $variant->defaultVariant->primaryImage,
                'slug' => $variant->slug,
            ];
        }
        return Inertia::render('Home', ['products' => $modifiedData]);
    }
}
