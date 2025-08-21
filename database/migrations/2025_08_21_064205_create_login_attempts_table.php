<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('login_attempts', function (Blueprint $table) {
            $table->id();
            $table->string('identifier');
            $table->string('ip_address');
            $table->integer('attempts')->default(0);
            $table->timestamp('last_attempt_at')->nullable();
            $table->timestamp('blocked_until')->nullable();
            $table->timestamps();
            $table->index('blocked_until');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('login_attempts');
    }
};
