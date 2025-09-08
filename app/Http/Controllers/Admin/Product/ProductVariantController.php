<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Product\Product;
use App\Models\Product\ProductVariant;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductVariantController extends Controller
{


    public function index(Product $product)
    {
        return Inertia::render('Admin/Products/Variant/Index', [
            'product' => ['id' => $product->id, 'name' => $product->name]
        ]);
    }

    public function createVariant(Product $product, array $validated)
    {
        $variantData['product_id'] = $product->id;
        $variantData['sku'] = $validated['sku'];
        $variantData['price'] = $validated['price'];
        $variantData['stock_quantity'] = $validated['stock_quantity'];
        $variantData['stock_status'] = $validated['stock_status'];
        $variantData['metal_id'] = $validated['metal_type'];
        $variantData['metal_purity_id'] = $validated['metal_purity'] ?? null;
        $variantData['finish_id'] = $validated['finish'];
        $variantData['color_id'] = $validated['color_tone']['id'];
        $variantData['weight_grams'] = $validated['weight_grams'];
        $variantData['cost'] = $validated['cost'];
        $variantData['height_mm'] = $validated['height_mm'];
        $variantData['width_mm'] = $validated['width_mm'];
        $variantData['length_mm'] = $validated['length_mm'];
        $variantData['diameter_mm'] = $validated['diameter_mm'];
        $variantData['is_default'] = ! $product->variants()->exists();

        $productVariant = ProductVariant::create($variantData);

        new ProductImageController()->store(
            $validated['primary_image'],
            $validated['secondary_images'] ?? null,
            $productVariant
        );

        return $productVariant;
    }
    public function store(Request $request, Product $product, $validated)
    {
        $variantData['product_id'] = $product->id;
        $variantData['sku'] = $validated['sku'];
        $variantData['price'] = $validated['price'];
        $variantData['stock_quantity'] = $validated['stock_quantity'];
        $variantData['stock_status'] = $validated['stock_status'];
        $variantData['metal_id'] = $validated['metal_type'];
        $variantData['metal_purity_id'] = $validated['metal_purity'] ?? null;
        $variantData['finish_id'] = $validated['finish'];
        $variantData['color_id'] = $validated['color_tone']['id'];
        $variantData['weight_grams'] = $validated['weight_grams'];
        $variantData['cost'] = $validated['cost'];
        $variantData['is_default'] = ! $product->variants()->exists();
        $this->createVariant($product, $validated);
        return redirect()->route('admin.products.variants.successful')->with('success', "$product->name variant SKU:(" . $variantData['sku'] . ") added successfully!)");
    }
}
