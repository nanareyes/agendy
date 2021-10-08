<template>
    <div class="iniciocliente">
        <div class="section-1" id="portafolioSevicios">
            <p class="section-text">Inicio de sesión cliente</p>
            <div>
                <form action="/loginclientes">
                    <div>
                        <p class="services-body"></p>
                        <div class="campos-formulario">
                            <label>Identificación</label>
                            <input v-model="cliente.identificacion" type="text" id="identificacion" name="identificacion" placeholder="Ingrese su identificación">
                        </div>
                        <div class="campos-formulario">
                            <label>Correo Electrónico</label>
                            <input v-model="cliente.email" type="text" id="email" name="email" placeholder="Ingrese su correo electrónico">
                        </div>
                    </div>
                    <div class="campos-formulario">
                        <label>Contraseña</label>
                        <input v-model="cliente.password" type="password" id="password" name="password" placeholder="Ingrese su contraseña">
                    </div>
                    <div class="campos-formulario form-group">
                        <input @click="registrarCliente()" class="btn btn-primary" tabindex="-1" role="button" value="Iniciar Sesion">
                    </div>
                </form>
                <br>
                <router-link to="/" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
                <br>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            cliente: {
                identificacion: '',
                email: '',
                password: '',

            }
        }
    },
        
    methods: {
        loginCliente () {
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
                        'Ingreso exitoso',
                        'Ha ingresado con el usuario ' + this.cliente.email,
                        'success'
                    )
                } else {
                    this.$swal.fire(
                        'Cliente NO registrado',
                        'Ocurrió un error al ingresar con el correo ' + this.cliente.email,
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