<?php

namespace App\Services;

use App\Http\Controllers\Admin\Product\ProductImageController;
use App\Models\Product\Product;
use App\Models\Product\ProductVariant;
use Illuminate\Support\Facades\DB;

class ProductVariantService
{
    /**
     * Create a variant for the given product using validated payload.
     *
     * @param  Product  $product
     * @param  array    $validated  Validated input array (should contain variant fields)
     * @return ProductVariant
     *
     * @throws \Throwable
     */
    public function create(Product $product, array $validated): ProductVariant
    {

        $colorId = null;
        if (isset($validated['color_tone'])) {
            if (is_array($validated['color_tone']) && array_key_exists('id', $validated['color_tone'])) {
                $colorId = $validated['color_tone']['id'];
            } elseif (! empty($validated['color_tone'])) {
                $colorId = $validated['color_tone'];
            }
        }

        $variantData = [
            'product_id'        => $product->id,
            'sku'               => $validated['sku'],
            'price'             => $validated['price'],
            'stock_quantity'    => $validated['stock_quantity'],
            'stock_status'      => $validated['stock_status'],
            'metal_id'          => $validated['metal_type'],
            'metal_purity_id'   => $validated['metal_purity'],
            'finish_id'         => $validated['finish'],
            'color_id'          => $colorId,
            'size'              => $validated['size'],
            'weight_grams'      => $validated['weight_grams'],
            'cost'              => $validated['cost'],
            'height_mm'         => $validated['height_mm'],
            'width_mm'          => $validated['width_mm'],
            'length_mm'         => $validated['length_mm'],
            'diameter_mm'       => $validated['diameter_mm'],
            'is_default'        =>  $validated['is_default'] ?? !$product->variants()->exists(),
        ];

        return DB::transaction(function () use ($validated, $variantData, $product) {
            $productVariant = ProductVariant::create($variantData);
            if (! empty($validated['primary_image'])) {
                (new ProductImageController())->store(
                    $validated['primary_image'],
                    $validated['secondary_images'] ?? null,
                    $productVariant
                );
            }

            return $productVariant;
        });
    }
}
