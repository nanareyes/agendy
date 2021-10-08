<template>
    <div class="inicioestilista">
        <div class="section-1" id="portafolioSevicios">
            <p class="section-text">Inicio de sesión Estilista</p>
                        <div>
                <div class="card-body section-body">
                    <div class="row registro1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <p class="datos-basicos"> Ingrese aquí su información para acceder a su cuenta:</p>

                        <form>
                            <div class="mb-3 text-start mx-3">
                                <label for="exampleInputEmail1" class="form-label ">Identificación</label>
                                <input type="identificacion" class="form-control" id="exampleInputEmail1" aria-describedby="identificacion">
                            </div>
                            <div class="mb-3 text-start mx-3">
                                <label for="exampleInputEmail1" class="form-label ">Correo electrónico</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">Nosotros no compartiremos su información con nadie.</div>
                            </div>
                            <div class="mb-3 text-start mx-3">
                                <label for="exampleInputPassword1" class="form-label text-start">Contraseña</label>
                                <input type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="mb-3 form-check text-start mx-3">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">Aceptar</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <router-link to="/" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
        
            <router-link to="/loginCliente" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Página de inicio de Sesion</router-link>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            estilista: {
                identificacion: '',
                email: '',
                password: '',

            }
        }
    },
        
    methods: {
        loginCliente () {
            axios.post('http://localhost:3000/api/nuevo-estilista',
            {
                data: this.estilista
            })
            .then(response => {
                console.log(response)
                let status_peticion = response.status
                console.log(status_peticion)
                if (status_peticion === 200) {
                    this.$swal.fire(
                        'Ingreso exitoso',
                        'Ha ingresado con el usuario ' + this.estilista.email,
                        'success'
                    )
                } else {
                    this.$swal.fire(
                        'Cliente NO registrado',
                        'Ocurrió un error al ingresar con el correo ' + this.estilista.email,
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