<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    protected $guarded = [];



    public function variants(): HasMany
    {
        return $this->hasMany(ProductVariant::class, 'product_id');
    }
    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class, 'product_id');
    }
    public function getDefaultVariantAttribute()
    {
        return $this->variants()->where('is_default', true)->first();
    }
}
