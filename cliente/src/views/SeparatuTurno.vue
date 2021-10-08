<template>
    <div class="separatuTurno">
        <div class="card text-center">
            <div class="card-header section-title">
                Nuestra Agenda
            </div>
            <div class="card-body section-body">

                <div class="card mb-3" style="max-width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Agenda tu cita</h5>
                        <p class="card-text">Por favor ingresa la siguiente información para poder agenda tu cita</p>
                    </div>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="@/assets/images/calendar.png" class="img-fluid rounded-start photo" alt="semi">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <div class="container-registro">
                                    <div class="row registro1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <form>

                                            <div class="campos-formulario">
                                                <label>Nombre </label><br>
                                                <input v-model="cita.nombre_completo"  type="text" id="nombre_completo" name="nombre_completo" placeholder="Ingrese su nombre completo"
                                                    required class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Fecha de la cita </label><br>
                                                <input v-model="cita.fecha_cita"  type="date" id="fecha_cita" name="fecha_cita" required class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Ciudad</label><br>
                                                <input v-model="cita.ciudad"  type="text" id="ciudad" name="ciudad" placeholder="Ingrese la ciudad" required
                                                    class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Correo Electrónico</label> <br>
                                                <input v-model="cita.email"  type="email" id="correo" name="email" placeholder="Ingrese correo electrónico"
                                                    required class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Teléfono</label><br>
                                                <input v-model="cita.telefono"  type="text" id="telefono" name="telefono"
                                                    placeholder="Ingrese el número telefónico y/o celular" required class="formato">
                                            </div>

                                            <div class="campos-formulario form-group">
                                                <input @click="registrarCita()" class="btn btn-primary" tabindex="-1" role="button" value="Agendar Cita">
                                            </div>
                                        </form>

                                        <form >
                                            <p class="datos-basicos"> Si ya estás registrado, ingresa tu usuario y contraseña aquí:</p>
                                            <div class="campos-formulario">
                                                <label>Fecha de la cita </label><br>
                                                <input v-model="login_fecha_cita"  type="date" id="login_fecha_cita" name="login_fecha_cita" required class="formato">
                                            </div>
                                            <div class="campos-formulario">
                                                <label>Correo Electrónico</label> <br>
                                                <input v-model="login.email"  type="email" id="correo" name="email" placeholder="Ingrese correo electrónico"
                                                    required class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Contraseña</label><br>
                                                <input v-model="login.password"  type="password" id="password" name="password" placeholder="Ingrese contraseña"
                                                    required class="formato">
                                            </div>
                                            <div class="campos-formulario form-group">
                                                <input @click="registrarCitaLogin()" class="btn btn-primary" tabindex="-1" role="button" value="Agendar Cita">
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <router-link to="/" class="btn btn-action">Volver a la página principal </router-link>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            cita: {
                nombre_completo: '',
                fecha_cita: '',
                ciudad: '',
                email: '',
                telefono:'',
            },
            login: {
                login_fecha_cita: '',
                email: '',
                password: ''
            }
        }
    },
        
    methods: {
        registrarCita () {
            axios.post('http://localhost:3000/api/nuevo-cliente',
            {
                data: this.cliente
            })
            .then(response => {
                console.log(response)
                let status_peticion = response.status
                console.log(status_peticion)
                if (status_peticion === 200) {
                    this.$swal.fire(
                        'Registro exitoso',
                        'Se ha resgistrado su cita para el ' + this.cliente.fecha_cita,
                        'success'
                    )
                } else {
                    this.$swal.fire(
                        'Cliente NO registrado',
                        'Ocurrió un error al registrarse su cita para el ' + this.cliente.fecha_cita,
                        'error'
                    )
                }
                let mensaje = response.data
                console.log(mensaje)
            })
        },
        registrarCitaLogin () {
            axios.post('http://localhost:3000/api/nuevo-cliente',
            {
                data: this.cliente
            })
            .then(response => {
                console.log(response)
                let status_peticion = response.status
                console.log(status_peticion)
                if (status_peticion === 200) {
                    this.$swal.fire(
                        'Registro exitoso',
                        'Se ha resgistrado su cita para el ' + this.cliente.login_fecha_cita,
                        'success'
                    )
                } else {
                    this.$swal.fire(
                        'Cliente NO registrado',
                        'Ocurrió un error al registrarse su cita para el ' + this.cliente.login_fecha_cita,
                        'error'
                    )
                }
                let mensaje = response.data
                console.log(mensaje)
            })
        }
    } 
}
</script>
<style scoped>
    .campos-formulario {
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 60px;
        text-align: left;
    }
</style>