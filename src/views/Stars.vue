<template>

  <div class="card-header">
    <h2>Stars</h2>
  </div>
  <div class="card-body" style="position: relative;">
    <StarWatch @removed="removeStar" :stars="stars" :weather="weather" />
    <StarsAvailable @added="addStar" :weather="weather" />
  </div>

</template>

<script>
import axios from "axios";

import StarWatch from "@/components/StarWatch";
import StarsAvailable from "@/components/StarsAvailable";

import { starName } from "../util/star";
import { currentDate } from "../util/date";

const STAR_WATCH_KEY = "star-watch";

const set = (stars) => window.localStorage.setItem(STAR_WATCH_KEY, JSON.stringify(stars));

export default {
  name: "Star Watch",

  components: {
    StarWatch,
    StarsAvailable
  },

  data() {
    // Retrieve stars from storage
    const stars = JSON.parse(window.localStorage.getItem(STAR_WATCH_KEY) ?? "[]");

    return {
      stars,
      weather: null
    };
  },

  async created() {
    // Weather at the current time
    const res = await axios.get(`http://api.weatherapi.com/v1/history.json?key=721ef4891d454f2385304513211009&q=-37.91063,145.13360699999998&dt=` + currentDate());
    const hourWeather = res.data.forecast.forecastday[0].hour;

    this.weather = hourWeather.find(({ time_epoch }) => Math.abs(time_epoch - Date.now()) < 3600);
  },

  methods: {
    addStar(star) {
      console.log(star, this.stars);

      // Don't add duplicates
      if (!this.stars.find(({ name }) => name === starName(star))) {
        this.stars = [...this.stars, star];
        set(this.stars);
      }
    },
    removeStar(n) {
      // Remove star with name n
      this.stars = this.stars.filter((star) => n != starName(star));
      set(this.stars);
    }
  }
};
</script>

<style scoped>

</style>
