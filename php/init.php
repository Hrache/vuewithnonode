<?php

if (!defined('root')) {
    define('root', __DIR__);
}

if (!defined('vendor')) {
    define('vendor', __DIR__.'\\vendor');
}

if (!defined('models')) {
    define('models', __DIR__.'\\models');
}

if (!defined('api')) {
    define('api', __DIR__.'\\api');
}

require_once('helpers.php');

// calling the vendor autoload
require_once(vendor.'\\autoload.php');

use Illuminate\Database\Capsule\Manager;
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;

// settings for the project
$GLOBALS['settings'] = [
    'main_url' => 'http://vue.site',
    'maria' => [
        'driver'    => 'mysql',
        'host'      => 'localhost',
        'database'  => 'db_vuesite',
        'username'  => 'root',
        'password'  => '',
        'charset'   => 'utf8',
        'collation' => 'utf8_general_ci',
        'prefix'    => 'tbl_'
    ]
];

$db = new Manager();

$db->addConnection($GLOBALS['settings']['maria']);
$db->setEventDispatcher(new Dispatcher(new Container));
$db->setAsGlobal();
$db->bootEloquent();

// calling the routes file
require_once('routes.php');