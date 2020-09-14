<template>
   <div class="recipes__filtered">
       <h1>Receitas encontradas</h1>
       <div
            class="recipes__list"
            v-for="recipe in recipeFiltered"
            :key="recipe.id"
            @click="changeInputSearchValue(recipe.strMeal); searchRecipe()"
        >
                <h3>{{recipe.strMeal}}</h3>
                <v-img
                    :src="recipe.strMealThumb"
                    max-width="80vw"
                    max-height="30vh"
                    v-model="page"
                ></v-img>
                
       </div>
   </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'ListRecipes',
    computed:mapState(['recipeFiltered']),
    methods:{
        ...mapActions(['searchRecipe','changeInputSearchValue'])
    },
    data:()=>{
        return{
            page:1
        }
    }
}
</script>

<style>
.recipes__filtered{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.recipes__filtered>h1{
    width: 100%;
    text-align: center;
    font-family: 'Grandstander';
    color: rgb(80, 80, 80);
}

.recipes__list{
    margin: 2rem 0 1rem 0;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: grey;
    border-radius: 1rem;
    transition: 800ms;
}

.recipes__list > h3{
    width: 100%;
    text-align: center;
    font-family: 'Lato';
    padding-bottom: 2rem;
}

.recipes__list:hover{
    background: rgb(235, 131, 35);
    cursor: pointer;
}
</style>