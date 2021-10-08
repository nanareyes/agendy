<template>
  <div class="card text-center section-news" id="news">
    <div class="card-header section-title">Sección Noticias</div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card h-100">
          <div class="card-body section-body">
            <div class="row g-0">
              <div class="col-md-4 img-news">
                <img
                  src="@/assets/images/new1.jpg"
                  class="img-fluid rounded-start"
                  alt="Noticia 1"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    Análisis del sector cosmético colombiano en época Covid-19
                  </h5>
                  <p class="card-text">
                    Colombia es uno de los principales países exportadores del sector cosmético de América Latina, ocupando el tercer lugar después de Brasil y México..
                  </p>
                  <a
                    href="https://h2gconsulting.com/how2go-colombia/analisis-del-sector-cosmetico-colombiano-en-epoca-covid-19/"
                    class="btn btn-action"
                    tabindex="-1"
                    role="button"
                    aria-disabled="true"
                    >Ver más</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body section-body">
            <div class="row g-0">
              <div class="col-md-4 img-news">
                <img
                  src="@/assets/images/new2.jpg"
                  style="height: 230px"
                  class="img-fluid rounded-start"
                  alt="Noticia 1"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    Estudio de mercado. El mercado de belleza y cuidado personal
                    en Colombia
                  </h5>
                  <p class="card-text">
                    Colombia es el cuarto mercado de belleza y cuidado personal de Latinoamérica con unas ventas en 2019 que ascienden...
                  </p>
                  <a
                    href="https://www.icex.es/icex/es/navegacion-principal/todos-nuestros-servicios/informacion-de-mercados/paises/navegacion-principal/el-mercado/estudios-informes/DOC2020865687.html?"
                    class="btn btn-action"
                    tabindex="-1"
                    role="button"
                    aria-disabled="true"
                    >Ver más</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
      <div class="col">
        <div class="card h-100">
          <div class="card-body section-body">
            <div class="row g-0">
              <div class="col-md-4 img-news">
                <img
                  src="@/assets/images/new3.jpg"
                  style="height: 260px"
                  class="img-fluid rounded-start"
                  alt="Noticia 1"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">
                    La industria del maquillaje busca la recuperación
                  </h5>
                  <p class="card-text">
                    Si algún producto ha sentido el golpe de la pandemia es el labial, que por el tapabocas quedó de lado para las mujeres.
                    Sin embargo, la industria trabaja en fórmulas que garanticen duración st...
                  </p>

                  <a
                    href="https://www.semana.com/contenidos-editoriales/colombia-querer-es-vencer/articulo/peluquerias-se-reinventan-por-cuarentena/665486/"
                    class="btn btn-action"
                    tabindex="-1"
                    role="button"
                    aria-disabled="true"
                    >Ver más</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card-body section-body">
            <div class="row g-0">
              <div class="col-md-4 img-news">
                <img
                  src="@/assets/images/new4.jpg"
                  class="img-fluid rounded-start"
                  alt="Noticia 1"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Se reactivarán las peluquerías?</h5>
                  <p class="card-text">
                    “La Federación Nacional de Departamentos (FND) presentó una solicitud al Gobierno nacional para que autorice la reactivación del sector de las peluquerías y salones de belleza bajo estrictos protocolos de bioseguridad ...
                  </p>
                  <a
                    href="https://www.semana.com/nacion/articulo/coronavirus-se-reactivaran-las-peluquerias/671595/"
                    class="btn btn-action"
                    tabindex="-1"
                    role="button"
                    aria-disabled="true"
                    >Ver más</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="back">
      <router-link to="/" class="btn btn-action">Volver</router-link>
    </div>
  </div>
</template>
