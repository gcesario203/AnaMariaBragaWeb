<template>
    <div class="recipe">
        <h1>{{recipeData.strMeal}}</h1>
        <h2>Fui???
        </h2>
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

</style>