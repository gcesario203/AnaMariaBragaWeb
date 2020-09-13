import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../components/content/Home'
import Recipe from '../../components/recipes/Recipe'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipe-data',
    name:'Recipe',
    component: Recipe
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  // }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
