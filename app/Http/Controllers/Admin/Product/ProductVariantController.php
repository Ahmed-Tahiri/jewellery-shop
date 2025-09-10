<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProductVariantRequest;
use App\Models\Product\ColorTone;
use App\Models\Product\Metal;
use App\Models\Product\MetalPurity;
use App\Models\Product\Product;
use App\Models\Product\ProductFinish;
use App\Models\Product\ProductVariant;
use App\Services\ProductVariantService;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Validation\Rule;
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
        if ($validated['is_default'] && (bool)$validated['is_default'] === true) {
            $variants = ProductVariant::where('product_id', $product->id)->get();
            foreach ($variants as $prodVariant) {
                $prodVariant->is_default = false;
                $prodVariant->save();
            }
            $variant->is_default = true;
            $variant->save();
        };
        return redirect()
            ->route('admin.products.variants.successful', $product->id)
            ->with('success', "{$product->name} variant SKU:({$variant->sku}) added successfully!");
    }
    public function edit(Product $product, ProductVariant $variant)
    {
        $metals = Metal::all(['id', 'name']);
        $metal_purities = MetalPurity::all(['id', 'purity as name']);
        $color_tones = ColorTone::all(['id', 'name', 'hex_code']);
        $finishes = ProductFinish::all(['id', 'name']);
        $variantData = $variant->load(['metal:id,name', 'color_tone:id,name,hex_code', 'metal_purity:id,purity', 'finish:id,name', 'secondaryImages', 'primaryImage']);
        $variantFormattedData = [
            'id' => $variantData->id,
            "sku" => $variantData->sku,
            "size" => $variantData->size,
            "price" => $variantData->price,
            "cost" => $variantData->cost,
            "metal" => $variantData->metal,
            "metalPurity" => ['name' => $variantData->metal_purity->purity, 'id' => $variantData->metal_purity->id],
            "finish" => $variantData->finish,
            "color" => $variantData->color_tone,
            "stockQuantity" => $variantData->stock_quantity,
            "stockStatus" => $variantData->stock_status,
            "weightGrams" => $variantData->weight_grams,
            "isDefault" => $variantData->is_default,
            "height_mm" => $variantData->height_mm,
            "width_mm" => $variantData->width_mm,
            "length_mm" => $variantData->length_mm,
            "diameter_mm" => $variantData->diameter_mm,
            'primaryImage' => $variantData->primaryImage,
            'secondaryImages' => $variantData->secondaryImages,
        ];
        return Inertia::render('Admin/Products/Variant/Edit', [
            'variant' => $variantFormattedData,
            'product' => $product->id,
            'metals' => $metals,
            'metal_purities' => $metal_purities,
            'color_tones' => $color_tones,
            'finishes' => $finishes,
        ]);
    }


    public function update(Request $request, Product $product, ProductVariant $variant)
    {

        $validated = $request->validate([
            'primary_image' => [
                'required',
                function ($attribute, $value, $fail) {
                    if ($value instanceof UploadedFile) {
                        $allowed = ['jpeg', 'png', 'jpg', 'webp'];
                        $ext = strtolower($value->getClientOriginalExtension() ?: $value->extension());

                        if (! in_array($ext, $allowed, true)) {
                            $fail("The {$attribute} must be a file of type: jpeg, png, jpg, webp.");
                            return;
                        }

                        if ($value->getSize() > 3072 * 1024) {
                            $fail("The {$attribute} may not be greater than 3072 kilobytes.");
                            return;
                        }
                        return;
                    }

                    if (is_string($value) && trim($value) !== '') {
                        return;
                    }

                    $fail("The {$attribute} is required and must be either an image file (jpeg,png,jpg,webp, max 3072KB) or a valid backend path/URL string.");
                },
            ],


            'secondary_images' => ['array', 'max:6'],
            'secondary_images.*.id'   => ['nullable', 'integer', 'exists:product_images,id'],
            'secondary_images.*.url'  => ['nullable', 'string'],
            'secondary_images.*.file' => [
                'nullable',
                'file',
                'image',
                'mimes:jpeg,jpg,png,webp',
                'max:2048'
            ],


            'sku' => [
                'required',
                'regex:/^[A-Z0-9_-]+$/',
                'min:6',
                'string',
                Rule::unique('product_variants', 'sku')->ignore($variant->id),
            ],

            'weight_grams' => ['required', 'decimal:0,2'],
            'metal_type'   => ['required', 'exists:metals,id'],
            'metal_purity' => ['nullable', 'exists:metal_purities,id'],
            'finish'       => ['required', 'exists:product_finishes,id'],
            'color_tone.id' => ['required', 'exists:color_tones,id'],

            'is_default' => 'boolean',

            'dimensions' => [
                function ($attribute, $value, $fail) {
                    $rq = request();
                    if (
                        empty($rq->input('height_mm')) &&
                        empty($rq->input('width_mm')) &&
                        empty($rq->input('length_mm')) &&
                        empty($rq->input('diameter_mm'))
                    ) {
                        $fail('At least one dimension (length, width, height, diameter) must be provided.');
                    }
                },
            ],

            'size'         => ['nullable', 'decimal:0,2'],
            'length_mm'    => ['nullable', 'decimal:0,2'],
            'width_mm'     => ['nullable', 'decimal:0,2'],
            'height_mm'    => ['nullable', 'decimal:0,2'],
            'diameter_mm'  => ['nullable', 'decimal:0,2'],
            'stock_quantity' => ['required', 'integer'],
            'stock_status'   => ['required', 'in:in stock,out of stock'],
            'price'          => ['required', 'decimal:0,2'],
            'cost'           => ['required', 'decimal:0,2'],
        ]);

        $variantData = [
            'product_id'       => $product->id,
            'sku'              => $validated['sku'],
            'price'            => $validated['price'],
            'stock_quantity'   => $validated['stock_quantity'],
            'stock_status'     => $validated['stock_status'],
            'metal_id'         => $validated['metal_type'],
            'metal_purity_id'  => $validated['metal_purity'],
            'finish_id'        => $validated['finish'],
            'color_id'         => $validated['color_tone']['id'],
            'size'             => $validated['size'],
            'weight_grams'     => $validated['weight_grams'],
            'cost'             => $validated['cost'],
            'height_mm'        => $validated['height_mm'],
            'width_mm'         => $validated['width_mm'],
            'length_mm'        => $validated['length_mm'],
            'diameter_mm'      => $validated['diameter_mm'],
            'is_default'       => $validated['is_default'] ?? false,
        ];

        $variant->update($variantData);
        $variant->refresh();
        if ($variant->is_default) {
            $product->variants()
                ->where('id', '!=', $variant->id)
                ->update(['is_default' => false]);
        } else {
            $otherDefaultExists = $product->variants()
                ->where('is_default', true)
                ->where('id', '!=', $variant->id)
                ->exists();

            if (!$otherDefaultExists) {
                $firstVariant = $product->variants()
                    ->where('id', '!=', $variant->id)
                    ->first();

                if ($firstVariant) {
                    $firstVariant->update(['is_default' => true]);
                }
            }
        }
        if (! empty($validated['primary_image'])) {
            (new ProductImageController())->update(
                $validated['primary_image'],
                $validated['secondary_images'] ?? null,
                $variant
            );
        }

        return redirect()->route('admin.products.show', $product->id)->with('success', 'Variant updated successfully.');
    }

    public function destroy(Request $request, Product $product, ProductVariant $variant)
    {
        new ProductImageController()->destroy($variant);

        $wasDefault = $variant->is_default;

        $variant->delete();

        if ($product->variants->count() === 0) {
            $product->delete();
        }

        $product->load('variants');
        if ($wasDefault) {
            $newDefault = $product->variants->first();
            if ($newDefault) {
                $newDefault->update(['is_default' => true]);
            }
        }
        return redirect()->route('admin.products')->with('success', 'Product variant deleted successfully');
    }
    public function show(Product $product, ProductVariant $variant)
    {
        dd('Show');
    }
}
