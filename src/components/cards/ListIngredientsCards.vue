<template>
  <v-app >
    <v-card
      :items="Ingredients"
      v-model="page"
      class="mx-auto my-10"
      max-width="50vw"
      color="grey"
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content @click="changeInputFilterIngredientValue(Ingredients[page - 1].strIngredient); filterMainIngredient()">
            <v-list-item-title class="headline mb-1"> {{ Ingredients[page-1].strIngredient }}</v-list-item-title>
            <v-list-item-subtitle>{{ Ingredients[page - 1].strDescription }}</v-list-item-subtitle>
        </v-list-item-content>

          <v-list-item-avatar
            size="15vw"
          >
          <v-img
            :src="Ingredients[page-1].strImg"
          >
          </v-img>
        </v-list-item-avatar>
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

.v-card:hover{
  cursor: pointer;
}

a{
  text-decoration: none;
}

</style>