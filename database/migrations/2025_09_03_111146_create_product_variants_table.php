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
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();

            // Sample: "RNG-001-18K-US6"
            $table->string('sku', 64)->unique();

            // e.g. "18K / US 6"
            $table->string('label', 120)->nullable();

            // Variant-specific price (nullable = inherit from product)
            // Sample: 1299.00
            $table->decimal('price', 12, 2)->nullable();
            $table->decimal('cost', 12, 2)->nullable();
            $table->boolean('is_active')->default(false);
            // Sample: 3
            $table->foreignId('metal_id')->nullable()->constrained('metals')->nullOnDelete();
            $table->foreignId('metal_purity_id')->nullable()->constrained('metal_purities')->nullOnDelete();
            $table->foreignId('finish_id')->nullable()->constrained('product_finishes')->nullOnDelete();
            $table->foreignId('color_id')->nullable()->constrained('color_tones')->nullOnDelete();
            $table->integer('stock_quantity')->default(0);
            $table->enum('stock_status', ['in stock', 'out of stock']);

            // Ring size label (store user-facing string, e.g., "6" or "M 1/2")
            // Sample: "6"
            $table->string('ring_size', 20)->nullable();

            // Necklace length in mm. Sample: 450 (18 inches ~ 457.2 mm)
            $table->decimal('bracelet_size', 6, 2)->nullable();

            // Variant weight in grams. Sample: 3.45
            $table->decimal('weight_grams', 8, 3)->nullable();

            // Flag the variant used as default in product page
            $table->boolean('is_default')->default(false);

            $table->timestamps();
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
