<template>
    <div class="navBar" v-show="isMenuVisible">
        <div class="navBar__header">
            <h1>Opções</h1>
            <v-icon x-large>mdi-pizza</v-icon>
        </div>
        <div class="navBar__search">
            <SearchBar
                :action="searchRecipe"
                icon="fas fa-search"
                placeholder="Pesquise uma receita"
            >
            </SearchBar>
            <SearchBar
                :action="filterByArea"
                icon="fas fa-globe-americas"
                placeholder="Filtrar por Localidade"
            >
            </SearchBar>
            <SearchBar
                :action="filterMainIngredient"
                icon="fas fa-fish"
                placeholder="Filtrar por Ingredite"
            >
            </SearchBar>
            <SearchBar
                :action="filterByCategory"
                icon="fas fa-list"
                placeholder="Filtrar por Categoria"
            >
            </SearchBar>
            <LuckDay></LuckDay>
        </div>
    </div>
</template>

<script>
import SearchBar from '../forms/SearchBar'
import LuckDay from '../forms/LuckDay'

import {mapState,mapActions} from 'vuex'
export default {
    name: 'NavigateBar',
    computed: mapState(['isMenuVisible']),
    components:{SearchBar, LuckDay},
    methods:{
        ...mapActions([
                'searchRecipe',
                'filterMainIngredient',
                'filterByCategory',
                'filterByArea'
                ])
    }
}
</script>

<style>
.navBar{
    grid-area: Menu;
    background: linear-gradient(to right,rgb(206, 205, 205),rgb(197, 197, 197));
}

.navBar__header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    font-family: 'Lato';
    font-size: 1rem;
    overflow: hidden;
}
</style>