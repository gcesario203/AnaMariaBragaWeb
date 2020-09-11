<template>
  <div class="app">
    <Header></Header>
    <Content></Content>
    <NavigateBar></NavigateBar>
  </div>
</template>
<script>
import Header from './components/template/Header'
import NavigateBar from './components/template/NavigateBar'
import Content from './components/template/Content'


export default {
  name:'App',
  components:{Header,NavigateBar, Content}
}
</script>
<style>
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
    "Menu Header"
    "Menu Content"
  ;
}
</style>
