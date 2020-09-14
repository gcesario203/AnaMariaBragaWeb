import Vue from 'vue'
import router from './config/router'

export function goodEmptyCheck(value) {
    Object.keys(value).length === 0
      && value.constructor === Object;
  }

export function isNullOrWhitespace( string ) {
    return !string || !string.trim();
  }

export function populateIngredientsAndMeasures(arr1,arr2,state){
    let i = 1
    let j = 1
    if(arr1.length > 0 && arr2.length > 0){
        arr1.length = 0
        arr2.length = 0
    }

    for(let lField in state){
        if(lField === `strIngredient${i}` && !isNullOrWhitespace(state[lField])){
            arr1.push(state[lField])
            i++
        }
        else if(lField === `strMeasure${j}` && !isNullOrWhitespace(state[lField])){
            arr2.push(state[lField])
            j++
        }
    }
}

export function checkRoute(endpoind){
    if(router.currentRoute.path !== endpoind){
        router.push(endpoind)
    }
}

export function prepareObject(obj){
    const mock = {...obj}
    let mappedData;

    for(let lField in mock){
        mappedData = mock[lField]
    }

    return mappedData
}

export function showError(e){
    if(e && e.response && e.response.data){
        Vue.toasted.global.defaultError({msg: e.response.data})
    }else if(typeof e === 'string') {
        Vue.toasted.global.defaultError({msg:e})
    }else{
        Vue.toasted.global.defaultError()
    }
}

export function showSucess(e){
    if(e && e.response && e.response.data){
        Vue.toasted.global.defaultSuccess({msg: e.response.data})
    }else if(typeof e === 'string') {
        Vue.toasted.global.defaultSuccess({msg:e})
    }else{
        Vue.toasted.global.defaultSuccess()
    }
}

export default {
    showError,
    showSucess,
    prepareObject,
    checkRoute,
    populateIngredientsAndMeasures,
    isNullOrWhitespace,
    goodEmptyCheck
}