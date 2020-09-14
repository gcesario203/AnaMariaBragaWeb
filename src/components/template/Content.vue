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
    padding: 5rem 2rem;
    background: white;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>