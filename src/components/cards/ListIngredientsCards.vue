<template>
<v-app class="ingredients">
    <v-card
      v-model="page"
      v-for="x in Ingredients" :key="x.id"
    >
    <button @click="changeInputFilterIngredientValue(x.strIngredient); filterMainIngredient()">
      <v-list-item three-line >
        <v-list-item-content >
          <div class="overline mb-4"></div>
                <v-list-item-title class="headline mb-1"> {{ x.strIngredient }}</v-list-item-title>
                <v-list-item-subtitle>{{ x.strDescription }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar
          tile
          size="80"
          color="grey"
          
        >
            <v-img :src="x.strImg"></v-img>
        </v-list-item-avatar>
      </v-list-item>
    </button>
    </v-card>
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
</style>