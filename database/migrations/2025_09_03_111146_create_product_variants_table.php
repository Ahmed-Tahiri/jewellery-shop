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
            $table->string('sku')->unique();
            // e.g. "18K / US 6"
            $table->string('label', 120)->nullable();
            $table->decimal('price', 12, 2)->nullable();
            $table->decimal('cost', 12, 2)->nullable();
            $table->foreignId('metal_id')->nullable()->constrained('metals')->nullOnDelete();
            $table->foreignId('metal_purity_id')->nullable()->constrained('metal_purities')->nullOnDelete();
            $table->foreignId('finish_id')->nullable()->constrained('product_finishes')->nullOnDelete();
            $table->foreignId('color_id')->nullable()->constrained('color_tones')->nullOnDelete();
            $table->integer('stock_quantity')->default(0);
            $table->enum('stock_status', ['in stock', 'out of stock']);
            $table->decimal('weight_grams', 8, 3)->nullable();
            $table->boolean('is_default')->default(false);
            $table->decimal('height_mm', 12, 2)->nullable();
            $table->decimal('width_mm', 12, 2)->nullable();
            $table->decimal('length_mm', 12, 2)->nullable();
            $table->decimal('diameter_mm', 12, 2)->nullable();
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
