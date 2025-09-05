<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product\ColorTone;
use App\Models\Product\Metal;
use App\Models\Product\MetalPurity;
use App\Models\SubCategory;
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
        $categories = Category::all(['name', 'id']);
        $subcategories = SubCategory::all(['id', 'name', 'parent_id']);
        $metals = Metal::all(['id', 'name']);
        $metal_purities = MetalPurity::all(['id', 'purity as name']);
        $color_tones = ColorTone::all(['id', 'name', 'hex_code']);
        return Inertia::render('Admin/Products/Create', [
            'categories' => $categories,
            'subcategories' => $subcategories,
            'metals' => $metals,
            'metal_purities' => $metal_purities,
            'color_tones' => $color_tones,
        ]);
    }
    public function store(Request $request)
    {
        dd($request->all());
        $attributes = [];
        if ($request->hasFile('secondary_images')) {
            foreach ($request->file('secondary_images') as $index => $file) {
                $attributes["secondary_images.$index"] = "Secondary image " . ($index + 1);
            }
        }
        $validated = $request->validate([
            'primary_image' => 'required|image|mimes:jpeg,png,jpg,webp|max:3072',
            'secondary_images' => 'array|max:6',
            'secondary_images.*' => 'image|mimes:jpeg,png,jpg,webp|max:2048',
        ], [
            'primary_image.required' => 'Please upload primary image.',
            'primary_image.image' => 'Please upload valid image file.',
            'primary_image.max' => 'Image is too large! Max allowed size is 2MB.',
            'secondary_images.max' => 'Maximum 6 secondary images are allowed.',
            'secondary_images.*.max' => ':attribute is too large (max 2MB).',
        ], $attributes);
    }
}
