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
                            <input type="text" id="identificacion" name="identificacion" placeholder="Ingrese su identificación">
                        </div>
                    </div>
                    <div class="row mx-2">
                        <div class="campos-formulario">
                            <label>Contraseña</label>
                            <input type="password" id="contraseña" name="contraseña" placeholder="Ingrese su contraseña">
                        </div>
                        <div class="campos-formulario">
                            <input type="submit" value="Iniciar sesión">
                        </div>
                    </div>
                    <router-link to="/" class="btn btn-action" tabindex="-1" role="button" aria-disabled="true">Volver</router-link>
                </form>
            </div>
        </div>
    </div>
</template>