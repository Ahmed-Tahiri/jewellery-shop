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
        Schema::create('products', function (Blueprint $table) {
            $table->bigIncrements('id');

            // Sample: "RNG-001" (unique product code used in your admin)
            $table->string('sku', 64)->unique();
            // Sample: "classic-solitaire-0-50ct-18k" (SEO friendly)
            $table->string('slug', 150)->unique();

            // Sample: "Classic Solitaire Ring"
            $table->string('name', 255);
            $table->foreignId('subcategory_id')->constrained('sub_categories')->cascadeOnDelete();
            // Sample: "A classic 0.50ct solitaire diamond ring..." (short text)
            $table->text('short_description')->nullable();

            // Sample: long product description, care instructions, story, HTML allowed
            $table->longText('long_description')->nullable();

            // Sample: 1299.00
            $table->decimal('price', 12, 2)->nullable();

            // Sample: true
            $table->boolean('is_published')->default(false);

            // Sample values: draft, published, archived, made_to_order
            $table->string('status', 20)->default('draft');

            // Inventory & fulfillment
            // Sample: 5
            $table->integer('stock')->default(0);

            // Sample: Estimated time for delivery(7 days)
            $table->integer('lead_time_days')->default(0);

            // Physical & jewellery specifics
            // Sample: "Gold" (Gold, Platinum, Silver, Stainless steel...)
            $table->foreignId('metal_id')->nullable()->constrained('metals')->nullOnDelete();
            $table->foreignId('metal_purity_id')->nullable()->constrained('metal_purities')->nullOnDelete();
            $table->foreignId('finish_id')->nullable()->constrained('product_finishes')->nullOnDelete();
            $table->foreignId('color_id')->nullable()->constrained('color_tones')->nullOnDelete();

            // Total product weight in grams. Sample: 3.45
            $table->decimal('weight_grams', 8, 3)->nullable();

            // Dimensions in mm (JSON encoded recommended). Sample: {"width":2.5,"height":1.8}
            $table->json('dimensions_mm')->nullable()->comment('Sample: {"width":2.5,"height":1.8} (mm)');
            $table->boolean('is_customizable')->default(false);

            // Admin/operational
            // Sample: 199.50 (your internal cost)
            $table->decimal('cost', 12, 2)->nullable();

            $table->timestamps();
            $table->softDeletes();
            // Indexes for common filters
            $table->index(['is_published', 'status']);
            $table->index(['price']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
