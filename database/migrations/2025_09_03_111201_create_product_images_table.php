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
        Schema::create('product_images', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('product_variant_id')->constrained('product_variants')->cascadeOnDelete();
            $table->string('url');
            $table->string('alt_text')->nullable();
            $table->timestamps();
            $table->index(['product_variant_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_images');
    }
};
