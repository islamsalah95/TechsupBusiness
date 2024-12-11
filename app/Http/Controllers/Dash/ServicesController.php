<?php

namespace App\Http\Controllers\Dash;
use App\Models\Services;
use App\Http\Controllers\Controller;


class ServicesController extends Controller
{

    public function index()
    {

        return view('dash.services.index');
    }

    public function create()
    {
        
        return view('dash.services.create');

    }

    public function edit($lang,$services)
    {
        
        $services=Services::find($services);

        return view('dash.services.edit',['services'=>$services]);

    }


}
