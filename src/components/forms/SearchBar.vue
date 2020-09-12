<template>
    <div class="searchBar">
        <div class="searchBar__content">
            <button @click="searchRecipe()">
                <v-icon>fas fa-search</v-icon>
            </button>
            <input
                type="text"
                @input="changeInputSearchValue(inputSearch)"
                v-model="inputSearch"
                placeholder="Pesquise uma receita"
            >
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'SearchBar',
    data:()=>{
        return{
            inputSearch:''
        }  
    },
    methods:{
        ...mapActions(['searchRecipe','changeInputSearchValue'])
    },
}
</script>

<style>
.searchBar{
    margin: 1rem 0;
    padding: 0 1rem;
    height: 3rem;
}

.searchBar__content{
    display: flex;
    height: 100%;
    align-items: center;
}

.searchBar__content > button{
    width: 30%;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
    background: rgba(1, 1, 1, 0.35);
    transition: 800ms;
}

.searchBar__content > button:hover{
    background: rgba(1, 1, 1, 0.25);
}

.searchBar__content > input{
    width: 100%;
    height: 100%;
    border-radius: 0 1rem 1rem 0;
    background: white;
    padding: 0 1rem;
    outline: none;
    font-family: 'Lato';
    font-size: 1.2rem;
}
</style>