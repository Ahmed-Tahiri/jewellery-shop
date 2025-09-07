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
            $table->string('sku', 64)->unique();
            $table->string('slug', 150)->unique();
            $table->string('name', 255);
            $table->foreignId('subcategory_id')->constrained('sub_categories')->cascadeOnDelete();
            $table->text('short_description')->nullable();

            // Sample: long product description, care instructions, story, HTML allowed
            $table->longText('long_description')->nullable();

            $table->decimal('price', 12, 2)->nullable();

            $table->boolean('is_active')->default(false);

            // Sample values: draft, active, in_active, coming_soon
            $table->foreignId('status_id')->default(1)->constrained('statuses');


            // Inventory & fulfillment
            $table->integer('stock_quantity')->default(0);
            $table->enum('stock_status', ['in stock', 'out of stock']);

            $table->integer('lead_time_days')->default(0);

            $table->foreignId('metal_id')->nullable()->constrained('metals')->nullOnDelete();
            $table->foreignId('metal_purity_id')->nullable()->constrained('metal_purities')->nullOnDelete();
            $table->foreignId('finish_id')->nullable()->constrained('product_finishes')->nullOnDelete();
            $table->foreignId('color_id')->nullable()->constrained('color_tones')->nullOnDelete();

            $table->decimal('weight_grams', 8, 3)->nullable();

            $table->json('dimensions_mm')->nullable();
            $table->boolean('is_customizable')->default(false);

            $table->decimal('cost', 12, 2)->nullable();

            $table->timestamps();
            $table->softDeletes();
            // Indexes for common filters
            $table->index(['is_active', 'status_id']);
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
