<?php

use Illuminate\Database\Capsule\Manager;
use Illuminate\Events\Dispatcher;
use Illuminate\Container\Container;

class InstallVueSite
{
    function __construct()
    {
        require_once(vendor.'\\autoload.php');

        $db = new Manager();

        $db->addConnection($GLOBALS['settings']['maria']);
        $db->setEventDispatcher(new Dispatcher(new Container));
        $db->setAsGlobal();
        $db->bootEloquent();

        Manager::schema()->create('random', function ($table) {
            $table->increments('id');
            $table->string('slug')->unique()->nullable(false);
            $table->mediumText('content')->nullable(false);
            $table->timestamps();
        });

        unset($db);

        header('location: '.$GLOBALS['settings']['main_url'].'/home');
    }
}

(new InstallVueSite());

?>