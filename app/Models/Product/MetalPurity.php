<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MetalPurity extends Model
{
    public function products(): HasMany
    {
        return $this->hasMany(ProductVariant::class, 'metal_purity_id');
    }
}
