<?php

if (!function_exists('greetUser')) {
    function asset_url($path)
    {
        return env('APP_URL') .'/'. $path;
    }
}
