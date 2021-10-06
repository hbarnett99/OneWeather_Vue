<template>
    <!-- <iframe src='https://mars.nasa.gov/layout/embed/image/mslweather/' width='700' height='600'  scrolling='no' frameborder='0'></iframe> -->
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