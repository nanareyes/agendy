<template>
    <div class="separatuTurno">
        <div class="card text-center">
            <div class="card-header section-title">
                Nuestra Agenda
            </div>
            <div class="card-body section-body">

                <div class="card mb-3" style="max-width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">Agenda tu agenda</h5>
                        <p class="card-text">Por favor ingresa la siguiente información para poder agenda tu agenda</p>
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
                                            <div class="col-1">
                                                <router-link to="/portafolioServicios" button type="button" aria-label="Close" class="btn btn-action">X</router-link>
                                                </div>
                                            <div class="campos-formulario">
                                                <label>Nombre </label><br>
                                                <input v-model="agenda.nombre_completo"  type="text" id="nombre_completo" name="nombre_completo" placeholder="Ingrese su nombre completo"
                                                    required class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Fecha de la agenda </label><br>
                                                <input v-model="agenda.fecha_agenda"  type="date" id="fecha_agenda" name="fecha_agenda" required class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Hora de la agenda </label><br>
                                                <input v-model="agenda.hora"  type="time" id="hora" name="hora" required class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Ciudad</label><br>
                                                <input v-model="agenda.ciudad"  type="text" id="ciudad" name="ciudad" placeholder="Ingrese la ciudad" required
                                                    class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Correo Electrónico</label> <br>
                                                <input v-model="agenda.email"  type="email" id="correo" name="email" placeholder="Ingrese correo electrónico"
                                                    required class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Teléfono</label><br>
                                                <input v-model="agenda.telefono"  type="text" id="telefono" name="telefono"
                                                    placeholder="Ingrese el número telefónico y/o celular" required class="formato">
                                            </div>

                                            <div class="campos-formulario form-group">
                                                <input @click="registraragenda()" class="btn btn-primary" tabindex="-1" role="button" value="Agendar cita">
                                            </div>
                                        </form>

                                        <form >
                                            <p class="datos-basicos"> Si ya estás registrado, ingresa tu usuario y contraseña aquí:</p>
                                            <div class="campos-formulario">
                                                <label>Fecha de la agenda </label><br>
                                                <input v-model="login.fecha_agenda"  type="date" id="login_fecha_agenda" name="login_fecha_agenda" required class="formato">
                                            </div>

                                            <div class="campos-formulario">
                                                <label>Hora de la agenda </label><br>
                                                <input v-model="login.hora"  type="time" id="hora" name="hora" required class="formato">
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
                                                <input @click="registraragendaLogin()" class="btn btn-primary" tabindex="-1" role="button" value="Agendar agenda">
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
import axios from 'axios';
export default {
    data () {
        return {
            agenda: {
                nombre_completo: '',
                fecha_agenda: '',
                hora: '',
                ciudad: '',
                email: '',
                telefono:'',
            },
            login: {
                login_fecha_agenda: '',
                email: '',
                password: ''
            }
        }
    },
        
    methods: {
        registraragenda () {
        console.log (this.agenda)
            const cita = {
                nombre_completo: this.agenda.nombre_completo,
                fecha_agenda: new Date(`${this.agenda.fecha_agenda}T${this.agenda.hora}:00`),
                ciudad: this.agenda.ciudad,
                email: this.agenda.email,
                telefono:this.agenda.telefono,
            }
            axios.post('http://localhost:3000/api/nueva-agenda',
            cita
            )
            .then(response => {
                console.log(response)
                let status_peticion = response.status
                console.log(status_peticion)
                if (status_peticion === 200) {
                    this.$swal.fire(
                        'Registro exitoso',
                        'Se ha resgistrado su agenda para el ' + this.agenda.fecha_agenda,
                        'success'
                    )
                } else {
                    this.$swal.fire(
                        'Cliente NO registrado',
                        'Ocurrió un error al registrarse su agenda para el ' + this.agenda.fecha_agenda,
                        'error'
                    )
                }
                let mensaje = response.data
                console.log(mensaje)
            })
        },
        // registraragendaLogin () {
            
        //     const cita_login = {
        //         fecha_agenda: new Date(`${this.agenda.fecha_agenda}T${this.agenda.hora}:00`),
        //         email: this.agenda.email,

        //     }
        //     axios.post('http://localhost:3000/api/nueva-agenda-login',
        //     cita_login
        //     )
        //     .then(response => {
        //         console.log(response)
        //         let status_peticion = response.status
        //         console.log(status_peticion)
        //         if (status_peticion === 200) {
        //             this.$swal.fire(
        //                 'Registro exitoso',
        //                 'Se ha resgistrado su agenda para el ' + this.cliente.fecha_agenda,
        //                 'success'
        //             )
        //         } else {
        //             this.$swal.fire(
        //                 'Cliente NO registrado',
        //                 'Ocurrió un error al registrarse su agenda para el ' + this.cliente.fecha_agenda,
        //                 'error'
        //             )
        //         }
        //         let mensaje = response.data
        //         console.log(mensaje)
        //     })
        // }
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