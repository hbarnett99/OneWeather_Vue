<template>

  <div class="card-header m-0">
    <h2>Weather</h2>
  </div>
  <div class="card-body" style="position: relative;">
    <SearchCoords @coords-fetch="handleCoords" />
  </div>
  <div v-if="data?.location?.name != null">
    <div class="card-body" style="position: relative;">
      <Weather :data="data" />
    </div>
    <div class="card-body" style="position: relative;">
      <DemoChart :dates="dates" :temps="temps"/>
    </div>
  </div>

</template>

<script>
import SearchCoords from "@/components/SearchCoords";
import Weather from "@/components/Weather";
import DemoChart from "@/components/Chart";
import axios from "axios";

export default {
  name: "home",
  components: {
    SearchCoords,
    Weather,
    DemoChart,
  },
  data() {
    return {
      data: {},
      dates: [],
      temps: []
    };
  },
  methods: {
    handleCoords([lng, lat]) {

      console.log(lat, lng);
      if (lng && lat)
        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=721ef4891d454f2385304513211009&q=${lat},${lng}&days=7`)
            .then(response => {
              this.data = response.data;
              this.dates = this.data.forecast.forecastday.map(({date}) => date);
              this.temps = this.data.forecast.forecastday.map(({day}) => day.avgtemp_c);
              console.log(this.dates);
              console.log(this.temps);
              console.log(this.data.forecast.forecastday);
            });

    }
  }
};
</script>

<style scoped>

</style>