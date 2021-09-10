<template>
  <img alt="one weather logo" src="./assets/ow_logo.png">
  <SearchCoords />
  <navbar />
  <Weather />

</template>


<script>
// import HelloWorld from './components/HelloWorld.vue';
import navbar from './components/template/navbar';
import SearchCoords from './components/SearchCoords.vue';
import Weather from './components/Weather';

export default {
  name: 'App',
  components: {
    // HelloWorld
    navbar,
    SearchCoords,
    Weather,
  },
};




</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/

  @import 'css/app.css';
}


</style>
