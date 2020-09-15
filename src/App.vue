<template>
 <div :class="{'app':isMenuVisible,'hide-menu':!isMenuVisible}">
    <Header></Header>
    <Content></Content>
    <NavigateBar></NavigateBar>
  </div>
</template>

<script>
import Header from './components/template/Header'
import NavigateBar from './components/template/NavigateBar'
import Content from './components/template/Content'
import {mapState,mapActions} from 'vuex'

export default {
  name: 'App',
  computed:mapState(['isMenuVisible']),
  methods:{
        ...mapActions([
            'getIngredientList',
            'getCategoryList',
            'getAreaList'
        ])
    },
 created(){
   this.getIngredientList(),
   this.getCategoryList(),
   this.getAreaList()
 },
 components:{Header,NavigateBar, Content},
};
</script>
<style >
@import url(https://fonts.googleapis.com/css?family=Grandstander);
@import url(https://fonts.googleapis.com/css?family=Lato);

*{
  margin: 0;
  box-sizing: border-box;
}

.app{
  display: grid;
  height: 100vh;
  grid-template-columns: 25vw 1fr;
  grid-template-rows: 10vh 1fr;
    grid-template-areas:
    "Header Header"
    "Menu Content"
  ;
}
.hide-menu{
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 10vh 1fr;
  grid-template-areas:
    "Header"
    "Content"
  ;
}

</style>