<?php

namespace App\Http\Controllers\Admin\Product;

use App\Http\Controllers\Controller;
use App\Models\Product\ProductImage;
use App\Models\SubCategory;
use Illuminate\Http\Request;

class ProductImageController extends Controller
{
    public function store($primaryImage, $secondaryImages, $data)
    {
        $category = '';
        $subcategory = SubCategory::findOrFail($data['subcategory_id']);
        $subcategoryName = $subcategory->name;
        if ($subcategory) {
            $category = $subcategory->category->name;
        }
        $sku = $data['sku'];
        $altText = $data['name'] . ' Image';
        $path = $primaryImage->store("product_images/$category/$subcategoryName/$sku/primary", 'public');
        $imageData = [
            'product_id' => $data['id'],
            'url' => $path,
            'alt_text' => $altText,
        ];
        foreach ($secondaryImages as $key => $image) {
            $secondaryPath = $image->store("product_images/$category/$subcategoryName/$sku/secondary", 'public');
            $secondaryImgAltText = $data['name'] . " Image $key";
            $secondaryImageData = [
                'product_id' => $data['id'],
                'url' =>    $secondaryPath,
                'alt_text' => $secondaryImgAltText,
            ];
            ProductImage::create($secondaryImageData);
        };
        ProductImage::create($imageData);
    }
}
