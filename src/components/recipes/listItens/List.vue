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
    border: 1px solid black;
    list-style: none;
    padding: 1rem;
}

.list__name{
    display: flex;
    justify-content: center;
    padding: 1rem;
    border: 1px solid black;
}
</style>