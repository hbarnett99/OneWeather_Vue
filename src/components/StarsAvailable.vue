<template>
  <div>
    <h5>Stars Available</h5>
    <div style="height:200px;overflow:auto">
      <table :key="starName(star)" v-for="star in stars">
        <td >
          <Star :star="star" :weather="weather" />
          <Button text="Add" :id="starName(star)" @btn-click="onClick" />
        </td>
      </table>
    </div>
  </div>
</template>

<script>
import Star from './Star.vue';
import Button from "./Button.vue";
import { starName } from "../util/star.js";

const STELLAR_URL = "http://localhost:8090/api/objects";

/**
 * Fetch a stellar object
 *
 * @param name Name of stellar object
 * @returns Information of stellar object
 */
async function fetchStellar(name) {
  return await fetch(`${STELLAR_URL}/info?format=json&name=${name}`);
}

export default {
  name: 'StarsAvailable',
  props: {
    weather: Object
  },
  data() {
    return {
      stars: []
    };
  },
  async created() {
    // Fetch names of stellar objects
    const resPlanets = await fetch(`${STELLAR_URL}/listobjectsbytype?type=SolarSystem:planet`);
    const planets = await resPlanets.json();
    const planetsNoEarth = planets.filter(name => name !== "Earth");
    const resStars = await fetch(`${STELLAR_URL}/listobjectsbytype?type=StarMgr`);
    const stars = await resStars.json();

    const objs = [].concat(planetsNoEarth, stars);

    // Fetch information for all stellar objects
    for (const s of objs) {
      const res = await fetchStellar(s);
      const star = await res.json();
      this.stars = [...this.stars, star];
    }
  },
  components: {
    Star,
    Button
  },
  methods: {
    starName,
    onClick(name) {
      this.$emit('added', this.stars.find((star) => name === starName(star)));
    }
  },
  emits: ["added"]
};
</script>
