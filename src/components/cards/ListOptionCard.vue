<template>
  <v-card
    class="mx-auto"
    max-width="20vw"
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
</template>

<script>
export default {
    name:'GenericCard',
    props:['imgUrl','categoryName','action']
}
</script>

<style>
</style>