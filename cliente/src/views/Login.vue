<template>
    <div class="Login-User">
        <div class="section-1" id="portafolioSevicios">
            <p class="section-text">Inicio de sesión</p>
            <div>
                <div class="card-body section-body">
                    <div class="row registro1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <p class="datos-basicos"> Ingrese aquí su información para acceder a su cuenta:</p>

                        <form>
                            
                            <div class="mb-3 text-start mx-3">
                                <label for="exampleInputEmail1" class="form-label ">Correo electrónico</label>
                                <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">Nosotros no compartiremos su información con nadie.</div>
                            </div>
                            <div class="mb-3 text-start mx-3">
                                <label for="exampleInputPassword1" class="form-label text-start">Contraseña</label>
                                <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1">
                            </div>
                            
                            <input @click="loginUser()" class="btn btn-primary" tabindex="-1" role="button" value="Ingresar">
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <router-link to="/" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
        
            <div><router-link to="/inicio" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Página de inicio de Sesion</router-link></div>
        </div>
    </div>


</template>

<script>
import axios from 'axios';
import jwt from 'jsonwebtoken';

export default {
    data () {
        return {
            user: {
                email: '',
                password: ''

            }
        }
    },
        
    methods: {
        loginUser () {
            axios.post('http://localhost:3000/login',
            this.user
            )
            .then(response => {
                //console.log(response)
                const status_peticion = response.status
                const token = response.data.token
                //console.log(status_peticion)
                if (status_peticion === 200) {
                    localStorage.setItem('token', token)

                    jwt.verify(token, 'secret',
                        (err, datosToken) => {
                            if (err) {
                                this.$swal.fire(
                                        'Error token',
                                        'Token no es válido',
                                        'error'
                                )
                            } else {
                                // console.log('decoded token:', decoded)
                                // Guardar el token decodificado en el localStorage
                                localStorage.setItem('datosUsuario', JSON.stringify(datosToken.data))
                                // Del token se lee el tipo de usuario: Cliente o Estilista
                                const tipo = datosToken.data.tipo
                                if (tipo === 'Cliente') {
                                    this.$router.push("/inicio")
                                } else {
                                    this.$router.push("/servicios")
                                }
                            }
                    });
                } else {
                    this.$swal.fire(
                        'Usuario NO registrado',
                        'Ocurrió un error al ingresar con el correo ' + this.user.email,
                        'error'
                    )
                }
                let mensaje = response.data
                //console.log(mensaje)
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