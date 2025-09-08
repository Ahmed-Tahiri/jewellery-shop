<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreProductVariantRequest extends FormRequest
{
    public function rules()
    {
        return [
            'primary_image' => 'required|image|mimes:jpeg,png,jpg,webp|max:3072',
            'secondary_images' => 'array|max:6',
            'secondary_images.*' => 'image|mimes:jpeg,png,jpg,webp|max:2048',
            'sku' => ['required', 'regex:/^[A-Z0-9_-]+$/', 'min:6', 'string', 'unique:products,sku'],
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
            'stock_quantity' => ['required', 'integer'],
            'stock_status' => ['required', 'in:in stock,out of stock'],
            'price' => ['required', 'decimal:0,2'],
            'cost' => ['required', 'decimal:0,2'],
        ];
    }

    public function messages()
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
        ];
    }
}
