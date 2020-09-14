import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../components/content/Home'
import Recipe from '../../components/recipes/Recipe'
import {goodEmptyCheck} from '../../global'
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
    get component(){
      if(goodEmptyCheck(store.state.recipeData)){
        return Home
      }else{
        return Recipe
      }
    }
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
