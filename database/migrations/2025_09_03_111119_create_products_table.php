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

            // Sample: "A classic 0.50ct solitaire diamond ring..." (short text)
            $table->text('short_description')->nullable();

            // Sample: long product description, care instructions, story, HTML allowed
            $table->longText('long_description')->nullable();

            // Single-brand store: keep brand static, but field left for clarity
            // Sample: "MyBrand"
            $table->string('brand')->nullable();

            // Commerce
            // Sample: 1299.00
            $table->decimal('price', 12, 2)->nullable();

            // Sample: 1499.00
            $table->decimal('compare_at_price', 12, 2)->nullable();

            // Sample: true
            $table->boolean('is_published')->default(false);

            // Sample values: draft, published, archived, made_to_order
            $table->string('status', 20)->default('draft');

            // Inventory & fulfillment
            // Sample: 5
            $table->integer('stock')->default(0);

            // Sample: 7 (days)
            $table->integer('lead_time_days')->default(0);

            // Physical & jewellery specifics
            // Sample: "Gold" (Gold, Platinum, Silver, Stainless steel...)
            $table->string('metal_type', 50)->nullable()->index();

            // Sample: "18K" or "14K" or "925"
            $table->string('metal_purity', 20)->nullable()->index();

            // Sample: "polished" (polished, matte, hammered)
            $table->string('finish', 50)->nullable();

            // Sample: "yellow" (yellow, white, rose)
            $table->string('color_tone', 20)->nullable();

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
