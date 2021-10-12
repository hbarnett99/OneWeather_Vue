<template>
    <div class="card-header">
    <h2>Mars Weather</h2>
  </div>
  <div class="card-body" style="position: relative;">
    <MarsWeather/>
  </div>

</template>

<script>
import MarsWeather from '../components/MarsWeather.vue';
export default {
  name: "MarsW",

  components: {
    MarsWeather
  },
};

</script>

<style scoped>

</style>