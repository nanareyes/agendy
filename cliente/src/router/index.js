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
    path: '/inicio',
    name: 'Inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Inicio.vue')
  },
  {
    path: '/notas',
    name: 'Notas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Notas.vue')
  },
  
  {
    path: '/agenda',
    name: 'Agenda',
    component: () => import(/* webpackChunkName: "about" */ '../views/Agenda.vue')
  },
  
  {
    path: '/galeria',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "about" */ '../views/Galeria.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  
  {
    path: '/portafolioServicios',
    name: 'PortafolioServicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/PortafolioServicios.vue')
  },
    
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
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
