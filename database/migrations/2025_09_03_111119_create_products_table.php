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
            $table->string('sku')->unique();
            $table->string('slug')->unique();
            $table->string('name', 255);
            $table->foreignId('subcategory_id')->constrained('sub_categories')->cascadeOnDelete();
            $table->text('short_description')->nullable();
            $table->longText('long_description')->nullable();
            $table->boolean('is_active')->default(false);
            $table->foreignId('status_id')->default(1)->constrained('statuses');
            $table->integer('lead_time_days')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->index(['is_active', 'status_id']);
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
