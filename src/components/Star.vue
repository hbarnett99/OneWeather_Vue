<template>
  <span>
    Name: {{star.name}}, {{star["above-horizon"] ? "Above" : "Below"}} Horizon
  </span>
</template>

<script>
export default {
  props: {
    star: Object
  }
};
</script>

<style>

</style>
