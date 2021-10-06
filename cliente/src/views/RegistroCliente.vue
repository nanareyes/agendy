<template>
    <div class="registroCliente">
        <div class="section-1" id="portafolioSevicios">
            <p class="section-text">Registro Clientes</p>

            <div class="container-registro">
                <div class="row registro1 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <form action="https://www.w3schools.com/action_page.php" method="POST" target="_blank">
                        <p class="datos-basicos"> Ingrese aquí su información de contacto:</P>


                        <div class="campos-formulario">
                            <label>Identificación</label><br>
                            <input type="text" id="identificacion" name="identificacion"
                                placeholder="Ingrese su identificación" required class="formato">
                        </div>
                        <div class="campos-formulario">
                            <label>Nombres</label><br>
                            <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required class="formato">
                        </div>
                        <div class="campos-formulario">
                            <label>Apellidos</label><br>
                            <input type="text" id="apellidos" name="apellidos" placeholder="Ingrese sus apellidos" required class="formato">
                        </div>
                        
                        <div class="campos-formulario">
                            <label>Fecha de nacimiento</label><br>
                            <input type="date" id="fecha_nacimiento" name="fecha_nacimiento" required class="formato">
                        </div>
                        <div class="campos-formulario">
                            <label>Dirección</label><br>
                            <input type="text" id="direccion" name="direccion" placeholder="Ingrese su dirección" required class="formato">
                        </div>
                    
                        <div class="campos-formulario">
                            <label>Ciudad</label><br>
                            <input type="text" id="ciudad" name="ciudad" placeholder="Ingrese la ciudad" required class="formato">
                        </div>
                        
                        <div class="campos-formulario">
                            <label>Departamento</label><br>
                            <input type="text" id="departamento" name="departamento" placeholder="Ingrese el departamento"
                            required class="formato">
                        </div>
                        
                        <div class="campos-formulario">
                            <label>Teléfono</label><br>
                            <input type="text" id="telefono" name="telefono"
                                placeholder="Ingrese el número telefónico y/o celular" required class="formato">
                        </div>
                    </form>
                </div>

                <div class="row registro2 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <form action="https://www.w3schools.com/action_page.php" method="POST" target="_blank">
                        <p class="datos-basicos"> Ingrese aquí la información para la creación de su perfil:</P> <br>

                        <div class="campos-formulario">
                            <label>Correo Electrónico</label> <br>
                            <input type="email" id="correo" name="correo" placeholder="Ingrese correo electrónico" required class="formato">
                        </div>
                        
                        <div class="campos-formulario">
                            <label>Contraseña</label><br>
                            <input type="password" id="contraseña" name="contraseña" placeholder="Ingrese contraseña"
                                required class="formato">
                        </div>
                    
                        <div class="campos-formulario">
                            <label>Confirme su contraseña</label><br>
                            <input type="password" id="contraseña" name="contraseña2" placeholder="Confirme la contraseña"
                            required class="formato">
                        </div>
                    
                        <br><br><br>
                        <div class="campos-formulario boton">
                            <input type="submit" value="Registrar" onclick="registro">
                        </div>
                    </form>
                </div>

            </div>
            
                    
            <form action="https://www.w3schools.com/action_page.php" method="POST" target="_blank">
                <div class="row registro3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="campos-formulario tratamiento-datos">
                        <label>He leído y acepto la política de protección de datos</label>
                        <input type="checkbox" id="tratamiento_datos" name="tratamiento_datos">
                    </div>
                    <div class="back">
                    <router-link to="/" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
</template>