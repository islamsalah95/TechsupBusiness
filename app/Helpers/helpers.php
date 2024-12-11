<?php

use Mcamara\LaravelLocalization\Facades\LaravelLocalization;

if (!function_exists('greetUser')) {

    function asset_url($asset = '', $hasLocale = false): string
    {
        return $hasLocale
            ? asset(sprintf('dash/assets/%s/%s', LaravelLocalization::getCurrentLocaleDirection(), trim($asset, '/')))
            : asset(sprintf('dash/assets/%s', trim($asset, '/')));
    }

    function getDirection(): string
    {
        return app()->getLocale() == 'ar' ? 'rtl'  : 'ltr';
    }

    function route_is($pattern = null, $success = '', $fail = '')
    {
        return $pattern
            ? (request()->routeIs($pattern) ? $success : $fail) : false;
    }

    function router($path)
    {
        return  route($path, ['locale' => app()->getLocale()]);
    }

    function redirectLive($path)
    {
        return  redirect()->to('/' . app()->getLocale() . '/' . 'dash' . '/' . $path);
    }

    function uploadImage($model, $img , $collectshion)
    {
        // Check if there's an existing image, and delete it if it exists
        if ($model->hasMedia($collectshion)) {
            $model->getMedia($collectshion)->each(function ($media) {
                $media->delete();
            });
        }
        // Add the new image with its original name
        $model->addMedia($img->getRealPath())
            ->usingFileName($img->getClientOriginalName())
            ->toMediaCollection($collectshion);
    }



    // function asset_url($path)
    // {
    //     return env('APP_URL') .'/'. $path;
    // }
}
