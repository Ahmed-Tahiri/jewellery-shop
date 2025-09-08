<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductVariantRequest;
use App\Models\Product\ColorTone;
use App\Models\Product\Metal;
use App\Models\Product\MetalPurity;
use App\Models\Product\Product;
use App\Models\Product\ProductFinish;
use App\Services\ProductVariantService;
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
    public function create(Product $product)
    {

        $metals = Metal::all(['id', 'name']);
        $metal_purities = MetalPurity::all(['id', 'purity as name']);
        $color_tones = ColorTone::all(['id', 'name', 'hex_code']);
        $finishes = ProductFinish::all(['id', 'name']);
        return Inertia::render('Admin/Products/Variant/Create', [
            'product' => ['id' => $product->id, 'name' => $product->name],
            'metals' => $metals,
            'metal_purities' => $metal_purities,
            'color_tones' => $color_tones,
            'finishes' => $finishes,
        ]);
    }

    public function store(StoreProductVariantRequest $request, Product $product, ProductVariantService $variantService)
    {
        $validated = $request->validated();
        $variant = $variantService->create($product, $validated);

        return redirect()
            ->route('admin.products.variants.successful')
            ->with('success', "{$product->name} variant SKU:({$variant->sku}) added successfully!");
    }
}
