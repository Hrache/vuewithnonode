<?php

// global constants
if (!defined('root')) define('root', __DIR__);
if (!defined('vendor')) define('vendor', __DIR__.'\\vendor');
if (!defined('models')) define('models', __DIR__.'\\models');
if (!defined('api')) define('api', __DIR__.'\\api');

// calling the vendor autoload
require_once(vendor.'\\autoload.php');

// database
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

// calling helper functions
require_once('helpers.php');

session_start();

// URL
if (!isset($_SESSION['url'])) {
    $_SESSION['url'] = [
        'current' => $_SERVER['REQUEST_URI'],
        'back' => $_SERVER['REQUEST_URI']
    ];
}

if ($_SESSION['url']['back'] !== $_SESSION['url']['current']) {
    $_SESSION['url']['back'] = $_SESSION['url']['current'];
}

$_SESSION['url']['current'] = $_SERVER['REQUEST_URI'];

try {
    $db = new Manager();

    $db->addConnection(settings('maria'));
    $db->setEventDispatcher(new Dispatcher(new Container));
    $db->setAsGlobal();
    $db->bootEloquent();

    // calling the routes file
    require_once('routes.php');
}
catch (Exception $e) {
    $_SESSION['exception'] = $e->getTraceAsString();
    header('Location: ' . settings('main_url') . '/error');
}