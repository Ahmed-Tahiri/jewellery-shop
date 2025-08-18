<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('cnic', 50)->unique();
            $table->string('phone_no', 50);
            $table->string('email', 100)->unique();
            $table->string('password', 50);
            $table->string('address', 100);
            $table->string('town', 100);
            $table->string('region', 100);
            $table->string('postal_code', 100);
            $table->string('country', 100);
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
