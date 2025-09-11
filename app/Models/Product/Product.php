<?php

namespace App\Models\Product;

use App\Models\Discounts;
use App\Models\SubCategory;
use App\Models\Tags;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Product extends Model
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory;
    protected $guarded = [];


    public function variants(): HasMany
    {
        return $this->hasMany(ProductVariant::class, 'product_id');
    }
    public function subcategory(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class, 'subcategory_id');
    }
    public function status(): BelongsTo
    {
        return $this->belongsTo(Status::class, 'status_id');
    }
    public function tags(): BelongsToMany
    {
        return $this->belongsToMany(Tags::class, 'product_tag', 'product_id', 'tag_id');
    }
    public function discount_percentage(): BelongsTo
    {
        return $this->belongsTo(Discounts::class, 'product_id');
    }

    public function getDefaultVariantAttribute()
    {
        return $this->variants()->where('is_default', true)->first();
    }
}
