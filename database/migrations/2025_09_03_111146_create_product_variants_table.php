<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_variants', function (Blueprint $table) {
            $table->bigIncrements('id');

            // FK to products
            $table->unsignedBigInteger('product_id')->index();

            // Sample: "RNG-001-18K-US6"
            $table->string('sku', 64)->unique();

            // e.g. "18K / US 6"
            $table->string('label', 120)->nullable();

            // Variant-specific price (nullable = inherit from product)
            // Sample: 1299.00
            $table->decimal('price', 12, 2)->nullable();

            // Sample: 3
            $table->integer('stock')->default(0);

            // Ring size label (store user-facing string, e.g., "6" or "M 1/2")
            // Sample: "6"
            $table->string('ring_size', 20)->nullable()->index();

            // Necklace length in mm. Sample: 450 (18 inches ~ 457.2 mm)
            $table->decimal('bracelet_size', 6, 2)->nullable();

            // Variant weight in grams. Sample: 3.45
            $table->decimal('weight_grams', 8, 3)->nullable();

            // Flag the variant used as default in product page
            $table->boolean('is_default')->default(false);

            $table->timestamps();

            // Foreign key
            $table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');


            $table->index(['product_id', 'ring_size']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_variants');
    }
};
