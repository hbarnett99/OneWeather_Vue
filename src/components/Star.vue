<template>
  <div>
    Name: {{star.name}}, {{star["above-horizon"] ? "Above" : "Below"}} Horizon
  </div>
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
