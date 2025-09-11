<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Http\Controllers\TagsController;
use App\Models\Category;
use App\Models\Discounts;
use App\Models\Product\ColorTone;
use App\Models\Product\Metal;
use App\Models\Product\MetalPurity;
use App\Models\Product\Product;
use App\Models\Product\ProductFinish;
use App\Models\Product\ProductVariant;
use App\Models\Product\Status;
use App\Models\SubCategory;
use App\Services\ProductVariantService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

/**
 * @method static creating(\Closure $callback)
 * @method static updating(\Closure $callback)
 */
class ProductController extends Controller
{
    protected function productValidationRules(): array
    {
        return [
            'primary_image' => 'required|image|mimes:jpeg,png,jpg,webp|max:3072',
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

            'size' => ['nullable', 'decimal:0,2'],
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
            'finish.required' => 'Please select finish type.',
            'color_tone.id.required' => 'Please select color tone.',
            'status.required' => 'Please select status.',
            'subcategory.required' => 'Please select categories.',
            'discount_start_time' => ['required_if:discount', 'date'],
            'discount_end_time'   => ['required_if:discount', 'date', 'after:discount_start_time'],
        ];
    }

    public function index()
    {
        $variants = ProductVariant::select('id', 'sku', 'product_id', 'price', 'cost')
            ->with([
                'product:id,subcategory_id,name,is_active,created_at',
                'product.subcategory:id,name,parent_id',
                'product.subcategory.category:id,name',
                'primaryImage:product_variant_id,url,alt_text'
            ])
            ->where('is_default', true)
            ->get()->map(function ($variant) {
                return [
                    'id' => $variant->product?->id,
                    'price' => $variant?->price,
                    'cost' => $variant?->cost,
                    'sku' => $variant?->sku,
                    'created_at' => $variant->product?->created_at,
                    'name' => $variant->product?->name,
                    'is_active' => $variant->product?->is_active,
                    'category' => $variant->product?->subcategory?->category?->name,
                    'image' => $variant->primaryImage
                ];
            });
        return Inertia::render('Admin/Products/Index', ['products' => $variants]);
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
    protected function createSlug(string $name, string $modelClass, string $column = 'slug', ?int $ignoreId = null): string
    {
        $slug = Str::slug($name);
        $originalSlug = $slug;
        $counter = 1;

        while (
            $modelClass::where($column, $slug)
            ->when($ignoreId, fn($q) => $q->where('id', '!=', $ignoreId))
            ->exists()
        ) {
            $slug = "{$originalSlug}-{$counter}";
            $counter++;
        }

        return $slug;
    }
    public function store(Request $request, ProductVariantService $productVariantService)
    {
        $attributes = [];
        if ($request->has('secondary_images')) {
            foreach ($request->input('secondary_images') as $index => $image) {
                $num = $index + 1;
                $attributes["secondary_images.$index.id"]   = "Secondary image $num";
                $attributes["secondary_images.$index.url"]  = "Secondary image $num";
                $attributes["secondary_images.$index.file"] = "Secondary image $num";
            }
        }
        $validated = $request->validate($this->productValidationRules(),   $this->productValidationMessages(),   $attributes);
        $discountInput = $request->input('discount');
        $discountValidation = [];
        if ($discountInput !== null) {
            $discountValidation = $request->validate([
                'discount' => ['numeric', 'min:1', 'max:100'],
                'discount_start_time' => ['required', 'date'],
                'discount_end_time' => ['required', 'date', 'after:discount_start_time'],
            ], [
                'discount_end_time.after' => 'The discount end time must be after the start time.',
                'discount_start_time.required' => 'Start time is required when a discount is set.',
                'discount_end_time.required'   => 'End time is required when a discount is set.',
            ]);
        }
        $data = [
            'sku'                => $validated['sku'],
            'name'               => $validated['name'],
            'slug' =>  $this->createSlug($validated['name'], Product::class),
            'subcategory_id'     => $validated['subcategory'],
            'short_description'  => $validated['short_description'],
            'long_description'   => $validated['long_description'],
            'status_id'          => $validated['status'],
            'lead_time_days'     => $validated['lead_time_days'],
        ];
        $subcategory = SubCategory::find($validated['subcategory']);
        $parentCategoryName = Str::lower($subcategory->category->name);
        if ($parentCategoryName == 'customized' || $parentCategoryName == 'customize' || $parentCategoryName == 'customized jewellery' || $parentCategoryName == 'personalized' || $parentCategoryName == 'personalize' || $parentCategoryName == 'personalized jewellery') {
            $data['is_customizable'] = true;
        }

        $status = Status::where('status', 'active')->first();
        if ($status->id === (int) $validated['status']) {
            $data['is_active'] = true;
        }

        $product = Product::create($data);

        $tags =  new TagsController()->store($validated);

        $product->tags()->sync($tags);

        $productVariantService->create($product, $validated);

        if ($discountValidation) {
            $modifiedDiscountData = [
                'product_id' => $product->id,
                'discount_percent' => $discountValidation['discount'],
                'start_date' => $discountValidation['discount_start_time'],
                'end_date' => $discountValidation['discount_end_time'],
                'is_active' => true,
                'type' => 'product'
            ];
            Discounts::create($modifiedDiscountData);
        }
        return redirect()->route('admin.products.variants.successful',  $product->id)->with('success', "$product->name SKU:($product->sku) added successfully!");
    }

    public function show(Product $product)
    {
        $productData =   $product->load(['subcategory:parent_id,id,name', 'subcategory.category', 'status', 'variants.primaryImage', 'variants.metal', 'variants.color_tone']);
        $productFormattedData = [
            'id' => $productData->id,
            'name' => $productData->name,
            'category' => $productData->subcategory->category->name,
            'subcategory' => $productData->subcategory->name,
            'variants' => $productData->variants,
            'shortDescription' => $productData->short_description,
            'longDescription' => $productData->long_description,
            'estimatedDeliverTime' => $productData->lead_time_days,
            'sku' => $productData->sku,
            'status' => $productData->status->status,
            'createdAt' => $productData->created_at,
            'updatedAt' => $productData->updated_at,
        ];
        $images = $productData->variants->flatMap->images
            ->where('is_primary', true)
            ->unique('url')
            ->values();
        return Inertia::render('Admin/Products/Show', ['product' => $productFormattedData, 'productImages' => $images]);
    }
    public function edit(Product $product)
    {
        $categories = Category::all(['name', 'id']);
        $subcategories = SubCategory::all(['id', 'name', 'parent_id']);
        $statuses = Status::all(['id', 'status as name']);
        $productData =   $product->load(['subcategory:parent_id,id,name', 'subcategory.category', 'status']);
        $productFormattedData = [
            'id' => $productData->id,
            'name' => $productData->name,
            'category' => $productData->subcategory->category,
            'subcategory' => $productData->subcategory,
            'shortDescription' => $productData->short_description,
            'longDescription' => $productData->long_description,
            'estimatedDeliverTime' => $productData->lead_time_days,
            'sku' => $productData->sku,
            'status' => [
                'id' => $productData->status->id,
                'name' => $productData->status->status,
            ],
        ];

        return Inertia::render('Admin/Products/Edit', [
            'product' => $productFormattedData,
            'categories' => $categories,
            'subcategories' => $subcategories,
            'statuses' => $statuses,
        ]);
    }

    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:3'],
            'sku' => [
                'required',
                'regex:/^[A-Z0-9_-]+$/',
                'min:6',
                'string',
                Rule::unique('products', 'sku')->ignore($product->id),
            ],
            'short_description' => ['required', 'min:10'],
            'long_description' => ['required', 'min:50'],
            'status' => ['required', 'exists:statuses,id'],
            'subcategory' => ['required', 'exists:sub_categories,id'],
            'lead_time_days' => ['nullable', 'integer'],
        ], [
            'status.required' => 'Please select status.',
            'subcategory.required' => 'Please select categories.',
        ]);
        $data = [
            'sku'                => $validated['sku'],
            'name'               => $validated['name'],
            'subcategory_id'     => $validated['subcategory'],
            'short_description'  => $validated['short_description'],
            'long_description'   => $validated['long_description'],
            'status_id'          => $validated['status'],
            'lead_time_days'     => $validated['lead_time_days'],
        ];
        $subcategory = SubCategory::find($validated['subcategory']);
        $parentCategoryName = Str::lower($subcategory->category->name);
        if ($parentCategoryName == 'customized' || $parentCategoryName == 'customize' || $parentCategoryName == 'customized jewellery' || $parentCategoryName == 'personalized' || $parentCategoryName == 'personalize' || $parentCategoryName == 'personalized jewellery') {
            $data['is_customizable'] = true;
        } else {
            $data['is_customizable'] = false;
        }

        $status = Status::where('status', 'active')->first();
        if ($status->id === (int) $validated['status']) {
            $data['is_active'] = true;
        }
        $product->update($data);

        return redirect()->route('admin.products.variants.successful',  $product->id)->with('success', "$product->name SKU:($product->sku) updated successfully!");
    }

    public function destroy(Request $request, Product $product)
    {

        foreach ($product->variants as $variant) {
            new ProductImageController()->destroy($variant);
            $variant->delete();
        }
        $product->delete();
        return redirect()->route('admin.products')->with('success', 'Product variant deleted successfully');
    }

    public function statusUpdate(Request $request, Product $product)
    {
        $activeInput = $request->input('is_active');
        $product->is_active = $activeInput;
        if ($activeInput === 1) {
            $status = Status::where('status', 'active')->first();
            $product->status_id = $status->id;
        } else {
            $status = Status::where('status', 'draft')->first();
            $product->status_id = $status->id;
        }
        $product->save();
        return redirect()->back()->with('success', 'Status updated successfully');
    }
}
