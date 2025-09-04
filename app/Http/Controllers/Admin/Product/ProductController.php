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
    public function store(Request $request)
    {


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
