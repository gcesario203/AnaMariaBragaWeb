<template>
    <div class="navBar" v-show="isMenuVisible">
        <div class="navBar__header">
            <h1>Opções</h1>
            <v-icon x-large>mdi-pizza</v-icon>
        </div>
        <div class="navBar__search">
            <SearchBar></SearchBar>
        </div>
    </div>
</template>

<script>
import SearchBar from '../forms/SearchBar'
import {mapState} from 'vuex'
export default {
    name: 'NavigateBar',
    computed: mapState(['isMenuVisible']),
    components:{SearchBar}
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