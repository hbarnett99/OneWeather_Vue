<template>
  <div>
    <h1>Stars</h1>
    <div style="height:200px;overflow:auto">
      <table :key="star.name + star.designations ?? ''" v-for="star in stars">
        <td >
          <Star :star="star" />
          <Button text="Add" :id="star.name + star.designations ?? ''" @btn-click="onClick" />
        </td>
      </table>
    </div>
  </div>
</template>

<script>
import Star from './Star.vue';
import Button from "./Button.vue";

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
  data() {
    return {
      stars: []
    };
  },
  async created() {
    // Fetch names of stellar objects
    const resPlanets = await fetch(`${STELLAR_URL}/listobjectsbytype?type=SolarSystem:planet`);
    const planets = await resPlanets.json();
    const resStars = await fetch(`${STELLAR_URL}/listobjectsbytype?type=StarMgr`);
    const stars = await resStars.json();

    const objs = [].concat(planets, stars);

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
    onClick(name) {
      console.log(name, this.stars);
      this.$emit('btn-click', this.stars.find((star) => name === star.name + star.designations ?? ''));
    }
  },
  emits: ["btn-click"]
};
</script>
