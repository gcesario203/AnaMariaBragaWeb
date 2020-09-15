<template>
    <div class="list">
        <h3 class="list__name">{{name}}</h3>
        <li class ="list__member" v-for="item in itensIngredients" :key="item.id">
            {{item}}
        </li>
    </div>
</template>

<script>
export default {
    name: 'List',
    props:['itensIngredients','name']
}
</script>
<style>
.list{
    width: 100%;
}

.list__member{
    list-style: none;
    display: flex;
    padding: 2rem;
    border: 1px solid black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.list__name{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background: rgb(235, 131, 35);
    border: solid 1px black;
}

@media(max-width: 700px){
    .list__member{
    list-style: none;
    display: flex;
    padding: 0.5rem;
    border: 1px solid black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.list__name{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background: rgb(235, 131, 35);
    border: solid 1px black;
}
}
</style>