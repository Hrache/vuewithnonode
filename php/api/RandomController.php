<?php

class RandomController
{
    function aboutus()
    {
        require_once(models.'\\RandomModel.php');

        $toSend = RandomModel::where('slug', 'aboutus')->get()->toArray();

        return json_encode([ "api" => array_shift( $toSend)]);
    }
}