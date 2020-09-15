<template>
    <div class="header">
        <a
            @click="toggleMenu()"
            v-if="isMenuVisible"
        >
            <v-icon x-large>mdi-arrow-left</v-icon>
        </a>
        <a
            @click="toggleMenu()"
            v-else
        >
            <v-icon x-large>mdi-arrow-right</v-icon>
        </a>
        <h1>ANB Recipes</h1>
    </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    name: 'Header',
    computed: mapState(['isMenuVisible']),
    methods:{
        ...mapActions(['toggleMenu'])
    }
}
</script>

<style>
.header{
    display: flex;
    align-items: center;
    grid-area: Header;
    background: linear-gradient(to right,rgb(219, 128, 53),rgb(235, 131, 35));
}

.header > a{
    display: flex;
    align-self: center;
    padding: 0.5rem;
    cursor: pointer;
    transition: 800ms;
    height: 100%;
}

.header > a:hover{
    background: rgba(1, 1, 1, 0.15);
}

.header > h1{
    font-family: 'Grandstander';
    text-align: center;
    width: 100%;
}
</style>