var route = document.querySelector("[name=route]").value;
// var admin="http://localhost/GestionDeSalas/public/"
var urlUsu=route + '/apiRegistro';
new Vue({
	el:'#registro',
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	data:{
		usuarios:[],
		nick:'',
		password:'',
		nombre:'',
		apellidos:'',
		id_rol:2,
		active:'Usuario',
		
	},

	created:function(){
		this.getUsu();
	},

	methods:{
		getUsu:function(){
			this.$http.get(urlUsu)
			.then(function(json){
				this.usuarios=json.data
			});
		},

		guardarUsu:function(id){
			this.$http.get(urlUsu + '/' + id)
			.then(function(json){
				this.nick=json.data.nick;
				this.password=json.data.password;
				this.nombre=json.data.nombre;
				this.apellidos=json.data.apellidos;
				this.id_rol=json.data.id_rol;
				this.active=json.data.active;
			});
		},

		eliminarUsu:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlUsu + '/' + id)
				.then(function(json){
				this.getUsu();
				});
			}
			
		},

		agregarUsu:function(){
			var usu={
				nick:this.nick,
				password:this.password,
				nombre:this.nombre,
				apellidos:this.apellidos,
				id_rol:this.id_rol,
				active:this.active,
			};

				this.nick='';
				this.password='';
				this.nombre='';
				this.apellidos='';
				this.id_rol=2;
				this.active='Usuario';
	
			this.$http.post(urlUsu,usu)
			.then(function(response){
				this.getUsu();
				alert('Se Ha Agregado Con Exito');
			});

		},

		actualizarUsu:function(id){
			// crear un json 
			var usu={
				nick:this.nick,
				password:this.password,
				nombre:this.nombre,
				apellidos:this.apellidos,
				id_rol:this.id_rol,
				active:this.active,
				
					  }
		    console.log();

			this.$http.patch(urlUsu + '/' + id,usu)
			.then(function(json){
				this.getUsu();
				this.limpiar();
			})
		},

		limpiar:function(){
				this.nick='';
				this.password='';
				this.nombre='';
				this.apellidos='';
				this.id_rol='';
				this.active='';
				
			
		}

	},

});

