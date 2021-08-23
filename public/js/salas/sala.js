var route= document.querySelector("[name=route]").value;
// var Sal="http://localhost/GestionDeSalas/public/"
var urlSal=route + '/apiSalas';
new Vue({
	
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	el:'#sala',
	data:{
		salas:[],
		id_espacio:'',
		nombre:'',
		cupo:'',
		buscar:'',
		
	},

	created:function(){
		this.getSal();
	},

	methods:{
		getSal:function(){
			this.$http.get(urlSal)
			.then(function(json){
				this.salas=json.data
			});
		},

		guardarSal:function(id){
			this.$http.get(urlSal + '/' + id)
			.then(function(json){
				this.id_espacio=json.data.id_espacio;
				this.nombre=json.data.nombre;
				this.cupo=json.data.cupo;
			});
		},

		eliminarSal:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlSal + '/' + id)
				.then(function(json){
				this.getSal();
				});
			}
			
		},

		agregarSal:function(){
			var Sal={
				id_espacio:this.id_espacio,
				nombre:this.nombre,
				cupo:this.cupo
			};

				this.id_espacio='';
				this.nombre='';
				this.cupo='';

			this.$http.post(urlSal,Sal)
			.then(function(response){
				this.getSal();
				alert('Se Ha Agregado Con Exito');
			});

		},

		actualizarSal:function(id){
			// crear un json 
			var Sal={
				id_espacio:this.id_espacio,
				nombre:this.nombre,
				cupo:this.cupo,
					  }
		    console.log();

			this.$http.patch(urlSal + '/' + id,Sal)
			.then(function(json){
				this.getSal();
				this.limpiar();
			})
		},

		limpiar:function(){
				
				this.id_espacio='';
				this.nombre='';
				this.cupo='';
		}

	},

	computed:{
		filtroSal:function(){
			return this.salas.filter((x)=>{
				return x.nombre.match(this.buscar.trim()) ||
					x.nombre.toLowerCase()
					 .match(this.buscar.trim().toLowerCase());
	});
	},
	},

});
