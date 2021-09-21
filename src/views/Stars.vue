<template>

  <div class="card-header">
    <h2>Stars</h2>
  </div>
  <div class="card-body" style="position: relative;">
    <StarWatch />
  </div>

</template>

<script>

import StarWatch from "@/components/StarWatch";

export default {
  name: "Star Watch",

  components: {
    StarWatch
  },
};
</script>

<style scoped>

</style>