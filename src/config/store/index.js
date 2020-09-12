import Vue from 'vue'
import Vuex from 'vuex'
import apiCommunication from '../axios'
import {showError, showSucess} from '../../global'

Vue.use(Vuex)

export default new Vuex.Store({
state:{
    isMenuVisible: true,
    inputSearchValue:'',
    recipeData: {},
    recipesDataFilteredByIngredient: [],
    recipesDataFilteredByCategory: [],
    recipesDataFilteredByArea: [],
    Ingredients:[],
    Categories:[],
    Areas:[]
},
actions:{
    toggleMenu(context){
        context.commit('toggleMenu')
    },
    searchRecipe(context){
        context.commit('searchRecipe')
    },
    luckRecipe(context){
        context.commit('luckRecipe')
    },
    filterMainIngredient(context){
        context.commit('filterMainIngredient')
    },
    filterByCategory(context){
        context.commit('filterByCategory')
    },
    filterByArea(context){
        context.commit('filterByArea')
    },
    getIngredientList(context){
        context.commit('getIngredientList')
    },
    getCategoryList(context){
        context.commit('getCategoryList')
    },
    getAreaList(context){
        context.commit('getAreaList')
    },
    changeInputSearchValue(context,value){
        context.commit('changeInputSearchValue', value)
    }
},
mutations:{
    toggleMenu(state,isVisible){
        if(isVisible === undefined){
            state.isMenuVisible = !state.isMenuVisible
        }else{
            state.isMenuVisible = isVisible
        }
    },
    searchRecipe(state){
        apiCommunication.get(`search.php?s=${state.inputSearchValue}`)
            .then(response=> {
                state.recipeData = {...response.data.meals}
                showSucess(response)
                console.log(state.recipeData)
            })
            .catch(showError)
    },
    filterMainIngredient(state){
        apiCommunication.get(`filter.php?i=${state.inputSearchValue}`)
            .then(response=> {
                state.recipesDataFilteredByIngredient = response.data.meals
                showSucess(response)
                console.log(state.recipesDataFilteredByIngredient)
            })
            .catch(showError)
    },
    filterByCategory(state){
        apiCommunication.get(`filter.php?c=${state.inputSearchValue}`)
        .then(response=> {
            state.recipesDataFilteredByCategory = response.data.meals
            showSucess(response)
            console.log(state.recipesDataFilteredByCategory)
        })
        .catch(showError)
    },
    filterByArea(state){
        apiCommunication.get(`filter.php?a=${state.inputSearchValue}`)
        .then(response=> {
            state.recipesDataFilteredByArea = response.data.meals
            showSucess(response)
            console.log(state.recipesDataFilteredByArea)
        })
        .catch(showError)
    },
    getIngredientList(state){
        apiCommunication.get(`list.php?i=list`)
        .then(response=> {
            state.Ingredients = response.data.meals
            showSucess(response)
            console.log(state.Ingredients)
        })
        .catch(showError)
    },
    getCategoryList(state){
        apiCommunication.get(`categories.php`)
        .then(response=> {
            state.Categories = response.data.categories
            showSucess(response)
            console.log(state.Categories)
        })
        .catch(showError)
    },
    getAreaList(state){
        apiCommunication.get(`list.php?a=list`)
        .then(response=> {
            state.Areas = response.data.meals
            showSucess(response)
            console.log(state.Areas)
        })
        .catch(showError)
    },
    luckRecipe(state){
        apiCommunication.get(`random.php`)
        .then(response=> {
            state.recipeData = {...response.data.meals}
            showSucess(response)
            console.log(state.recipeData)
        })
        .catch(showError)
    },
    changeInputSearchValue(state, value){
        state.inputSearchValue = value
    }
}
})
