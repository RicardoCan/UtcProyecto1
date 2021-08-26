<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Administrador;

class apiAdministradoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $administrador=Administrador::all();
        return $administrador;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $administrador=new Administrador;
        $administrador->nick=$request->get('nick');
        $administrador->password=$request->get('password');
        $administrador->nombre=$request->get('nombre');
        $administrador->apellidos=$request->get('apellidos');
        $administrador->id_rol=$request->get('id_rol');
        $administrador->active=$request->get('active');
        $administrador->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $administrador=Administrador::find($id);
        return $administrador;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $administrador=Administrador::find($id);
        $administrador->nick=$request->get('nick');
        $administrador->password=$request->get('password');
        $administrador->nombre=$request->get('nombre');
        $administrador->apellidos=$request->get('apellidos');
        $administrador->id_rol=$request->get('id_rol');
        $administrador->active=$request->get('active');
        $administrador->update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
         return Administrador::destroy($id);
    }
}
