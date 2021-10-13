<template>
    <div class="portafolioServicios">
    <div class="card text-center">
            <div class="card-header section-title">
                Bienvenido a su página principal, {{datosUsuario.nombres}}
            </div>
            <div class="card-body navigations">

                <div class="row row-cols-1 row-cols-md-3 g-3">
                    <div class="col">
                        <div class="card h-100">
                            <img src="@/assets/images/flowers.jpg" class="card-img-top h-100 pt-3" alt="semipermanente">
                            <div class="card-body">
                                <h5 class="card-title">Esta es tu sección de Servicios</h5>
                                <p class="card-text">Aquí podrás configurar la presentación de tus servicios y precios</p>
                            </div>
                            
                        </div>
                    </div>
                    <div class="col ">
                        <div class="card h-100">
                            <img src="@/assets/images/esmaltes.jpeg" class="card-img-top h-100 pt-3 py-3" alt="acrilicas">
                            <div class="card-body">
                                <h5 class="card-title"> Galería</h5>
                                <p class="card-text">En este espacio podrás configurar y guardar una amplia galería de fotos con todos los estilos de los servicios que ofreces.</p>
                            </div>
                            

                        </div>
                    </div>
                    <div class="col ">
                        <div class="card h-100">
                            <img src="@/assets/images/LOGO-3.jpg" class="card-img-top h-100" alt="calendario">
                            <div class="card-body">
                                <h5 class="card-title">Agenda</h5>
                                <p class="card-text">En este espacio podrás configurar tu agenda.</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <button type="button" @click="logout">  Logout </button> 
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "Inicio",
  data(){
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'))
    return {
      datosUsuario
    }
  }
};
</script>
