<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', function() use ($router) {
    return view('home');
});

$router->post('/token', ['as' => 'token', 'uses' => 'TokenController@token']);

$router->group([
    'prefix' => '/products',
    'middleware' => 'auth'
], function() use ($router) {

    $router->post('/', ['as' => 'products.index', 'uses' => 'ProductsController@index']);
});
