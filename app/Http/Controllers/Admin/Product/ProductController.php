<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Http\Controllers\TagsController;
use App\Models\Category;
use App\Models\Product\ColorTone;
use App\Models\Product\Metal;
use App\Models\Product\MetalPurity;
use App\Models\Product\Product;
use App\Models\Product\ProductFinish;
use App\Models\Product\Status;
use App\Models\SubCategory;
use App\Models\Tags;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    protected function productValidationRules(): array
    {
        return [
            'primary_image' => 'required|image|mimes:jpeg,png,jpg,webp|max:3072',
            'secondary_images' => 'array|max:6',
            'secondary_images.*' => 'image|mimes:jpeg,png,jpg,webp|max:2048',
            'name' => ['required', 'string', 'min:3'],
            'sku' => ['required', 'regex:/^[A-Z0-9_-]+$/', 'min:6', 'string', 'unique:products,sku'],
            'short_description' => ['required', 'min:10'],
            'weight_grams' => ['required', 'decimal:0,2'],
            'metal_type' => ['required', 'exists:metals,id'],
            'metal_purity' => ['nullable', 'exists:metal_purities,id'],
            'finish' => ['required', 'exists:product_finishes,id'],
            'color_tone.id' => ['required', 'exists:color_tones,id'],

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

            'length_mm' => ['nullable', 'decimal:0,2'],
            'width_mm'  => ['nullable', 'decimal:0,2'],
            'height_mm' => ['nullable', 'decimal:0,2'],
            'diameter_mm' => ['nullable', 'decimal:0,2'],
            'long_description' => ['required', 'min:50'],
            'status' => ['required', 'exists:statuses,id'],
            'stock_quantity' => ['required', 'integer'],
            'stock_status' => ['required', 'in:in stock,out of stock'],
            'price' => ['required', 'decimal:0,2'],
            'cost' => ['required', 'decimal:0,2'],
            'subcategory' => ['required', 'exists:sub_categories,id'],
            'lead_time_days' => ['nullable', 'integer'],
        ];
    }

    protected function productValidationMessages(): array
    {
        return [
            'primary_image.required' => 'Please upload primary image.',
            'primary_image.image' => 'Please upload valid image file.',
            'primary_image.max' => 'Image is too large! Max allowed size is 2MB.',
            'secondary_images.max' => 'Maximum 6 secondary images are allowed.',
            'secondary_images.*.max' => ':attribute is too large (max 2MB).',
            'metal_type.required' => 'Please select metal type.',
            'color_tone.id.required' => 'Please select color tone.',
            'status.required' => 'Please select status.',
            'subcategory.required' => 'Please select categories.',
        ];
    }

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
        $statuses = Status::all(['id', 'status as name']);
        $finishes = ProductFinish::all(['id', 'name']);
        return Inertia::render('Admin/Products/Create', [
            'categories' => $categories,
            'subcategories' => $subcategories,
            'metals' => $metals,
            'metal_purities' => $metal_purities,
            'color_tones' => $color_tones,
            'statuses' => $statuses,
            'finishes' => $finishes,
        ]);
    }
    public function store(Request $request)
    {
        $attributes = [];
        if ($request->hasFile('secondary_images')) {
            foreach ($request->file('secondary_images') as $index => $file) {
                $attributes["secondary_images.$index"] = "Secondary image " . ($index + 1);
            }
        }
        $validated = $request->validate($this->productValidationRules(),   $this->productValidationMessages(),   $attributes);
        $data = [
            'sku'                => $validated['sku'],
            'slug'               => Str::slug($validated['name']),
            'name'               => $validated['name'],
            'subcategory_id'     => $validated['subcategory'],
            'short_description'  => $validated['short_description'],
            'long_description'   => $validated['long_description'],
            'status_id'          => $validated['status'],
            'lead_time_days'     => $validated['lead_time_days'] ?? 0,
        ];

        $product = Product::create($data);
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
        // $variantData['primary_image'] = $validated['primary_image'];
        // $variantData['secondary_images'] = $validated['secondary_images'];
        !$product->variants()->exists() ??  $variantData['is_default'] = true;
        $productVariant = new ProductVariantController()->store($request, $product, $variantData);
        $tags =  new TagsController()->store($data);
        $product->tags()->sync($tags);

        return redirect()->route('admin.products')->with('success', 'Product added successfully');
    }
}
