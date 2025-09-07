<?php

namespace App\Models\Product;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class ProductFinish extends Model
{
    protected $guarded = [];
    public function products(): HasMany
    {
        return $this->hasMany(Product::class, 'finish_id');
    }
}
