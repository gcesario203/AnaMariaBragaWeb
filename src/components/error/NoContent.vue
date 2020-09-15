<template>
    <div class="noContent">
        <h1>Nenhum item encontrado ou selecionado, tente novamente com os filtros do menu</h1>
        <router-link to="/" class="noContent__button__container">
            <v-icon x-large>fas fa-home</v-icon>
            <h3>Voltar para o inicio</h3>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'NoContent'
}
</script>
<style>
.noContent{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5rem 5rem;
}

.noContent > h1{
    font-family: 'Grandstander';
    color: rgb(87, 87, 87);
    text-align: center;
}

.noContent__button__container{
    display: flex;
    background: rgb(205, 206, 204);
    align-items: center;
    border-radius: 3rem;
    justify-content: space-around;
    transition: 800ms;
    margin-top: 4rem;
}

.noContent__button__container:hover{
    background: rgb(139, 139, 139);
}

.noContent__button__container > i{
    background: rgb(235, 131, 35);
    margin-right: 1rem;
    padding: 2rem;
    border-radius: 3rem 0 0 3rem;
}

.noContent__button__container > h3{
    width: 100%;
    text-align: center;
    margin-right: 2rem;
    font-family: 'Lato';
    color: black;
}
</style>