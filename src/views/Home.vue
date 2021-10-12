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

import { prevDate } from "../api/date";

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
  emits: ["location"],
  methods: {
    async handleCoords([lng, lat]) {
      if (lng && lat) {
        this.$emit("location", {lng, lat});

        const yesterday = prevDate(1);
        const lastWeek = prevDate(7);

        const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=721ef4891d454f2385304513211009&q=${lat},${lng}&days=7`);

        const response1 = await axios.get(`http://api.weatherapi.com/v1/history.json?key=721ef4891d454f2385304513211009&q=${lat},${lng}&dt=`+lastWeek);
        this.data_lastweek = response1.data;

        const response2 = await axios.get(`http://api.weatherapi.com/v1/history.json?key=721ef4891d454f2385304513211009&q=${lat},${lng}&dt=`+yesterday);
        this.data_yesterday = response2.data;

        this.data = response.data;
        this.dates = this.data.forecast.forecastday.map(({date}) => date);
        this.temps = this.data.forecast.forecastday.map(({day}) => day.avgtemp_c);
        this.precipitation = this.data.forecast.forecastday.map(({day}) => day.daily_chance_of_rain);

        let last_week_max = parseInt(this.data_lastweek?.forecast?.forecastday[0]?.day?.maxtemp_c);
        let yesterday_max = parseInt(this.data_yesterday?.forecast?.forecastday[0]?.day?.maxtemp_c);
        let today_max = parseInt(this.data?.forecast?.forecastday[0]?.day?.maxtemp_c);

        let last_week_diff = last_week_max - today_max;
        let yesterday_diff = yesterday_max - today_max;

        this.data["last_week_diff"] = last_week_diff;
        this.data["yesterday_diff"] = yesterday_diff;
        this.data["yesterday_max"] = this.data_yesterday?.forecast?.forecastday[0]?.day?.maxtemp_c;
        this.data["last_week_max"] = this.data_lastweek?.forecast?.forecastday[0]?.day?.maxtemp_c;
        this.data["last_week_date"] = this.data_lastweek?.forecast?.forecastday[0]?.date;
        this.data["yesterday_date"] = this.data_yesterday?.forecast?.forecastday[0]?.date;

      }
    }
  }
};
</script>

<style scoped>

</style>
