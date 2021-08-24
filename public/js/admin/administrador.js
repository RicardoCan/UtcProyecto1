var route = document.querySelector("[name=route]").value;
// var admin="http://localhost/GestionDeSalas/public/"
var urlAdmin=route + '/apiAdministrador';
new Vue({
	el:'#administrador',
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	data:{
		administradores:[],
		nick:'',
		password:'',
		nombre:'',
		apellidos:'',
		id_rol:1,
		active:'Administrador',
		
	},

	created:function(){
		this.getAdmin();
	},

	methods:{
		getAdmin:function(){
			this.$http.get(urlAdmin)
			.then(function(json){
				this.administradores=json.data
			});
		},

		guardarAdmin:function(id){
			this.$http.get(urlAdmin + '/' + id)
			.then(function(json){
				this.nick=json.data.nick;
				this.password=json.data.password;
				this.nombre=json.data.nombre;
				this.apellidos=json.data.apellidos;
				this.id_rol=json.data.id_rol;
				this.active=json.data.active;
			});
		},

		eliminarAdmin:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlAdmin + '/' + id)
				.then(function(json){
				this.getAdmin();
				});
			}
			
		},

		agregarAdmin:function(){
			var admin={
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
				this.id_rol=1;
				this.active='Administrador';
	
			this.$http.post(urlAdmin,admin)
			.then(function(response){
				this.getAdmin();
				alert('Se Ha Agregado Con Exito');
			});

		},

		actualizarAdmin:function(id){
			// crear un json 
			var admin={
				nick:this.nick,
				password:this.password,
				nombre:this.nombre,
				apellidos:this.apellidos,
				id_rol:this.id_rol,
				active:this.active,
				
					  }
		    console.log();

			this.$http.patch(urlAdmin + '/' + id,admin)
			.then(function(json){
				this.getAdmin();
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

