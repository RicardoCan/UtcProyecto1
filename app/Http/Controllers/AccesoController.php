<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Usuario;
use Session;
use Redirect;
use Cache;
use Cookie;
class AccesoController extends Controller
{
    public function validar(Request $request)
    {
        
        $usuario=$request->usuario;
        $password=$request->password;
        // $carrera=$request->carrera;

        $resp=Usuario::where('nick','=',$usuario)
        ->where('password','=', $password)
        // ->where('carrera','=', $carrera)
        ->get();
       

        // return $resp;
        if (count($resp)>0){

             $user =$resp[0]->nombre.' '.$resp[0]->apellidos;

            Session::put('usuario',$user);
            Session::put('rol',$resp[0]->rol->rol);
            // Session::put('foto',$resp[0]->rol->foto);
            // Session::put('carrera',$resp[0]->carrera);

            if($resp[0]->rol->rol=="Administrador")
              return Redirect::to('home');
         
            elseif ($resp[0]->rol->rol=="Usuario"){
                 return Redirect::to('docentes');
                
            }

            }else
                return Redirect::to('error');
            

            
    }

    public function salir(){
        Session::flush();
        Session::reflash();
        Cache::flush();
        Cookie::forget('laravel_session');
        unset($_COOKIE);
        unset($_SESSION);
        return Redirect::to('/');
    }
}