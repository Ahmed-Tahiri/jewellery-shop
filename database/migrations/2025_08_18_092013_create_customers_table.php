<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1) Genders (customers will reference this)
        Schema::create('genders', function (Blueprint $table) {
            $table->id();
            $table->enum('gender', ['Male', 'Female', 'Other'])->nullable();
            $table->timestamps();
        });

        // 2) Customers
        // Note: removed 'phone' and 'address_id' to avoid circular FK.
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('first_name', 50);
            $table->string('last_name', 50);
            $table->string('email', 100)->unique();
            $table->string('password');
            $table->enum('role', ['customer'])->default('customer');
            $table->string('avatar')->nullable();
            $table->datetime('last_login_at')->nullable();
            $table->foreignId('gender_id')->nullable()->constrained('genders')->nullOnDelete();
            $table->rememberToken();
            $table->timestamps();
        });

        // 3) Addresses (many addresses per customer)
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained('customers')->cascadeOnDelete();
            $table->string('street')->nullable();
            $table->string('town')->nullable();
            $table->string('state')->nullable();
            $table->string('country')->nullable();
            $table->string('zip_code')->nullable();
            $table->boolean('is_primary')->default(false);
            $table->timestamps();

            $table->index(['customer_id', 'is_primary']);
        });

        // 4) Phones (multiple phones per customer)
        Schema::create('phones', function (Blueprint $table) {
            $table->id();
            $table->foreignId('customer_id')->constrained('customers')->cascadeOnDelete();
            $table->string('phone', 30)->index();
            $table->enum('type', ['mobile', 'home', 'work'])->nullable();
            $table->boolean('is_primary')->default(false);
            $table->timestamps();

            $table->index(['customer_id', 'is_primary']);
        });

        // 5) Password resets for customers
        Schema::create('customer_password_resets', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // drop in reverse order to avoid FK issues
        Schema::dropIfExists('customer_password_resets');
        Schema::dropIfExists('phones');
        Schema::dropIfExists('addresses');
        Schema::dropIfExists('customers');
        Schema::dropIfExists('genders');
    }
};
