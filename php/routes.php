<?php

switch ($_SERVER['REQUEST_URI']) {
    case ('/api/aboutus'):
        require_once(api.'\\RandomController.php');

        $ctrl = new RandomController();

        die($ctrl->aboutus());
}