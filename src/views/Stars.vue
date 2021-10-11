<template>

  <div class="card-header">
    <h2>Stars</h2>
  </div>
  <div class="card-body" style="position: relative;">
    <div>
      <h5>Watched stars</h5>
      <StarList @btn-click="removeStar" :stars="stars_" :weather="weather" text="Remove" />
    </div>
    <div>
      <h5>Available stars</h5>
      <StarList @btn-click="addStar" :stars="stars"  :weather="weather" text="Add" />
    </div>
  </div>

</template>

<script>
import axios from "axios";

import StarList from "@/components/StarList";

import { starName, fetchStellar, fetchPlanetNames, fetchStarNames, moveLocation } from "../api/star";
import { currentDate } from "../api/date";

const STAR_WATCH_KEY = "star-watch";

/**
 * Set names of stars in localStorage
 *
 * @param {object[]} stars Stars
 * @returns void
 */
const set = (stars) =>
  window.localStorage.setItem(STAR_WATCH_KEY, JSON.stringify(stars.map(starName)));

export default {
  name: "Stars",

  props: {
    latitude: Number,
    longitude: Number,
  },

  components: {
    StarList
  },

  data() {
    // Retrieve stars from storage
    /** @type {string[]} */
    const names = JSON.parse(window.localStorage.getItem(STAR_WATCH_KEY) ?? "[]");

    return {
      names,
      stars: [],
      stars_: [],
      weather: null
    };
  },

  async created() {
    // Default to Monash University Clayton
    const lat = this.latitude ?? -37.914;
    const long = this.longitude ?? 145.132;

    // Weather at the current time
    const res = await axios.get(`http://api.weatherapi.com/v1/history.json?key=721ef4891d454f2385304513211009&q=${lat},${long}&dt=` + currentDate());
    const hourWeather = res.data.forecast.forecastday[0].hour;

    this.weather = hourWeather.find(({ time_epoch }) => Math.abs(time_epoch - Date.now()) < 3600);

    // Move to location
    await moveLocation(lat, long);

    // Fetch star names
    const planets = (await fetchPlanetNames()).filter((s) => s != "Earth");
    const stars = await fetchStarNames();
    const names = [...planets,  ...stars];

    // Fetch star objects
    for (const name of names) {
      const stellar = await fetchStellar(name);
      this.stars = [...this.stars, stellar];

      // Check watched
      if (this.names.includes(name)) {
        this.stars_ = [...this.stars_, stellar];
      }
    };
  },

  methods: {
    moveLocation,
    addStar(star) {
      // Don't add duplicates
      if (!this.stars_.find(({ name }) => name === starName(star))) {
        this.stars_ = [...this.stars_, star];
        set(this.stars_);
      }
    },
    removeStar(star) {
      // Remove star with name n
      this.stars_ = this.stars_.filter((s) => starName(star) != starName(s));
      set(this.stars_);
    }
  }
};
</script>

<style scoped>

</style>
