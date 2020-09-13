import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../components/content/Home'
import Recipe from '../../components/recipes/Recipe'
import store from '../store/index'

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
    get component(){ return store.state.recipeData.strMeal !== null ? Recipe : Home}
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
