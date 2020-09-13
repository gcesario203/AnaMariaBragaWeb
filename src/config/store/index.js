import Vue from 'vue'
import Vuex from 'vuex'
import apiCommunication from '../axios'
import {showError, showSucess, prepareObject} from '../../global'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
state:{
    isMenuVisible: true,
    inputSearchValue:'',
    inputFilterIngredient:'',
    inputFilterArea:'',
    inputFilterCategory:'',
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
                if(state.inputSearchValue === '' || state.inputSearchValue === undefined){
                    showError('Use outros filtros ou tente sua sorte')
                }else{
                    state.recipeData = prepareObject(response.data.meals)
                    showSucess('Receita encontrada com sucesso')
                }
                

                if(router.currentRoute.path !== '/recipe-data'){
                    router.push('/recipe-data')
                }
            })
            .catch(err=>showError(err))
    },
    filterMainIngredient(state){
        apiCommunication.get(`filter.php?i=${state.inputFilterIngredient}`)
            .then(response=> {
                if(state.inputFilterIngredient === '' || state.inputFilterIngredient === undefined){
                    showError('Use outros filtros ou tente sua sorte')
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
            if(state.inputFilterCategory === '' || state.inputFilterCategory === undefined){
                showError('Use outros filtros ou tente sua sorte')
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
            if(state.inputFilterArea === '' || state.inputFilterArea === undefined){
                showError('Use outros filtros ou tente sua sorte')
            }else{
                state.recipesDataFilteredByArea = prepareObject(response.data.meals)
                showSucess(`Viajando para ter receitas ${state.inputSearchValue}`)
            }
        })
        .catch(err=>showError(err))
    },
    getIngredientList(state){
        apiCommunication.get(`list.php?i=list`)
        .then(response=> {
                state.Ingredients = prepareObject(response.data.meals)
                showSucess('Lista de ingredientes obtida com sucesso')
            
        })
        .catch(err=>showError(err))
    },
    getCategoryList(state){
        apiCommunication.get(`categories.php`)
        .then(response=> {
                state.Categories = prepareObject(response.data.categories)
                showSucess('Lista de categorias obtida com sucesso')
        })
        .catch(err=>showError(err))
    },
    getAreaList(state){
        apiCommunication.get(`list.php?a=list`)
        .then(response=> {
                state.Areas = prepareObject(response.data.meals)
                showSucess('Lista de localizações obtida com sucesso')
            
        })
        .catch(err=>showError(err))
    },
    luckRecipe(state){
        apiCommunication.get(`random.php`)
        .then(response=> {
            state.recipeData = prepareObject(response.data.meals)
            showSucess('Esperamos que nossa roleta russa atenda suas necessidades')

            console.log(state.recipeData)
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