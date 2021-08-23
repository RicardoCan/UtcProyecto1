var exp="http://localhost/Digitales/public/"
var urlExp=exp + '/apiExpediente';
new Vue({
	el:'#expediente',
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	data:{
		expedientes:[],
		nombres:'',
		apellidos:'',
		sexo:'',
		direccion:'',
		correo_electronico:'',
		cargo_empresa:'',
		fecha_nacimiento:'',
		area:'',
		buscar:'',
	},

	created:function(){
		this.getExpediente();
		// this.buscar();
	},

	methods:{
		getExpediente:function(){
			this.$http.get(urlExp)
			.then(function(json){
				this.expedientes=json.data
			});
		},

		guardarExpediente:function(id){
			this.$http.get(urlExp + '/' + id)
			.then(function(json){
				this.nombres=json.data.nombres;
				this.apellidos=json.data.apellidos;
				this.sexo=json.data.sexo;
				this.direccion=json.data.direccion;
				this.correo_electronico=json.data.correo_electronico;
				this.cargo_empresa=json.data.cargo_empresa;
				this.fecha_nacimiento=json.data.fecha_nacimiento;
				this.area=json.data.area;
			});
		},

		eliminarExpediente:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlExp + '/' + id)
				.then(function(json){
				this.getExpediente();
				});
			}
			
		},

		agregarExpediente:function(){
			var exp={
				nombres:this.nombres,
				apellidos:this.apellidos,
				sexo:this.sexo,
				direccion:this.direccion,
				correo_electronico:this.correo_electronico,
				cargo_empresa:this.cargo_empresa,
				fecha_nacimiento:this.fecha_nacimiento,
				area:this.area,
			};

				this.nombres='';
				this.apellidos='';
				this.sexo='';
				this.direccion='';
				this.correo_electronico='';
				this.cargo_empresa='';
				this.fecha_nacimiento='';
				this.area='';

			this.$http.post(urlExp,exp)
			.then(function(response){
				this.getExpediente();
				alert('Se Ha Agregado Con Exito');
			});

		},

		actualizarExpediente:function(id){
			// crear un json 
			var exp={
				
				nombres:this.nombres,
				apellidos:this.apellidos,
				sexo:this.sexo,
				direccion:this.direccion,
				correo_electronico:this.correo_electronico,
				cargo_empresa:this.cargo_empresa,
				fecha_nacimiento:this.fecha_nacimiento,
				area:this.area,

					  }
		    console.log();

			this.$http.patch(urlExp + '/' + id,exp)
			.then(function(json){
				this.getExpediente();
				this.limpiar();
			})
		},

		limpiar:function(){
				this.nombres='';
				this.apellidos='';
				this.sexo='';
				this.direccion='';
				this.correo_electronico='';
				this.cargo_empresa='';
				this.fecha_nacimiento='';
				this.area='';
			
		}

	},
	

	computed:{
		filtroEx:function(){
			return this.expedientes.filter((lol)=>{
				return lol.nombres.match(this.buscar.trim()) ||  
					lol.nombres.toLowerCase()
					.match(this.buscar.trim().toLowerCase());
			});
		},
	},

	
});
