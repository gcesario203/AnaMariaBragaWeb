<template>
    <div class="list__category">
        <li
            v-for="cat in Categories"
            :key="cat.id"
        >
            <h3
                @click="
                    changeInputFilterCategoryValue(cat.strCategory);
                    filterByCategory()
                "
            >
                {{cat.strCategory}}
            </h3>
        </li>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:'ListCategory',
    computed:mapState(['Categories']),
    methods:{
        ...mapActions(['filterByCategory', 'changeInputFilterCategoryValue'])
    }
}
</script>

<style>

</style>