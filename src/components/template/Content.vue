<template>
    <div class="content">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Content'
}
</script>

<style>
.content{
    grid-area: Content;
    padding: 2rem 5rem;
    background: white;
    overflow-x: hidden;
    overflow-y: scroll;
}


@media (max-width: 700px) {
    .content{
    grid-area: Content;
    padding: 2rem 1rem;
    background: white;
    overflow-x: hidden;
    overflow-y: scroll;
}
}


</style>