<template>

  <div class="card-header">
    <h2>Stars</h2>
  </div>
  <div class="card-body" style="position: relative;">
    <HorizonStars />
  </div>

</template>

<script>

import HorizonStars from "@/components/HorizonStars";

export default {
  name: "Stars",

  components: {
    HorizonStars
  },
};
</script>

<style scoped>

</style>