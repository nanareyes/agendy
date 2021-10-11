<template>
    <div class="registroCliente">
        <div class="section-1" id="portafolioSevicios">
            <p class="section-text">Registro Clientes</p>
            <form>
                <div class="container-registro">
                    <div class="row registro1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        
                            <p class="datos-basicos"> Ingrese aquí su información de contacto:</P>


                            <div class="campos-formulario">
                                <label>Identificación</label><br>
                                <input v-model="cliente.identificacion" type="text" id="identificacion" name="identificacion"
                                    placeholder="Ingrese su identificación" required class="formato">
                            </div>
                            <div class="campos-formulario">
                                <label>Nombres</label><br>
                                <input v-model="cliente.nombres" type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required
                                    class="formato">
                            </div>
                            <div class="campos-formulario">
                                <label>Apellidos</label><br>
                                <input v-model="cliente.apellidos"  type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos"
                                    required class="formato">
                            </div>

                            <div class="campos-formulario">
                                <label>Fecha de nacimiento</label><br>
                                <input v-model="cliente.fechaNacimiento"  type="date" id="fechaNacimiento" name="fechaNacimiento" required class="formato">
                            </div>
                            <div class="campos-formulario">
                                <label>Dirección</label><br>
                                <input v-model="cliente.direccion"  type="text" id="direccion" name="direccion" placeholder="Ingrese su dirección"
                                    required class="formato">
                            </div>

                            <div class="campos-formulario">
                                <label>Ciudad</label><br>
                                <input v-model="cliente.ciudad"  type="text" id="ciudad" name="ciudad" placeholder="Ingrese la ciudad" required
                                    class="formato">
                            </div>

                            <div class="campos-formulario">
                                <label>Departamento</label><br>
                                <input v-model="cliente.departamento"  type="text" id="departamento" name="departamento"
                                    placeholder="Ingrese el departamento" required class="formato">
                            </div>

                            <div class="campos-formulario">
                                <label>Teléfono</label><br>
                                <input v-model="cliente.telefono"  type="text" id="telefono" name="telefono"
                                    placeholder="Ingrese el número telefónico y/o celular" required class="formato">
                            </div>
                        
                    </div>

                    <div class="row registro2 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    
                        <p class="datos-basicos"> Ingrese aquí la información para la creación de su perfil:</P> <br>

                        <div class="campos-formulario">
                            <label>Correo Electrónico</label> <br>
                            <input v-model="cliente.correoElectronico"  type="correoElectronico" id="correoElectronico" name="correoElectronico" placeholder="Ingrese correo electrónico"
                                required class="formato">
                        </div>

                        <div class="campos-formulario">
                            <label>Contraseña</label><br>
                            <input v-model="cliente.password"  type="password" id="password" name="password" placeholder="Ingrese contraseña"
                                required class="formato">
                        </div>

                        <div class="campos-formulario">
                            <label>Confirme su contraseña</label><br>
                            <input v-model="cliente.password2" type="password"  id="password2" name="password2"
                                placeholder="Confirme la contraseña" required class="formato">
                        </div>
                        <br>
                        <div class="campos-formulario form-group">
                            <div class="form-check">
                                <label>He leído y acepto el tratamiento de mis datos</label>
                                <input v-model="cliente.terminos" type="checkbox" class="form-check-input is-invalid" id="tratamiento_datos" name="tratamiento_datos" required>
                                <div class="invalid-feedback">
                                    Debes aceptar los términos y condiciones antes de enviar
                                </div>
                            </div>
                        </div>
                        <div class="campos-formulario form-group">
                            <input @click="registrarCliente()" class="btn btn-primary" tabindex="-1" role="button" value="Registrar">
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
            cliente: {
                identificacion: '',
                nombres: '',
                apellidos: '',
                fechaNacimiento: '',
                direccion: '',
                ciudad: '',
                departamento: '',
                telefono:'',
                correoElectronico: '',
                password: '',
                password2:'',
                terminos:''
            }
        }
    },
        
    methods: {
        registrarCliente () {
            console.log(this.cliente)
            if (this.cliente.password === this.cliente.password2){
                axios.post('http://localhost:3000/api/nuevo-cliente',
                this.cliente
                )
                .then(response => {
                    console.log(response)
                    let status_peticion = response.status
                    console.log(status_peticion)
                    if (status_peticion === 200) {
                        this.$swal.fire(
                            'Registro exitoso',
                            'Se ha resgistrado con el usuario ' + this.cliente.correoElectronico,
                            'success'
                        )
                    } else {
                        this.$swal.fire(
                            'Cliente NO registrado',
                            'Ocurrió un error al registrarse con el correo ' + this.cliente.correoElectronico,
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