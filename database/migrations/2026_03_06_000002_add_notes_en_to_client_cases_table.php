<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('client_cases', function (Blueprint $table) {
            $table->text('notes_en')->nullable()->after('notes');
        });
    }

    public function down(): void
    {
        Schema::table('client_cases', function (Blueprint $table) {
            $table->dropColumn('notes_en');
        });
    }
};
