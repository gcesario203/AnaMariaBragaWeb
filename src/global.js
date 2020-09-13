import Vue from 'vue'

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

export default {showError,showSucess,prepareObject}