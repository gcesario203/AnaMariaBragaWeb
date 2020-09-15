<template>
    <div class="list__area">
        <li
            v-for="area in Areas"
            :key="area.id"
        >
            <h3
                @click="
                    changeInputFilterAreaValue(area.strArea);
                    filterByArea()
                    
                "
            >
                {{area.strArea}}
            </h3>
        </li>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:'ListCategory',
    computed:mapState(['Areas']),
    methods:{
        ...mapActions(['filterByArea', 'changeInputFilterAreaValue'])
    }
}
</script>

<style>
.list__area{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.list__area > li{
    list-style: none;
    background: rgb(139, 139, 139);
    width: 100%;
    max-width: 20rem;
    padding: 2rem;
    margin: 1rem 0;
    border-radius: 1rem;
    transition: 800ms;
}

.list__area > li:hover{
    background: rgb(235, 131, 35);
    cursor: pointer;
}

.list__area > li > h3{
    font-family: 'Lato';
    text-align: center;
}
</style>