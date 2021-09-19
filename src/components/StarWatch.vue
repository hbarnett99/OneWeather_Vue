<template>
  <div>
    <StarsAvailable @btn-click="handleWatch" />
  </div>
  <div>
    <h1>Watched stars</h1>
    <ul :key="star.name" v-for="star in stars">
      <li >
        <Star :star="star" />
      </li>
    </ul>
  </div>
</template>

<script>
import StarsAvailable from "./StarsAvailable.vue";
import Star from "./Star.vue";

const STAR_WATCH_KEY = "star-watch";

export default {
  name: 'StarWatch',
  components: {
    StarsAvailable,
    Star
  },
  data() {
    const stars = JSON.parse(window.localStorage.getItem(STAR_WATCH_KEY) ?? "[]");

    return {
      stars
    };
  },
  methods: {
    handleWatch(star) {
      this.stars = [...this.stars, star];
      window.localStorage.setItem(STAR_WATCH_KEY, JSON.stringify(this.stars));
    }
  }
};
</script>
