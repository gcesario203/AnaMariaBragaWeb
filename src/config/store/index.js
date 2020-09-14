import Vue from 'vue'
import Vuex from 'vuex'
import apiCommunication from '../axios'
import {
    showError,
    showSucess,
    prepareObject,
    checkRoute,
    populateIngredientsAndMeasures,
    isNullOrWhitespace
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
    recipeDataIngredients:[],
    recipeDataMeasures:[],
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
                    showError('Filtro de busca de receitas vazio, tente sua sorte')
                }else if(response.data.meals.idMeal === null){
                    showError('Nenhuma receita encontrada')
                }else{
                    state.recipeData = prepareObject(response.data.meals)
                    showSucess('Receita encontrada com sucesso')
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
                    showError('Filtro de ingredientes vazio, tente sua sorte')
                }else if(response.data.meals.idMeal === null){
                    showError('Nenhum ingrediente encontrado')
                }else{
                    state.recipesDataFilteredByIngredient = prepareObject(response.data.meals)
                    showSucess('FIltrado com o elemento selecionado com maestria')
                }
            })
            .catch(err=>showError(err))
    },
    filterByCategory(state){
        apiCommunication.get(`filter.php?c=${state.inputFilterCategory}`)
        .then(response=> {
            if(isNullOrWhitespace(state.inputFilterCategory)){
                showError('Filtro de categorias vazio, tente sua sorte')
            }else if(response.data.meals.idMeal === null){
                showError('Nenhuma categoria encontrada')
            }else{
                state.recipesDataFilteredByCategory = prepareObject(response.data.meals)
                showSucess('A categoria se encontra em nossos dados')
            }
            
        })
        .catch(err=>showError(err))
    },
    filterByArea(state){
        apiCommunication.get(`filter.php?a=${state.inputFilterArea}`)
        .then(response=> {
            if(isNullOrWhitespace(state.inputFilterArea)){
                showError('Filtro de localizações vazio, tente sua sorte')
            }else if(response.data.meals.idMeal === null){
                showError('Localização não encontrada')
            }else{
                state.recipesDataFilteredByArea = prepareObject(response.data.meals)
                showSucess(`Viajando para ter receitas ${state.inputFilterArea}`)
            }
        })
        .catch(err=>showError(err))
    },
    getIngredientList(state){
        apiCommunication.get(`list.php?i=list`)
        .then(response=> {
                state.Ingredients = response.data.meals
                console.log(state.Ingredients)
            
        })
        .catch(err=>showError(err))
    },
    getCategoryList(state){
        apiCommunication.get(`categories.php`)
        .then(response=> {
                state.Categories = response.data.categories
                console.log(state.Categories)
        })
        .catch(err=>showError(err))
    },
    getAreaList(state){
        apiCommunication.get(`list.php?a=list`)
        .then(response=> {
                state.Areas = response.data.meals
                console.log(state.Areas)
            
        })
        .catch(err=>showError(err))
    },
    luckRecipe(state){
        apiCommunication.get(`random.php`)
        .then(response=> {
            state.recipeData = prepareObject(response.data.meals)
            showSucess('Esperamos que nossa roleta russa atenda suas necessidades')
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