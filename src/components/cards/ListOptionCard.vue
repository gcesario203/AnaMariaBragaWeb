<template>
    <router-link :to="route" class="gambiarra">
    <v-card
      class="mx-auto"
      max-width="16vw"
      max-height="32vh"
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
    </router-link>
</template>

<script>
export default {
    name:'GenericCard',
    props:['imgUrl','categoryName','route']
}
</script>
<style>
.gambiarra{
  transition: 800ms;
}
.gambiarra:hover{
  background:  rgb(235, 131, 35);
  border-radius: 2rem;
}
</style>