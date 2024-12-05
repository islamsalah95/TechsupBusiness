<?php

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

if (!function_exists('greetUser')) {

    function asset_url($asset, $hasLocale = false) :string{
        return $hasLocale
            ? asset(sprintf('dash/assets/%s/%s', LaravelLocalization::getCurrentLocaleDirection(), trim($asset, '/')))
            : asset(sprintf('dash/assets/%s', trim($asset, '/')));
    }
    
    // function asset_url($path)
    // {
    //     return env('APP_URL') .'/'. $path;
    // }
}
