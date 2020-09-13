<template>
  <button class="gambiarra">
    <v-card
      class="mx-auto"
      max-width="20vw"
      max-height="32vh"
      @click="action()"
    >
      <v-img
        class="white--text align-end"
        height="20vh"
        :src="imgUrl"
      >
      </v-img>
      <v-card-text class="text--primary">
        <v-card-subtitle class="p-10">{{categoryName}}</v-card-subtitle>
      </v-card-text>
    </v-card>
  </button>
  
</template>

<script>
export default {
    name:'GenericCard',
    props:['imgUrl','categoryName','action']
}
</script>
<style>
.gambiarra{
  transition: 200ms;
}
.gambiarra:hover{
  border: 1px solid rgb(235, 131, 35);
}
</style>