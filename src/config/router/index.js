import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../../components/content/Home'
import Recipe from '../../components/recipes/Recipe'
import ListIngredientsCards from '../../components/cards/ListIngredientsCards'
import ListRecipes from '../../components/cards/ListRecipes'
import ListCategory from '../../components/cards/ListCategory'
import ListArea from '../../components/cards/ListArea'
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
    path:'/ingredients',
    name: 'ListIngredientsCards',
    component: ListIngredientsCards
  },
  {
    path:'/categories',
    name: 'ListCategory',
    component: ListCategory
  },
  {
    path:'/areas',
    name: 'ListArea',
    component: ListArea
  },
  {
    path:'/recipe-list',
    name:'ListRecipes',
    component: ListRecipes
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
