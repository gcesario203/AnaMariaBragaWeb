<template>
    <div class="recipe">
            <h1 class="recipe__title">{{recipeData.strMeal}}</h1>
            <v-img
                :src="recipeData.strMealThumb"
                max-height="35vh"
                max-width="35vw"
            >
            </v-img>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'Recipe',
    computed:mapState(['recipeData'])
}
</script>

<style>
.recipe{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.recipe__title{
    font-family: 'Grandstander';
    font-size: 3rem;
    margin-bottom: 10vh;
}
</style>