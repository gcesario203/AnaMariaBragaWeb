<template>
   <div class="home">
       <div class="home__title">
            <h1>Welcome, Select one of the listings below</h1>
       </div>
       <div :class="{'home__cards':isMenuVisible, 'home__cards__large':!isMenuVisible}">
           <CardOption
            categoryName="Remote locations that share their secrets"
            imgUrl="https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            route="/areas"
           >
           </CardOption>
           <CardOption
            categoryName="List of the main ingredients used around the world"
            imgUrl="https://images.unsplash.com/photo-1563599175592-c58dc214deff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            route="/ingredients"
           >
           </CardOption>
           <CardOption
            categoryName="Categories from the most common to the most sophisticated"
            imgUrl="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            route="/categories"
           >
           </CardOption>
       </div>
   </div>
</template>

<script>
import CardOption from '../cards/ListOptionCard'
import {mapState} from 'vuex'

export default {
    name:'Home',
    components:{CardOption},
    computed:mapState(['isMenuVisible','Ingredients']),
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
    padding: 0 -3rem;
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