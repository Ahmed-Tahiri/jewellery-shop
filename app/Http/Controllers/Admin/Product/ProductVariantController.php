<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Product\Product;
use App\Models\Product\ProductVariant;
use Illuminate\Http\Request;

class ProductVariantController extends Controller
{
    public function store(Request $request, Product $product, $data)
    {
        $product_variant =  ProductVariant::create($data);
        new ProductImageController()->store($data['primary_image'], $data['secondary_images'], $product);
        return redirect()->back();
    }
}
