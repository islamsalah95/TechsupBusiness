<?php

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

if (!function_exists('greetUser')) {

    function asset_url($asset='', $hasLocale = false) :string{
        return $hasLocale
            ? asset(sprintf('dash/assets/%s/%s', LaravelLocalization::getCurrentLocaleDirection(), trim($asset, '/')))
            : asset(sprintf('dash/assets/%s', trim($asset, '/')));
    }

    function getDirection() :string{
        return app()->getLocale() =='ar' ? 'rtl'  : 'ltr';
            
    }

    function route_is($pattern = null, $success = '', $fail = ''){
        return $pattern
            ? (request()->routeIs($pattern) ? $success : $fail) : false;
    }
    
    // function asset_url($path)
    // {
    //     return env('APP_URL') .'/'. $path;
    // }
}
