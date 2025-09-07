<?php

namespace App\Http\Controllers;

use App\Models\Product\ColorTone;
use App\Models\Product\Metal;
use App\Models\Product\MetalPurity;
use App\Models\Product\ProductFinish;
use App\Models\SubCategory;
use App\Models\Tags;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class TagsController extends Controller
{
    public function store($data): array
    {
        $tags = [];
        $subCategory = SubCategory::with('category')->find($data['subcategory_id']);
        $metal = Metal::find($data['metal_id']);
        $color = ColorTone::find($data['color_id']);
        $finish = ProductFinish::find($data['finish_id']);
        $metalPurity = !empty($data['metal_purity_id']) ? MetalPurity::find($data['metal_purity_id']) : null;
        if ($subCategory) {
            $tags[] =  Str::studly($subCategory->name);
            if ($subCategory->category) {
                $tags[] =  Str::studly($subCategory->category->name);
            }
        }
        if ($metal) {
            $tags[] =  Str::studly($metal->name);
        }
        if ($color) {
            $tags[] =  Str::studly($color->name);
        }
        if ($finish) {
            $tags[] =  Str::studly($finish->name);
        }

        if ($metalPurity) {
            $tags[] =  Str::studly($metalPurity->purity);
        }
        $tagIds = [];

        foreach ($tags as $tag) {
            $tag =  Tags::firstOrCreate(['name' => $tag]);
            $tagIds[] = $tag->id;
        }
        return $tagIds;
    }
}
