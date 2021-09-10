<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Hello World"/>
  <div>
    <DemoChart/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import DemoChart from './components/Chart.vue';

export default {
  name: 'app',
  components: {
    HelloWorld, DemoChart
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
  margin-top: 60px;
}
</style>
