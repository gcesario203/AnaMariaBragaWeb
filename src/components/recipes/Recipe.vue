<template>
    <div>
        <div class="recipe" v-if="Object.keys(recipeData).length !== 0">
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
                <h3>Ingredients and measures</h3>
            </div>
            <div class="recipe__content">
                <List
                    :itensIngredients="recipeDataIngredients"
                    name="Ingredients"
                >
                </List>
                <List
                    :itensIngredients="recipeDataMeasures"
                    name="Measures"
                >
                </List>
            </div>
            <div class="recipe__prepare">
                <h3>Preparation mode</h3>
                <p>{{recipeData.strInstructions}}</p>
                <h3 v-if="recipeData.strYoutube || recipeData.strSource">More info</h3>
                    <a
                    :href="recipeData.strYoutube"
                    target="_blank"
                    v-if="recipeData.strYoutube"
                    >
                        <button>
                            <v-icon x-large>fab fa-youtube</v-icon>
                            <p>Tutorial youtube</p>
                        </button>
                    </a>
                    <a
                        :href="recipeData.strSource"
                        target="_blank"
                        v-if="recipeData.strSource"
                    >
                    <button>
                        <v-icon x-large class="icon__uiui">fas fa-mortar-pestle</v-icon>
                        <p>Recipe source</p>
                    </button>
                </a>
            </div>
        </div>
        <div v-else>
            <NoContent></NoContent>
        </div>
    </div>
</template>

<script>
import List from './listItens/List'
import NoContent from '../error/NoContent'
import {mapState} from 'vuex'
export default {
    name:'Recipe',
    computed:mapState(['recipeData','recipeDataIngredients','recipeDataMeasures']),
    components:{List,NoContent},
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
    padding: 1rem;
    font-weight: 700;
    font-size: 3rem;
    background: rgb(235, 131, 35);
    border: 3px solid rgb(235, 131, 35);
    border-radius: 8px;
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
    flex-direction: row;
    width: 100%;
    align-items: baseline;
    justify-content: center;
}

.recipe__prepare{
    display: flex;
    width: 100%;
    flex-direction: column;
}

.recipe__prepare > h3{
    margin-top: 2rem;
    font-family: 'Grandstander';
    color: rgb(94, 93, 93);
    
    margin-bottom: 1.5rem;
    text-align: center;
}

.recipe__prepare > a {
    display: flex;
    text-decoration: none;
}

.recipe__prepare > a > button{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: rgb(205, 206, 204);
    border-radius: 7rem;
    transition: 800ms;
    margin-bottom: 2rem;
}

.recipe__prepare > a > button > i{
    background: crimson;
    padding: 1rem;
    border-radius: 7rem 0 0 7rem;
}

.recipe__prepare > a > button > p{
    color: black;
    font-family: 'Lato';
    font-weight: 700;
    width: 100%;
}

.recipe__prepare > a > button:hover{
    background: rgb(139, 139, 139);
}

.recipe__prepare > a > button > i.icon__uiui{
    background:rgb(235, 131, 35) ;
}

@media (max-width: 700px) {
    .recipe__content{
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: baseline;
    justify-content: center;
}
}

</style>