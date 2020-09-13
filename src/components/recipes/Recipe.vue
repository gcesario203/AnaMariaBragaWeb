<template>
    <div class="recipe">
            <div class="recipe__title">
                <h1>{{recipeData.strMeal}}</h1>
                <h2>{{recipeData.strTags}}</h2>
            </div>
            <v-img
                :src="recipeData.strMealThumb"
                :lazy-src="recipeData.strMealThumb"
                max-height="40vh"
                max-width="40vw"
            >
            </v-img>
            <div class="recipe__itens">
                <h3>Ingredientes e medidas</h3>
            </div>
            <div class="recipe__content">
                <List
                    :itensIngredients="recipeDataIngredients"
                    name="Ingredientes"
                >
                </List>
                <List
                    :itensIngredients="recipeDataMeasures"
                    name="Medidas"
                >
                </List>
            </div>
    </div>
</template>

<script>
import List from './listItens/List'
import {mapState} from 'vuex'
export default {
    name:'Recipe',
    computed:mapState(['recipeData','recipeDataIngredients','recipeDataMeasures']),
    components:{List},
}
</script>

<style>
.recipe{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.recipe__title{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.recipe__title > h1{
    font-family: 'Grandstander';
    font-weight: 700;
    font-size: 3rem;
}

.recipe__title > h2 {
    font-family: 'Lato';
    color: rgb(94, 93, 93);
    margin-bottom: 1.5rem;
}

.recipe__itens > h3{
    margin-top: 1rem;
    font-family: 'Grandstander';
    color: rgb(94, 93, 93);
    margin-bottom: 1.5rem;
}

.recipe__content{
    display: flex;
    width: 100%;
    padding: 2rem 10rem;
    align-items: center;
    justify-content: center;
}
</style>