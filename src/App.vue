<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <navbar></navbar>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import navbar from './components/template/navbar';

export default {
  name: 'App',
  components: {
    // HelloWorld
    navbar
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
