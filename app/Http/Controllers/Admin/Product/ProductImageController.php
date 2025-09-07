<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Product\Product;
use App\Models\Product\ProductImage;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class ProductImageController extends Controller
{
    public function store($primaryImage, $secondaryImages, $data)
    {
        $parentProduct = Product::find($data['product_id']);
        $category = '';
        $subcategory = SubCategory::findOrFail($parentProduct->subcategory_id);
        $subcategoryName = $subcategory->name;
        if ($subcategory) {
            $category = $subcategory->category->name;
        }
        $sku = $data['sku'];
        $altText = $parentProduct['name'] . ' Image';
        $path = $primaryImage->store("product_images/$category/$subcategoryName/$sku/primary", 'public');
        $imageData = [
            'product_variant_id' => $data['id'],
            'url' => $path,
            'alt_text' => $altText,
        ];
        if (!empty($secondaryImages) && count($secondaryImages) > 0) {
            foreach ($secondaryImages as $key => $image) {
                $secondaryPath = $image->store("product_images/$category/$subcategoryName/$sku/secondary", 'public');
                $secondaryImgAltText = $data['name'] . " Image $key";
                $secondaryImageData = [
                    'product_variant_id' => $data['id'],
                    'url' =>    $secondaryPath,
                    'alt_text' => $secondaryImgAltText,
                ];
                ProductImage::create($secondaryImageData);
            };
        }
        ProductImage::create($imageData);
    }
}
