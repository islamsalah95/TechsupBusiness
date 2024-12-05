<?php

namespace App\Http\Controllers;

use App\Models\Services;


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

    public function edit($services)
    {
        
        $services=Services::find($services);

        return view('dash.services.edit',['services'=>$services]);

    }


}
