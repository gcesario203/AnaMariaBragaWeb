<template>
   <div class="category__filtered">
       <h1>Categories found</h1>
       <div
            class="category__list"
            v-for="category in Categories"
            :key="category.id"
            @click="changeInputFilterCategoryValue(category.strCategory); filterByCategory()"
        >
                <h1>{{category.strCategory}}</h1>
                <v-img
                    :src="category.strCategoryThumb"
                    max-width="80vw"
                    max-height="30vh"
                    v-model="page"
                ></v-img>
                <h3>{{category.strCategoryDescription}}</h3>
                
       </div>
   </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name:'ListCategory',
    computed:mapState(['Categories']),
    methods:{ ...mapActions(['filterByCategory', 'changeInputFilterCategoryValue']) }
}
</script>

<style>
.category__filtered{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.category__filtered>h1{
    width: 100%;
    text-align: center;
    font-family: 'Grandstander';
    color: rgb(80, 80, 80);
}

.category__list{
    margin: 2rem 0 1rem 0;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: grey;
    border-radius: 1rem;
    transition: 800ms;
}

.category__list > h1{
    width: 100%;
    text-align: center;
    font-family: 'Grandstander';
    padding-bottom: 2rem;
}

.category__list > h3{
    font-family: 'Lato';
    width: 100%;
    text-align: center;
    padding-top: 2rem;
}

.category__list:hover{
    background: rgb(235, 131, 35);
    cursor: pointer;
}
</style>