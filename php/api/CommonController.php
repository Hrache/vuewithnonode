<?php

use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Schema\Blueprint;

class CommonController
{
    static function installDatabase()
    {
        // Random
        if (!Manager::schema()->hasTable('random')) {
            Manager::schema()->create('random', function (Blueprint $table) {
                $table->increments('id');
                $table->string('slug')->unique()->nullable(false);
                $table->mediumText('content')->nullable(false);
                $table->timestamps();
            });
        }

        // Products
        if (!Manager::schema()->hasTable('products')) {
            Manager::schema()->create('products', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('image')->unique()->nullable();
                $table->double('price', 8, 2)->unique()->nullable(false);
                $table->string('name')->unique()->nullable(false);
                $table->timestamps();
            });
        }

        // Countries
        if (!Manager::schema()->hasTable('countries')) {
            Manager::schema()->create('countries', function (Blueprint $table) {
                $table->increments('id');
                $table->string('code', 3)->nullable(false)->default('');
                $table->string('name', 64)->nullable(false)->default('');
                $table->string('iso_code', 2)->nullable(false)->default('');
                $table->string('isd_code', 7)->nullable(false)->default('');
                $table->timestamps();
            });
        }

        // Product options
        if (!Manager::schema()->hasTable('productoptions')) {
            Manager::schema()->create('productoptions', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('text')->unique()->nullable(false);
                $table->unsignedBigInteger('product_id')->nullable(true);
                $table->foreign('product_id')->references('id')->on('products')->onUpdate('cascade')->onDelete('cascade');
                $table->unsignedInteger('country_id')->nullable(true);
                $table->foreign('country_id')->references('id')->on('countries')->onUpdate('cascade')->onDelete('cascade');
                $table->timestamps();
            });
        }

        session_start();

        $_SESSION['success'] = "Tables have been created successfully.";

        header('location: '.$GLOBALS['settings']['main_url'].'/home');
    }
}