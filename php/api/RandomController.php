<?php

class RandomController
{
    static function aboutus()
    {
        require_once(models.'\\Random.php');

        $toSend = Random::where('slug', 'aboutus')->get()->toArray();

        return json_encode([ "api" => array_shift( $toSend)]);
    }
}