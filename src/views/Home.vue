<template>

  <div class="card-header m-0">
    <h2>Weather</h2>
  </div>
  <div class="card-body" style="position: relative;">
    <SearchCoords @coords-fetch="handleCoords" />
  </div>
  <div v-if="data?.location?.name != null">
    <div class="card-body" style="position: relative;">
      <Weather :data="data" :data_lastweek="data_lastweek" :data_yesterday="data_yesterday"/>
    </div>
    <div class="card-body" style="position: relative;">
      <DemoChart :dates="dates" :temps="temps" :precipitation="precipitation"/>
    </div>
  </div>


</template>

<script>
import SearchCoords from '@/components/SearchCoords.vue';
import Weather from '@/components/Weather';
import DemoChart from '@/components/Chart.vue';
import axios from 'axios';

export default {
  name: 'App',
  components: {
    SearchCoords,
    Weather,
    DemoChart,
  },
  data() {
    return {
      data: {},
      data_lastweek: {},
      data_yesterday: {},
      dates: [],
      temps: [],
      precipitation: []
    };
  },
  methods: {
    handleCoords([lng, lat]) {
      if (lng && lat) {
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=721ef4891d454f2385304513211009&q=${lat},${lng}&days=7`)
          .then(response => {
            this.data = response.data;
            this.dates = this.data.forecast.forecastday.map(({date}) => date);
            this.temps = this.data.forecast.forecastday.map(({day}) => day.avgtemp_c);
            this.precipitation = this.data.forecast.forecastday.map(({day}) => day.daily_chance_of_rain);
            console.log(this.dates);
            console.log(this.temps);
            console.log(this.data.forecast.forecastday);
            console.log(this.precipitation);
            console.log(this.data);
          });

        var today = new Date();
        var lastweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);
        var yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate()-1);
        lastweek = lastweek.toLocaleDateString();
        yesterday = yesterday.toLocaleDateString();

        var dateArr = lastweek.split("/");
        dateArr = dateArr.reverse();
        var dateOut = "";
        for (var i = 0; i < dateArr.length; i++) {
          dateOut = dateOut.concat(dateArr[i]);
          if (i != dateArr.length - 1) {
            dateOut = dateOut.concat("-");
          }
        }
        lastweek = dateOut;

        dateArr = yesterday.split("/");
        dateOut = "";
        for (i = 0; i < dateArr.length; i++) {
          dateOut = dateOut.concat(dateArr[i]);
          if (i != dateArr.length - 1) {
            dateOut = dateOut.concat("-");
          }
        }
        yesterday = dateOut;

        axios.get(`http://api.weatherapi.com/v1/history.json?key=721ef4891d454f2385304513211009&q=${lat},${lng}&dt=`+lastweek)
          .then(response => {
            this.data_lastweek = response.data;
            console.log(this.data_lastweek);
          });

        axios.get(`http://api.weatherapi.com/v1/history.json?key=721ef4891d454f2385304513211009&q=${lat},${lng}&dt=`+yesterday)
          .then(response => {
            this.data_yesterday = response.data;
            console.log(this.data_yesterday);
          });
      }
    },
  }
};
</script>

<style scoped>

</style>
