<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sub_services', function (Blueprint $table) {
            $table->id();
            $table->json('name'); 
            $table->foreignId('service_id')->constrained('services')->cascadeOnDelete(); 
            $table->boolean('status')->default(1)->comment('0 for disabled and 1 for active'); 
            $table->json('slug');
            $table->foreignId('referal_id')->nullable()->constrained('sub_services')->nullOnDelete(); // Optional relation
            $table->timestamps();
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_services');
    }
};
