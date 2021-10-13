<template>
  <div id="banner">
    <div class="header" id="#menu">
      <div class="row menubar mb-3">
        <div class="col-6 menu-logo py-2">
          <img src="@/assets/images/LOGO 1.svg" />
          <img src="@/assets/images/logo.png" />
        </div>
        <div class="col-6 menu-links py-3">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link
                      to="/"
                      class="nav-link active mx-5"
                      aria-current="page"
                      >Inicio</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/portafolioServicios" class="nav-link mx-4"
                      >Servicios</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/noticias" class="nav-link mx-4"
                      >Noticias</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link to="/equipo" class="nav-link mx-4"
                      >Equipo</router-link
                    >
                  </li>
                </ul>
                <span>Hola, {{datosUsuario.nombres}}</span>
                <button type="button" @click="logout"> Salir</button> 
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <div class="container">
      <h1 class="titulos">Bienvenidos a Agendy Nails</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu",
  data(){
    const datosUsuario = JSON.parse(localStorage.getItem('datosUsuario'))
    console.log('datos usuario en inicio', datosUsuario)
    return {
      datosUsuario
    }
  }
};
</script>
<style scoped>
.titulos {
  font-family: verdana;
  font-size: 60px;
  color: #b02b9b;
}
#banner {
  background-color: #FAF4EB;
}
</style>
