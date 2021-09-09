<template>
  <img alt="one weather logo" src="./assets/ow_logo.png"> 
  <SearchCoords />

</template>


<script>
import SearchCoords from './components/SearchCoords.vue';

export default {
  name: 'App',
  components: {
    SearchCoords
  }
  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
