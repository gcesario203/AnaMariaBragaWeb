<template>
    <div class="navBar" v-show="isMenuVisible">
        <div class="navBar__header">
            <h1>Options</h1>
            <v-icon x-large>mdi-pizza</v-icon>
        </div>
        <div class="navBar__search">
            <SearchBar
                :inputAction="changeInputSearchValue"
                :action="searchRecipe"
                icon="fas fa-search"
                placeholder="Search a recipe"
            >
            </SearchBar>
            <SearchBar
                :inputAction="changeInputFilterAreaValue"
                :action="filterByArea"
                icon="fas fa-globe-americas"
                placeholder="Filter by area"
            >
            </SearchBar>
            <SearchBar
                :inputAction="changeInputFilterIngredientValue"
                :action="filterMainIngredient"
                icon="fas fa-fish"
                placeholder="Filter by ingredient"
            >
            </SearchBar>
            <SearchBar
                :inputAction="changeInputFilterCategoryValue"
                :action="filterByCategory"
                icon="fas fa-list"
                placeholder="Filer by category"
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
                'filterByArea',
                'changeInputSearchValue',
                'changeInputFilterIngredientValue',
                'changeInputFilterCategoryValue',
                'changeInputFilterAreaValue'
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