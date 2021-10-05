<template>

  <div class="card-header">
    <h2>Stars</h2>
  </div>
  <div class="card-body" style="position: relative;">
    <StarWatch @removed="removeStar" :stars="stars" />
    <StarsAvailable @added="addStar" />
  </div>

</template>

<script>

import StarWatch from "@/components/StarWatch";
import StarsAvailable from "@/components/StarsAvailable";

import { starName } from "../util/star";

const STAR_WATCH_KEY = "star-watch";

const set = (stars) => window.localStorage.setItem(STAR_WATCH_KEY, JSON.stringify(stars));

export default {
  name: "Star Watch",

  components: {
    StarWatch,
    StarsAvailable
  },

  data() {
    const stars = JSON.parse(window.localStorage.getItem(STAR_WATCH_KEY) ?? "[]");

    return {
      stars
    };
  },
  methods: {
    addStar(star) {
      console.log("add", starName(star), this.stars);

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
