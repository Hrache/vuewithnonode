<?php

if (preg_match('/api/', $_SERVER['REQUEST_URI']))
{
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        switch ($_SERVER['REQUEST_URI']) {
            case ('/api/aboutus'): {
                require_once(api.'\\RandomController.php');
                die(RandomController::aboutus());
            }

            case ('/api/register'): {
                require_once(api.'\\AccountsController.php');
                AccountsController::register();
                header('Location: ' . settings('main_url'));
            }

            case ('/api/error'): {
                die(json_encode(["api" => $_SESSION['exception']]));
            }
        }
    }
    elseif ($_SERVER['REQUEST_METHOD'] == 'GET') {
        switch ($_SERVER['REQUEST_URI']) {
            case ('/api/install'):
                require_once(api.'\\CommonController.php');
                CommonController::installDatabase();
        }
    }
}