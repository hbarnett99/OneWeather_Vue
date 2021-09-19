<template>
  <div>
    <StarsAvailable />
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
export default {
  name: 'StarWatch',
  components: {
    StarsAvailable
  },
  data() {
    return {
      stars: []
    };
  }
};
</script>
