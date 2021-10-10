<template>
  <div>
    <h5>Stars Available</h5>
    <button @click="sortName">Name</button><button @click="sortVis">Visibility</button>
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
import { starName, compareName, compareName_, compareVis, compareVis_ } from "../api/star.js";

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
      stars: [],
      nameAsc: false,
      visAsc: false,
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
    },
    sortName() {
      this.stars = this.stars.sort(this.nameAsc ? compareName : compareName_);
      this.nameAsc = !this.nameAsc;
    },
    sortVis() {
      this.stars = this.stars.sort(this.visAsc ? compareVis(this.weather) : compareVis_(this.weather));
      this.visAsc = !this.visAsc;
    }
  },
  emits: ["added"]
};
</script>
