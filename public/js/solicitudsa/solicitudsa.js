var route = document.querySelector("[name=route]").value;
// var Sal="http://localhost/GestionDeSalas/public/"
var urlSal = route + '/apisolicitudsa';
new Vue({

    // token
    http: {
        headers: {
            'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')
        }
    },

    el: '#solicitudsa',
    data: {
        solicitudsa: [],
        id_solicitud: '',
        cedula: '',
        id_espacio: '',
        fecha_solicitud: '',
        fecha_solicitada: '',
        fecha_autorizacion: '',
        titulo_actividad: '',
        detalle_actividad: '',
        aprobado: '',
        activa: '',
        clave_grupo: '',
        clave_asignatura: '',
        participantes: '',
        tipo_solicitud: '',
        buscar: '',

    },

    created: function() {
        this.getSal();
    },

    methods: {
        getSal: function() {
            this.$http.get(urlSal)
                .then(function(json) {
                    this.solicitudsas = json.data
                });
        },

        guardarSal: function(id) {
            this.$http.get(urlSal + '/' + id)
                .then(function(json) {
                    this.id_solicitud = json.data.id_solicitud;
                    this.cedula = json.data.cedula;
                    this.id_espacio = json.data.id_espacio;
                    this.fecha_solicitud = json.data.fecha_solicitud;
                    this.fecha_solicitada = json.data.fecha_solicitada;
                    this.fecha_autorizacion = json.data.fecha_autorizacion;
                    this.titulo_actividad = json.data.titulo_actividad;
                    this.detalle_actividad = json.data.detalle_actividad;
                    this.aprobado = json.data.aprobado;
                    this.activa = json.data.activa;
                    this.clave_grupo = json.data.clave_grupo;
                    this.clave_asignatura = json.data.clave_asignatura;
                    this.participantes = json.data.participantes;
                    this.tipo_solicitud = json.data.tipo_solicitud;

                });
        },

        eliminarSal: function(id) {
            var resp = confirm("¿Estas Seguro Que Deseas Eliminar?")
            if (resp == true) {
                this.$http.delete(urlSal + '/' + id)
                    .then(function(json) {
                        this.getSal();
                    });
            }

        },

        agregarSal: function() {
            var Sal = {
                id_espacio: this.id_espacio,
                nombre: this.nombre,
                cupo: this.cupo
            };

            this.id_espacio = '';
            this.nombre = '';
            this.cupo = '';

            this.$http.post(urlSal, Sal)
                .then(function(response) {
                    this.getSal();
                    alert('Se Ha Agregado Con Exito');
                });

        },

        actualizarSal: function(id) {
            // crear un json 
            var Sal = {
                id_espacio: this.id_espacio,
                nombre: this.nombre,
                cupo: this.cupo,
            }
            console.log();

            this.$http.patch(urlSal + '/' + id, Sal)
                .then(function(json) {
                    this.getSal();
                    this.limpiar();
                })
        },

        limpiar: function() {

            this.id_espacio = '';
            this.nombre = '';
            this.cupo = '';
        }

    },

    computed: {
        filtroSal: function() {
            return this.salas.filter((x) => {
                return x.nombre.match(this.buscar.trim()) ||
                    x.nombre.toLowerCase()
                    .match(this.buscar.trim().toLowerCase());
            });
        },
    },

});