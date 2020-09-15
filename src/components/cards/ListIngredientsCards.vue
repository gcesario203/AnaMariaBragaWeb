<template>
  <v-app >
    <v-card
      :items="Ingredients"
      v-model="page"
      class="mx-auto my-10"
      max-width="80rem"
      max-height="30rem"
      height="28rem"
      width="20rem"
      color="grey"
      hover
      align-center
      outlined
    >
      <v-list-item>
        <v-list-item-content @click="changeInputFilterIngredientValue(Ingredients[page - 1].strIngredient); filterMainIngredient()">
            <v-list-item-title class="headline text-center mb-6"> {{ Ingredients[page-1].strIngredient }}</v-list-item-title>

          <v-img
            height="20rem"
            align-center
            :src="Ingredients[page-1].strImg"
          >
          </v-img>
          
        </v-list-item-content>
      </v-list-item>
    </v-card>

    <v-pagination
        v-model="page"
        :length="Ingredients.length"
        :total-visible="10"
        color="#db8035"
      ></v-pagination>
  </v-app>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:'ListCards',
    data:()=>{
        return{
            page:1,
        }
    },
    computed:mapState(['Ingredients']),
    methods:{
      ...mapActions(['changeInputFilterIngredientValue','filterMainIngredient'])
    }
}
</script>

<style>
.v-card{
  margin: 2rem;
}

.wrap-text{
  overflow: hidden !important;
}

.v-card:hover{
  cursor: pointer;
}

a{
  text-decoration: none;
}

</style>