<?php

namespace App\Models;

use App\Models\Product\Product;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Discounts extends Model
{
    protected $guarded = [];


    public function product(): HasOne
    {
        return $this->hasOne(Product::class, 'product_id');
    }
}
