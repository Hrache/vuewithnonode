<?php
if (!function_exists('logg'))
{
    function logg($content) {
        file_put_contents(root.'\\logg.txt', print_r($content, true));
    }
}

if (!function_exists('isJson'))
{
    function isJson($string) {
        json_decode($string);

        return (json_last_error() == JSON_ERROR_NONE);
    }
}

if (!function_exists('isJson'))
{
    function isJson($string) {
        json_decode($string);

        return (json_last_error() == JSON_ERROR_NONE);
    }
}

if (!function_exists('xcsrf'))
{
    function xcsrf(): string {
        return bin2hex(random_bytes(32));
    }
}

if (!function_exists('url'))
{
    function url($urlType): string {
        return $_SESSION['url'][$urlType];
    }
}

if (!function_exists('settings'))
{
    function settings($setting) {
        $config = &$GLOBALS['settings'];
        $path = explode('.', $setting);
        foreach ($path as $item) {
            $config = &$config[$item];
        }

        return $config;
    }
}