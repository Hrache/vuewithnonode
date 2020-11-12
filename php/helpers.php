<?php
if (!function_exists('logg'))
{
    function logg($content)
    {
        file_put_contents(root.'\\logg.txt', print_r($content, true));
    }
}

if (!function_exists('isJson'))
{
    function isJson($string)
    {
        json_decode($string);

        return (json_last_error() == JSON_ERROR_NONE);
    }
}