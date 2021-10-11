import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/notas',
    name: 'Notas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas.vue')
  },
  {
    path: '/acrilicas',
    name: 'Acrilicas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Acrilicas.vue')
  },
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import(/* webpackChunkName: "about" */ '../views/Agenda.vue')
  },
  {
    path: '/gel',
    name: 'Gel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gel.vue')
  },
  {
    path: '/galeria',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "about" */ '../views/Galeria.vue')
  },
  {
    path: '/logincliente',
    name: 'Logincliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/Logincliente.vue')
  },
  {
    path: '/iniciocliente',
    name: 'Iniciocliente',
    component: () => import(/* webpackChunkName: "about" */ '../views/Iniciocliente.vue')
  },
  {
    path: '/inicioestilista',
    name: 'Inicioestilista',
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicioestilista.vue')
  },
  {
    path: '/manicure',
    name: 'Manicure',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manicure.vue')
  },
  {
    path: '/pedicure',
    name: 'Pedicure',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pedicure.vue')
  },
  {
    path: '/portafolioServicios',
    name: 'PortafolioServicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/PortafolioServicios.vue')
  },
  {
    path: '/registroCliente',
    name: 'RegistroCliente',
    component: (RegistroCliente) => import(/* webpackChunkName: "about" */'../views/RegistroCliente.vue')
  },
  {
    path: '/registroEstilista',
    name: 'RegistroEstilista',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegistroEstilista.vue')
  },
  {
    path: '/semipermanente',
    name: 'Semipermanente',
    component: () => import(/* webpackChunkName: "about" */ '../views/Semipermanente.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },
  {
    path: '/separatuTurno',
    name: 'SeparatuTurno',
    component: () => import(/* webpackChunkName: "about" */ '../views/SeparatuTurno.vue')
  },
  
  {
    path: '/preciosmanosyPies',
    name: 'PreciosManosyPies',
    component: () => import(/* webpackChunkName: "about" */ '../views/PreciosManosyPies.vue')
  },
  {
    path: '/noticias',
    name: 'Noticias',
    component: () => import(/* webpackChunkName: "about" */ '../views/Noticias.vue')
  },
  {
    path: '/equipo',
    name: 'Equipo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Equipo.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
