<template>
    <router-link :to="route" >
      <div class="category__filtered">
        <div
          class="category__list"
        >
            <v-img
              :src="imgUrl"
              max-width="50vw"
              max-height="20vh"
            ></v-img>
            <h3>{{categoryName}}</h3>
                
       </div>
      </div>
    </router-link>
</template>

<script>
export default {
    name:'GenericCard',
    props:['imgUrl','categoryName','route']
}
</script>
<style>
.category__filtered{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.category__list{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: grey;
    border-radius: 1rem;
    transition: 800ms;
}

.category__list > h3{
    width: 100%;
    text-align: center;
    font-family: 'Grandstander';
}

.category__list > h3{
    font-family: 'Lato';
    width: 100%;
    text-align: center;
    color: black;
}

.category__list:hover{
    background: rgb(235, 131, 35);
    cursor: pointer;
}
</style>