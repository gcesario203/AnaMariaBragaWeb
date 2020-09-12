import Vue from 'vue'
import Vuex from 'vuex'
import apiCommunication from '../axios'
import {showError, showSucess} from '../../global'

Vue.use(Vuex)

export default new Vuex.Store({
state:{
    isMenuVisible: true,
    inputSearchValue:'',
    recipeData: {}
},
actions:{
    toggleMenu(context){
        context.commit('toggleMenu')
    },
    searchRecipe(context){
        context.commit('searchRecipe')
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
            .then(res=> {
                showSucess(res)
                state.recipeData = res.data
                console.log(state.recipeData)
            })
            .catch(showError)
    },
    changeInputSearchValue(state, value){
        state.inputSearchValue = value
    }
}
})
