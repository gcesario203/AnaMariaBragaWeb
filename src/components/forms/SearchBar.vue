<template>
    <div class="searchBar">
        <div class="searchBar__content">
            <button @click="action()">
                <v-icon>{{icon}}</v-icon>
            </button>
            <input
                type="text"
                @input="inputAction(inputSearch)"
                v-model="inputSearch"
                :placeholder="placeholder"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    props:['action','icon','placeholder','inputAction'],
    data:()=>{
        return{
            inputSearch:''
        }  
    }
}
</script>

<style>
.searchBar{
    margin: 1rem 0;
    padding: 0 1rem;
    height: 3rem;
}

.searchBar__content{
    display: flex;
    height: 100%;
    align-items: center;
}

.searchBar__content > button{
    width: 30%;
    height: 100%;
    border-radius: 1rem 0 0 1rem;
    background: rgb(235, 131, 35);
    outline: none;
}

.searchBar__content > button:hover{
    border: 2px solid black;
}

.searchBar__content > input{
    width: 100%;
    height: 100%;
    border-radius: 0 1rem 1rem 0;
    background: white;
    padding: 0 1rem;
    outline: none;
    font-family: 'Lato';
    font-size: 1.2rem;
}
</style>