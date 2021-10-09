<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/preciosmanosyPies">About</router-link>|
      <router-link to="/notas">Notas</router-link>|
      <router-link to="/portafolioServicios">Servicios</router-link>
    </div>  -->

    <router-view/>

    <footer>
    <div>
      <div class="row">
        <div class="col-6">
          <div class="row mx-2">
            <h1>Acerca de Nosotros</h1>
            <div class="texto">
                <p> El Centro de estética ANGENDY NAILS, ofrece un espacio de armonía y confort, atendido por personal altamente calificado, ofreciendo el embellecimiento
                    de uñas con diferentes tipos de diseños, colores, texturas y técnicas.
                </p><br>
            </div>
          </div>
          <div class="row mx-2">
            <div class="integrantes">
              <h5>Integrantes Grupo 4</h5><br>
              <li>Yenny Natacha Libreros Montes</li>
              <li>Diana Carolina Reyes Mantillla</li>
              <li>Irma Zoraida Cardenas Villarraga</li>
              <li>Camila Acosta Nieto</li>
            </div>
          </div>
        </div>
        <div class="col-3">
          <h5>Redes Sociales</h5>
          <div class="row ">
            <div class="col-1">
              <i class="fab fa-facebook fa-lg"></i>
            </div>
            <div class="col-11 text-start"> <a href="https://facebook.com/" target="_blank"><label>Siguenos en Facebook</label></a></div>
          </div>
          <div class="row mt-2">
            <div class="col-1">
              <i class="fab fa-twitter fa-lg"></i>
            </div>
            <div class="col-11 text-start"> <a href="https://twitter.com/" target="_blank"><label>Siguenos en Twitter</label></a></div>
          </div>
          <div class="row mt-2">
            <div class="col-1">
              <i class="fab fa-instagram fa-lg"></i>
            </div>
            <div class="col-11 text-start"> <a href="https://instagram.com/" target="_blank"><label>Siguenos en Instagram</label></a></div>
          </div>
          <div class="row mt-2">
            <div class="col-1">
              <i class="fab fa-pinterest fa-lg"></i>
            </div>
            <div class="col-11 text-start"> <a href="https://pinterest.com/" target="_blank"><label>Siguenos en Pinterest</label></a></div>
          </div>
        </div>


        <div class="col-3">
          <h5> Informacion Contacto</h5>
          <div class="row">
            <div class="col-12 text-start"> <i class="fa-solid fa-house fa-lg mx-3"></i><label>Aca se coloca la direccion de la empresa</label> </div>
          </div>

          <div class="row mt-2">
            
            <div class="col-12">
              <ul class="phone">
                <li><i class="fa-solid fa-phone fa-lg mx-3" ></i>+57 320 692 2383</li>
                <li><i class="fa-solid fa-phone fa-lg mx-3"></i>+57 320 748 3074</li>
                <li><i class="fa-solid fa-phone fa-lg mx-3"></i>+57 300 477 7527</li>
                <li><i class="fa-solid fa-phone fa-lg mx-3"></i>+57 319 245 5093</li>
              </ul>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-12 text-start"><i class="fa-solid fa-envelope fa-lg mx-3"></i><label>email@email.com</label></div>
          </div>
        </div>
      </div>

      <div class="container-footer2 foot2">
        <div class="footer2">
          <div class="copyright">© Todos los derechos reservados |
            <a href="https://github.com/nanareyes/Proyecto-Ciclo-3/blob/development/index.html" target="_blanck">Acceso al Git</a>
          </div>
          <div class="information">
            <a href=""> Informacion Compañia |</a>
            <a href="">Privacion y Politica |</a>
            <a href="">Terminos y condiciones</a>
          </div>
        </div>
      </div>
    </div>
    </footer>
  </div>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

