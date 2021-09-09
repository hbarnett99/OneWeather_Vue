<template>
  <header>
    <h1>Weather</h1>
  </header>
  <div>
    <h2> {{ data.name }} </h2>
  </div>
  <div>
    <h3>{{ data.main.temp }} </h3>
  </div>
</template>

<script>
import axios from 'axios';
window.axios = require('axios');

export default {
  name: "Weather",
  data() {
    return {
      data: {}
    };
  },
  mounted()
  {
    axios.get("https://api.openweathermap.org/data/2.5/weather?q=Melbourne&appid=b15ee66b6734f621e9793d0ed66b3eff")
      .then(response => this.data = response.data);
      /*.then(response => console.log(response.data));*/
  },
};

</script>
