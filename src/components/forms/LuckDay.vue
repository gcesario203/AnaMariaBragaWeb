<template>
    <div class="luckDay">
        <div class="luckDay__content">
            <button @click="luckRecipe()">
                <v-icon>far fa-lightbulb</v-icon>
                <p>Estou com sorte!</p>
            </button>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name: 'LuckDay',
    methods:{
        ...mapActions(['luckRecipe'])
    },
}
</script>

<style>
.luckDay{
    margin: 1rem 0;
    padding: 0 1rem;
    height: 3rem;
}

.luckDay__content{
    display: flex;
    height: 100%;
    align-items: center;
}

.luckDay__content > button{
    display: flex;
    align-items: center;
    padding: 0 5rem 0 1rem;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 1rem 1rem 1rem 1rem;
    background: rgba(1, 1, 1, 0.2);
    transition: 800ms;
    outline: none;
}

.luckDay__content > button:hover{
    background: rgb(235, 131, 35);
}

.luckDay__content > button > p{
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 1rem;
}

</style>