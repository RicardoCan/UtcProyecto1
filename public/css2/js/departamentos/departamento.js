var dep="http://localhost/Digitales/public/"
var urlDep=dep + '/apiDepartamento';
new Vue({
	
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	el:'#departamento',
	data:{
		departamentos:[],
		id_departamento:'',
		nombre:'',
		plantilla:'',
		buscar:'',
		
	},

	created:function(){
		this.getDep();
	},

	methods:{
		getDep:function(){
			this.$http.get(urlDep)
			.then(function(json){
				this.departamentos=json.data
			});
		},

		guardarDep:function(id){
			this.$http.get(urlDep + '/' + id)
			.then(function(json){
				this.id_departamento=json.data.id_departamento;
				this.nombre=json.data.nombre;
				this.plantilla=json.data.plantilla;
			});
		},

		eliminarDep:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlDep + '/' + id)
				.then(function(json){
				this.getDep();
				});
			}
			
		},

		agregarDep:function(){
			var dep={
				id_departamento:this.id_departamento,
				nombre:this.nombre,
				plantilla:this.plantilla
			};

				this.id_departamento='';
				this.nombre='';
				this.plantilla='';

			this.$http.post(urlDep,dep)
			.then(function(response){
				this.getDep();
				alert('Se Ha Agregado Con Exito');
			});

		},

		actualizarDep:function(id){
			// crear un json 
			var dep={
				id_departamento:this.id_departamento,
				nombre:this.nombre,
				plantilla:this.plantilla,
					  }
		    console.log();

			this.$http.patch(urlDep + '/' + id,dep)
			.then(function(json){
				this.getDep();
				this.limpiar();
			})
		},

		limpiar:function(){
				
				this.id_departamento='';
				this.nombre='';
				this.plantilla='';
		}

	},

	computed:{
		filtroDep:function(){
			return this.departamentos.filter((x)=>{
				return x.nombre.match(this.buscar.trim()) ||
					x.nombre.toLowerCase()
					.match(this.buscar.trim().toLowerCase());
			});
		},
	},

});
