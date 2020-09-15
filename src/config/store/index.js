import Vue from 'vue'
import Vuex from 'vuex'
import apiCommunication from '../axios'
import {
    showError,
    showSucess,
    prepareObject,
    checkRoute,
    populateIngredientsAndMeasures,
    isNullOrWhitespace,
    ingredientImgBuilder
} from '../../global'

Vue.use(Vuex)

export default new Vuex.Store({
state:{
    isMenuVisible: true,
    inputSearchValue:'',
    inputFilterIngredient:'',
    inputFilterArea:'',
    inputFilterCategory:'',
    recipeData: {},
    recipeFiltered: [],
    recipeDataIngredients:[],
    recipeDataMeasures:[],
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
    },
    changeInputFilterIngredientValue(context,value){
        context.commit('changeInputFilterIngredientValue', value)
    },
    changeInputFilterCategoryValue(context,value){
        context.commit('changeInputFilterCategoryValue', value)
    },
    changeInputFilterAreaValue(context,value){
        context.commit('changeInputFilterAreaValue', value)
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
                if(isNullOrWhitespace(state.inputSearchValue)){
                    showError('Empty recipe search filter, try your luck')
                }else if(response.data.meals.idMeal === null){
                    showError('No recipes found')
                }else{
                    state.recipeData = prepareObject(response.data.meals)
                    showSucess('Recipe found successfully')
                    checkRoute('/recipe-data')
                }

                populateIngredientsAndMeasures(
                    state.recipeDataIngredients,
                    state.recipeDataMeasures,
                    state.recipeData
                    )
            })
            .catch(err=>showError(err))
    },

    filterMainIngredient(state){
        apiCommunication.get(`filter.php?i=${state.inputFilterIngredient}`)
            .then(response=> {
                if(isNullOrWhitespace(state.inputFilterIngredient)){
                    showError('Empty ingredient search filter, try your luck')
                }else if(response.data.meals.idMeal === null){
                    showError('No ingredients found')
                }else{
                    state.recipeFiltered = response.data.meals
                    showSucess('Ingredient successfully filtered')
                    checkRoute('/recipe-list')
                }
            })
            .catch(err=>showError(err))
    },
    filterByCategory(state){
        apiCommunication.get(`filter.php?c=${state.inputFilterCategory}`)
        .then(response=> {
            if(isNullOrWhitespace(state.inputFilterCategory)){
                showError('Empty category search filter, try your luck')
            }else if(response.data.meals.idMeal === null){
                showError('No categories found')
            }else{
                state.recipeFiltered = response.data.meals
                showSucess('The category is in our data')
                checkRoute('/recipe-list')
            }
            
        })
        .catch(err=>showError(err))
    },
    filterByArea(state){
        apiCommunication.get(`filter.php?a=${state.inputFilterArea}`)
        .then(response=> {
            if(isNullOrWhitespace(state.inputFilterArea)){
                showError('Empty area search filter, try your luck')
            }else if(response.data.meals.idMeal === null){
                showError('No areas found')
            }else{
                state.recipeFiltered = response.data.meals
                showSucess(`Traveling for ${state.inputFilterArea} recipes`)
                checkRoute('/recipe-list')
            }
        })
        .catch(err=>showError(err))
    },
    getIngredientList(state){
        apiCommunication.get(`list.php?i=list`)
        .then(response=> {
                state.Ingredients = response.data.meals

                for(let lField in state.Ingredients){
                    state.Ingredients[lField] = {...state.Ingredients[lField],strImg:ingredientImgBuilder(state.Ingredients[lField].strIngredient)}
                }
            
        })
        .catch(err=>showError(err))
    },
    getCategoryList(state){
        apiCommunication.get(`categories.php`)
        .then(response=> {
                state.Categories = response.data.categories
        })
        .catch(err=>showError(err))
    },
    getAreaList(state){
        apiCommunication.get(`list.php?a=list`)
        .then(response=> {
                state.Areas = response.data.meals
            
        })
        .catch(err=>showError(err))
    },
    luckRecipe(state){
        apiCommunication.get(`random.php`)
        .then(response=> {
            state.recipeData = prepareObject(response.data.meals)
            showSucess('We hope that our Russian roulette meets your needs')
            checkRoute('/recipe-data')

            populateIngredientsAndMeasures(
                state.recipeDataIngredients,
                state.recipeDataMeasures,
                state.recipeData
                )
        })
        .catch(err=>showError(err))
    },
    changeInputSearchValue(state, value){
        state.inputSearchValue = value
    },
    changeInputFilterIngredientValue(state, value){
        state.inputFilterIngredient = value
    },
    changeInputFilterCategoryValue(state, value){
        state.inputFilterCategory = value
    },
    changeInputFilterAreaValue(state, value){
        state.inputFilterArea = value
    },
}
})