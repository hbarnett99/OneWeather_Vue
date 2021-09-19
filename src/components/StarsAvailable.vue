<template>
  <div>
    <h1>Stars</h1>
    <table :key="star.name" v-for="star in stars">
      <td >
        <Star :star="star" />
        <Button text="Add" :id="star.name" @btn-click="onClick" />
      </td>
    </table>
  </div>
</template>

<script>
import Star from './Star.vue';
import Button from "./Button.vue";

/**
 * Fetch a star
 *
 * @param name Name of stellar object
 * @returns Information of star
 */
async function fetchStar(name) {
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
    const res = await fetch("http://localhost:8090/api/objects/listobjectsbytype?type=SolarSystem:planet");
    const stars = await res.json();
    for (const s of stars) {
      const res = await fetchStar(s);
      const star = await res.json();
      this.stars = [...this.stars, star];
      console.log(star);
    }
  },
  components: {
    Star,
    Button
  },
  methods: {
    onClick(name) {
      this.$emit('btn-click', this.stars.find((s) => s.name == name));
    }
  },
  emits: ["btn-click"]
};
</script>
