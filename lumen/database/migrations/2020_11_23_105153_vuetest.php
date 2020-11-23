<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Vuetest extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Accounts
        if (!Schema::hasTable('accounts')) {
            Schema::create('accounts', function (Blueprint $tbl) {
                $tbl->mediumIncrements('id');
                $tbl->string('email')->nullable(false)->unique();
                $tbl->string('password', 25)->nullable(false);
                $tbl->string('name')->nullable(false);
                $tbl->string('surname')->nullable(false);
                $tbl->timestamps();
            });
        }

        // Random
        if (!Schema::hasTable('random')) {
            Schema::create('random', function (Blueprint $table) {
                $table->increments('id');
                $table->string('slug')->unique()->nullable(false);
                $table->mediumText('content')->nullable(false);
                $table->timestamps();
            });
        }

        // Products
        if (!Schema::hasTable('products')) {
            Schema::create('products', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('image')->unique()->nullable();
                $table->double('price', 8, 2)->unique()->nullable(false);
                $table->string('name')->unique()->nullable(false);
                $table->timestamps();
            });
        }

        // Countries
        if (!Schema::hasTable('countries')) {
            Schema::create('countries', function (Blueprint $table) {
                $table->increments('id');
                $table->string('code', 3)->nullable(false)->default('');
                $table->string('name', 64)->nullable(false)->default('');
                $table->string('iso_code', 2)->nullable(false)->default('');
                $table->string('isd_code', 7)->nullable(false)->default('');
                $table->timestamps();
            });
        }

        // Product options
        if (!Schema::hasTable('productoptions')) {
            Schema::create('productoptions', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('text')->unique()->nullable(false);
                $table->unsignedBigInteger('product_id')->nullable(true);
                $table->foreign('product_id')->references('id')->on('products')->onUpdate('cascade')->onDelete('cascade');
                $table->unsignedInteger('country_id')->nullable(true);
                $table->foreign('country_id')->references('id')->on('countries')->onUpdate('cascade')->onDelete('cascade');
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
