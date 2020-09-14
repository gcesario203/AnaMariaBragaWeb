<template>
   <div class="home">
       <div class="home__title">
            <h1>Selecione uma das listagens abaixo</h1>
       </div>
       <div :class="{'home__cards':isMenuVisible, 'home__cards__large':!isMenuVisible}">
           <CardOption
            categoryName="Locais remotos que compartilham seus segredos"
            imgUrl="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            :action="getAreaList"
            route="/"
           >
           </CardOption>
           <CardOption
            categoryName="Listagem dos principais ingredientes usados ao redor do mundo"
            imgUrl="https://images.unsplash.com/photo-1563599175592-c58dc214deff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            :action="getIngredientList"
            route="/ingredients"
           >
           </CardOption>
           <CardOption
            categoryName="Categorias das mais comuns até as mais sofisticadas"
            imgUrl="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            :action="getCategoryList"
            route="/"
           >
           </CardOption>
       </div>
   </div>
</template>

<script>
import CardOption from '../cards/ListOptionCard'
import {mapState, mapActions} from 'vuex'

export default {
    name:'Home',
    components:{CardOption},
    computed:mapState(['isMenuVisible','Ingredients']),
    methods:{
        ...mapActions([
            'getIngredientList',
            'getCategoryList',
            'getAreaList'
        ])
    }
}
</script>

<style>
.home{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.home__title > h1{
    width: 100%;
    text-align: center;
    font-family: 'Grandstander';
    color: rgb(80, 80, 80);
}

.home__cards{
    margin: 5rem 0;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.home__cards__large{
    margin: 5rem 0;
    padding: 0 5rem;
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>