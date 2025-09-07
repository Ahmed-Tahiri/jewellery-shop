<?php

namespace App\Models\Product;

use App\Models\SubCategory;
use App\Models\Tags;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
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
    public function subcategory(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class, 'subcategory_id');
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
    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class, 'status_id');
    }
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tags::class, 'product_tag', 'product_id', 'tag_id');
    }

    public function getDefaultVariantAttribute()
    {
        return $this->variants()->where('is_default', true)->first();
    }
}
