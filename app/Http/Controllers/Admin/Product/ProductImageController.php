<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Product\Product;
use App\Models\Product\ProductImage;
use App\Models\Product\ProductVariant;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductImageController extends Controller
{

    public function store($primaryImage, $secondaryImages, $variant)
    {
        $parentProduct = $variant->product ?? Product::find($variant->product_id);
        $subcategory = SubCategory::find($parentProduct->subcategory_id);
        $subcategoryName = $subcategory?->name ?? '';
        $category = $subcategory?->category->name ?? '';
        $altText = $parentProduct['name'] . ' Image';
        $variantId = $variant->id;

        $primaryPath = $primaryImage->store("product_images/$category/$subcategoryName/$variantId/primary", 'public');
        ProductImage::create([
            'product_variant_id' => $variantId,
            'url' => $primaryPath,
            'is_primary' => true,
            'alt_text' => $altText,
        ]);

        if (!empty($secondaryImages) && is_array($secondaryImages)) {
            foreach ($secondaryImages as $key => $image) {
                $secondaryPath = $image['file']->store("product_images/$category/$subcategoryName/$variantId/secondary", 'public');
                ProductImage::create([
                    'product_variant_id' => $variantId,
                    'url' => $secondaryPath,
                    'alt_text' => $parentProduct['name'] . " Image " . ($key + 1),
                ]);
            }
        }
    }


    public function update($primaryImage = null, $secondaryImages = null, $variant)
    {
        $parentProduct = $variant->product ?? Product::find($variant->product_id);
        $subcategory = SubCategory::find($parentProduct->subcategory_id);
        $subcategoryName = $subcategory?->name ?? '';
        $category = $subcategory?->category->name ?? '';
        $altText = $parentProduct['name'] . ' Image';
        $variantId = $variant->id;


        $existingPrimary = ProductImage::where('product_variant_id', $variantId)
            ->where('is_primary', true)
            ->first();

        if ($primaryImage instanceof UploadedFile) {

            if ($existingPrimary) {
                if (
                    !Str::startsWith($existingPrimary->url, ['http://', 'https://']) &&
                    Storage::disk('public')->exists($existingPrimary->url)
                ) {
                    Storage::disk('public')->delete($existingPrimary->url);
                }
                $existingPrimary->delete();
            }

            $path = $primaryImage->store("product_images/$category/$subcategoryName/$variantId/primary", 'public');
            ProductImage::create([
                'product_variant_id' => $variantId,
                'url' => $path,
                'is_primary' => true,
                'alt_text' => $altText,
            ]);
        } elseif (is_string($primaryImage) && trim($primaryImage) !== '') {

            if ($existingPrimary) {
                if ($existingPrimary->url !== $primaryImage) {
                    if (
                        !Str::startsWith($existingPrimary->url, ['http://', 'https://']) &&
                        Storage::disk('public')->exists($existingPrimary->url)
                    ) {
                        Storage::disk('public')->delete($existingPrimary->url);
                    }
                    $existingPrimary->update([
                        'url' => $primaryImage,
                        'alt_text' => $altText,
                    ]);
                }
            } else {
                ProductImage::create([
                    'product_variant_id' => $variantId,
                    'url' => $primaryImage,
                    'is_primary' => true,
                    'alt_text' => $altText,
                ]);
            }
        }


        if (is_array($secondaryImages)) {
            $existingSecondaries = ProductImage::where('product_variant_id', $variantId)
                ->where('is_primary', false)
                ->get()
                ->keyBy('id');

            $sentIds = collect($secondaryImages)->pluck('id')->filter()->all();


            foreach ($existingSecondaries as $id => $existing) {
                if (!in_array($id, $sentIds)) {
                    if (
                        !Str::startsWith($existing->url, ['http://', 'https://']) &&
                        Storage::disk('public')->exists($existing->url)
                    ) {
                        Storage::disk('public')->delete($existing->url);
                    }
                    $existing->delete();
                }
            }

            // 2. Process each incoming image
            foreach ($secondaryImages as $key => $imageData) {
                $altText = $parentProduct['name'] . " Image " . ($key + 1);

                // New file upload
                if (isset($imageData['file']) && $imageData['file'] instanceof UploadedFile) {
                    // If replacing an old image
                    if (!empty($imageData['id']) && isset($existingSecondaries[$imageData['id']])) {
                        $old = $existingSecondaries[$imageData['id']];
                        if (
                            !Str::startsWith($old->url, ['http://', 'https://']) &&
                            Storage::disk('public')->exists($old->url)
                        ) {
                            Storage::disk('public')->delete($old->url);
                        }
                        $old->delete();
                    }

                    $path = $imageData['file']->store("product_images/$category/$subcategoryName/$variantId/secondary", 'public');
                    ProductImage::create([
                        'product_variant_id' => $variantId,
                        'url' => $path,
                        'alt_text' => $altText,
                        'is_primary' => false,
                    ]);

                    // Keep unchanged URL
                } elseif (!empty($imageData['url'])) {
                    if (!empty($imageData['id']) && isset($existingSecondaries[$imageData['id']])) {
                        $existingSecondaries[$imageData['id']]->update([
                            'url' => $imageData['url'],
                            'alt_text' => $altText,
                        ]);
                    } else {
                        ProductImage::create([
                            'product_variant_id' => $variantId,
                            'url' => $imageData['url'],
                            'alt_text' => $altText,
                            'is_primary' => false,
                        ]);
                    }
                }
            }
        } else {

            $existingSecondaries = ProductImage::where('product_variant_id', $variantId)
                ->where('is_primary', false)
                ->get();

            foreach ($existingSecondaries as $existing) {
                if (
                    !Str::startsWith($existing->url, ['http://', 'https://']) &&
                    Storage::disk('public')->exists($existing->url)
                ) {
                    Storage::disk('public')->delete($existing->url);
                }
                $existing->delete();
            }
        }
    }
}
