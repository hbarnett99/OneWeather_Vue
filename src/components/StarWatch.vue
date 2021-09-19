<template>
  <div>
    <h1>Watched stars</h1>
    <table :key="star.name" v-for="star in stars">
      <td >
        <Star :star="star" />
        <Button text="Remove" :id="star.name" @btn-click="onClick" />
      </td>
    </table>
  </div>
  <div>
    <StarsAvailable @btn-click="handleWatch" />
  </div>
</template>

<script>
import StarsAvailable from "./StarsAvailable.vue";
import Star from "./Star.vue";
import Button from "./Button.vue";

const STAR_WATCH_KEY = "star-watch";

const set = (stars) => window.localStorage.setItem(STAR_WATCH_KEY, JSON.stringify(stars));

export default {
  name: 'StarWatch',
  components: {
    StarsAvailable,
    Star,
    Button
  },
  data() {
    const stars = JSON.parse(window.localStorage.getItem(STAR_WATCH_KEY) ?? "[]");

    return {
      stars
    };
  },
  methods: {
    handleWatch(star) {
      // Don't add duplicatess
      if (!this.stars.find(({name}) => name == star.name)) {
        this.stars = [...this.stars, star];
        set(this.stars);
      }
    },
    onClick(n) {
      // Remove star with name n
      this.stars = this.stars.filter(({name}) => name != n);
      set(this.stars);
    }
  }
};
</script>
