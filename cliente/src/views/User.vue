<template>
    <div class="registro-user">
        <div class="section-1" >
            <p class="section-text">Registro de Usuarios</p>
            <form>
                <div class="container-registro">
                    <div class="row registro1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        
                            <p class="datos-basicos"> Ingrese aquí su información de contacto:</P>


                            <div class="campos-formulario">
                                <label>Identificación</label><br>
                                <input v-model="user.identificacion" type="text" id="identificacion" name="identificacion"
                                    placeholder="Ingrese su identificación" required class="formato">
                            </div>
                            <div class="campos-formulario">
                                <label>Nombres</label><br>
                                <input v-model="user.nombres" type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required
                                    class="formato">
                            </div>
                            <div class="campos-formulario">
                                <label>Apellidos</label><br>
                                <input v-model="user.apellidos"  type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos"
                                    required class="formato">
                            </div>

                            <div class="campos-formulario">
                                <label>Fecha de nacimiento</label><br>
                                <input v-model="user.fechaNacimiento"  type="date" id="fechaNacimiento" name="fechaNacimiento" required class="formato">
                            </div>
                            <div class="campos-formulario">
                                <label>Dirección</label><br>
                                <input v-model="user.direccion"  type="text" id="direccion" name="direccion" placeholder="Ingrese su dirección"
                                    required class="formato">
                            </div>

                            <div class="campos-formulario">
                                <label>Ciudad</label><br>
                                <input v-model="user.ciudad"  type="text" id="ciudad" name="ciudad" placeholder="Ingrese la ciudad" required
                                    class="formato">
                            </div>

                            <div class="campos-formulario">
                                <label>Departamento</label><br>
                                <input v-model="user.departamento"  type="text" id="departamento" name="departamento"
                                    placeholder="Ingrese el departamento" required class="formato">
                            </div>

                            <div class="campos-formulario">
                                <label>Teléfono</label><br>
                                <input v-model="user.telefono"  type="text" id="telefono" name="telefono"
                                    placeholder="Ingrese el número telefónico y/o celular" required class="formato">
                            </div>
                        
                    </div>

                    <div class="row registro2 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    
                        <p class="datos-basicos"> Ingrese aquí la información para la creación de su perfil:</P> <br>

                        <div class="campos-formulario">
                            <label>Correo Electrónico</label> <br>
                            <input v-model="user.email"  type="email" id="email" name="email" placeholder="Ingrese correo electrónico"
                                required class="formato">
                        </div>

                        <div class="campos-formulario">
                            <label>Contraseña</label><br>
                            <input v-model="user.password"  type="password" id="password" name="password" placeholder="Ingrese contraseña"
                                required class="formato">
                        </div>

                        <div class="campos-formulario">
                            <label>Confirme su contraseña</label><br>
                            <input v-model="user.password2" type="password"  id="password2" name="password2"
                                placeholder="Confirme la contraseña" required class="formato">
                        </div>
                        
                        <div class="campos-formulario">Tipo de usuario
                            <select v-model="user.users">
                                <option disabled value="user.users">Seleccione el tipo de usuario</option>
                                <option>Cliente</option>
                                <option>Estilista</option>
                            </select>
                            <div>
                                <span>Seleccionado: {{ user.users }}</span>
                            </div>
                        </div>
                        <br>
                        <div class="campos-formulario form-group mb-3 text-start mx-3 ">
                            <div class="form-check">
                                <label>He leído y acepto el tratamiento de mis datos</label>
                                <input v-model="user.terminos" type="checkbox" class="form-check-input is-invalid" id="tratamiento_datos" name="tratamiento_datos" required>
                                <div class="invalid-feedback">
                                    Debes aceptar los términos y condiciones antes de enviar
                                </div>
                            </div>
                        </div>
                        <div class="campos-formulario form-group">
                            <input @click="registraruser()" class="btn btn-primary" tabindex="-1" role="button" value="Registrar">
                        </div>
                    
                    </div>
                </div>
            </form>
        </div>
        
        <div class="back">
            <router-link to="/" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            user: {
                identificacion: '',
                nombres: '',
                apellidos: '',
                fechaNacimiento: '',
                direccion: '',
                ciudad: '',
                departamento: '',
                telefono:'',
                email: '',
                password: '',
                password2:'',
                users: '',
                terminos:''
            },
    
        
        }
    
    },
        
    methods: {
        registraruser () {
            console.log(this.user)
            if (this.user.password === this.user.password2){
                axios.post('http://localhost:3000/api/nuevo-user',
                this.user
                )
                .then(response => {
                    console.log(response)
                    let status_peticion = response.status
                    console.log(status_peticion)
                    if (status_peticion === 200) {
                        this.$swal.fire(
                            'Registro exitoso',
                            'Se ha resgistrado con el usuario ' + this.user.email,
                            'success'
                        )
                    } else {
                        this.$swal.fire(
                            'user NO registrado',
                            'Ocurrió un error al registrarse con el correo ' + this.user.email,
                            'error'
                        )
                    }
                    let mensaje = response.data
                    console.log(mensaje)
                })
            } else {
                this.$swal.fire(
                            'Error de contraseña',
                            'Ocurrió un error al confirmar la contraseña',
                            'error')
            }
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