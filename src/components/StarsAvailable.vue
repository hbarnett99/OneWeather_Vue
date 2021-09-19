<template>
  <div>
    <h1>Stars</h1>
    <table :key="star.name + star.designations ?? ''" v-for="star in stars">
      <td >
        <Star :star="star" />
        <Button text="Add" :id="star.name + star.designations ?? ''" @btn-click="onClick" />
      </td>
    </table>
  </div>
</template>

<script>
import Star from './Star.vue';
import Button from "./Button.vue";

/**
 * Fetch a stellar object
 *
 * @param name Name of stellar object
 * @returns Information of stellar object
 */
async function fetchStellar(name) {
  return await fetch(`http://localhost:8090/api/objects/info?format=json&name=${name}`);
}

export default {
  name: 'StarsAvailable',
  data() {
    return {
      stars: []
    };
  },
  async created() {
    const resPlanets = await fetch("http://localhost:8090/api/objects/listobjectsbytype?type=SolarSystem:planet");
    const planets = await resPlanets.json();
    const resStars = await fetch("http://localhost:8090/api/objects/listobjectsbytype?type=NebulaMgr:4");
    const stars = await resStars.json();

    const objs = [].concat(planets, stars);

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
