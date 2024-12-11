<?php
namespace App\Http\Controllers\Dash;
use App\Models\User;


use App\Http\Controllers\Controller;



class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('dash.admins.index');
    }

    /**
     * Show the form for creating a new resource.
     */
    
    public function create()
    {
        return view('dash.admins.create');

    }


    /**
     * Show.
     */
    
     public function profile()
     { 
        return view('dash.admins.profile');
         
     }

    /**
     * Show the form for editing the specified resource.
     */

     public function edit($lang,$admin)
     {
         
         $admin=User::find($admin);
 
         return view('dash.admins.edit',['admin'=> $admin]);
 
     }


}
