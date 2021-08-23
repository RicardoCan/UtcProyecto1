var route= document.querySelector("[name=route]").value;
// var Sal="http://localhost/GestionDeSalas/public/"
var urlHora=route + '/apiHorarios';
new Vue({
	
	// token
	http:{
		headers:{
			'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
		}
	},

	el:'#horario',
	data:{
		horario:[],
		id_horario:'',
		horario:'',
		
	},

	created:function(){
		this.getHora();
	},

	methods:{
		getHora:function(){
			this.$http.get(urlHora)
			.then(function(json){
				this.horario=json.data
			});
		},

		guardarHora:function(id){
			this.$http.get(urlHora + '/' + id)
			.then(function(json){
				this.id_horario=json.data.id_horario;
				this.horario=json.data.horario;
			});
		},

		eliminarHora:function(id){
			var resp=confirm("¿Estas Seguro Que Deseas Eliminar?")
			if(resp==true)
			{
				this.$http.delete(urlHora + '/' + id)
				.then(function(json){
				this.getHora();
				});
			}
			
		},

		agregarHora:function(){
			var Hora={
				id_horario:this.id_horario,
				horario:this.horario,
			};

				this.id_horario='';
				this.horario='';

			this.$http.post(urlHora,Hora)
			.then(function(response){
				this.getHora();
				alert('Se Ha Agregado Con Exito');
			});

		},

		actualizarHora:function(id){
			// crear un json 
			var Hora={
				id_horario:this.id_horario,
				horario:this.horario,
					  }
		    console.log();

			this.$http.patch(urlHora + '/' + id,Hora)
			.then(function(json){
				this.getHora();
				this.limpiar();
			})
		},

		limpiar:function(){
				
				this.id_horario='';
				this.horario='';
		}

	},

	computed:{
		filtroHora:function(){
			return this.horario.filter((x)=>{
				return x.horario.match(this.buscar.trim()) ||
					x.horario.toLowerCase()
					 .match(this.buscar.trim().toLowerCase());
	});
	},
	},

});
