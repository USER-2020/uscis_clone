<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('client_cases', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
            $table->string('nationality', 100);
            $table->string('passport', 50);
            $table->date('birth_date');
            $table->string('case_number', 20)->unique();
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('client_cases');
    }
};
