<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ProductVariant extends Model
{
    /** @use HasFactory<\Database\Factories\ProductVariantFactory> */
    use HasFactory;
    protected $guarded = [];



    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class, 'product_variant_id');
    }
    public function metal(): BelongsTo
    {
        return $this->belongsTo(Metal::class, 'metal_id');
    }
    public function metal_purity(): BelongsTo
    {
        return $this->belongsTo(MetalPurity::class, 'metal_purity_id');
    }
    public function color_tone(): BelongsTo
    {
        return $this->belongsTo(ColorTone::class, 'color_id');
    }
    public function finish(): BelongsTo
    {
        return $this->belongsTo(ProductFinish::class, 'finish_id');
    }
    public function primaryImage(): HasOne
    {
        return $this->hasOne(ProductImage::class, 'product_variant_id')
            ->where('is_primary', true);
    }
    public function secondaryImages(): HasMany
    {
        return $this->hasMany(ProductImage::class, 'product_variant_id')
            ->where('is_primary', false);
    }
}
