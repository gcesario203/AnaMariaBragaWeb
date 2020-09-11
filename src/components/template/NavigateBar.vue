<template>
    <div class="navBar">
        <div class="navBar__header">
            <i class="fas fa-pizza-slice fa-2x"></i>
            <i class="fas fa-reply"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavigateBar'
}
</script>

<style>
.navBar{
    grid-area: Menu;
    background: linear-gradient(to right,rgb(218, 132, 75),rgb(219, 122, 42));
}

.navBar__header{
    display: flex;
    padding: 1rem 1rem;
    width: 100%;
    justify-content: space-between;
    align-items: center;
}
</style>