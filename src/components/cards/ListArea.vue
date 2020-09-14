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

</style>