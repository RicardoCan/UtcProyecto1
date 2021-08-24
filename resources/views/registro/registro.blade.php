@extends('layouts.master')
@section('titulo',' Registro')
@section('contenido')


        <div class="l-form" id="registro">
            <form action="" class="form">
                <h1 class="form__title"><center>Registro</center></h1>

                <div class="form__div">
                    <input type="text" class="form__input" name="nick" v-model="nick" placeholder=" ">
                    <label for="" class="form__label" >Nombre De Usuario</label>
                </div>

                <div class="form__div">
                    <input type="password" class="form__input"  name="password" v-model="password" placeholder=" ">
                    <label for="" class="form__label">Password</label>
                </div>

                <div class="form__div">
                    <input type="text" class="form__input" name="nombre" v-model="nombre" placeholder=" ">
                    <label for="" class="form__label">Nombres</label>
                </div>

                <div class="form__div">
                    <input type="text" class="form__input" name="apellidos" v-model="apellidos" placeholder=" ">
                    <label for="" class="form__label">Apellidos</label>
                </div>

                 <center><button type="button" class="btn btn-sm btn-primary" data-dismiss="modal" v-on:click="agregarUsu(nick)"><p class="font-italic">Guardar</p></button>

                 <button type="button" class="btn btn-sm btn-success" data-dismiss="modal"><a href="sesion"><p class="font-italic" style="color: white">sesión</p></a></button></center>
                
            </form>
        </div>

@endsection

@push('scripts')

<script src="js/vue-resource.js"></script>
<script src="js/registro/registro.js"></script>
<script src="js/vue.js"></script>
<script src="js/jquery.min.js"></script>

@endpush

<input type="hidden" name="route" value="{{url('/')}}">