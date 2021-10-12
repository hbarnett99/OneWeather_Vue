<template>
  <span>
    Name: {{ starName(star) }}, Visibility ({{ calculateVisibility(star) }} %)
  </span>
</template>

<script>
import { calculateVisibility, starName } from "../api/star";

export default {
  props: {
    star: Object,
    weather: Object,
  },
  methods: {
    calculateVisibility,
    starName
  },
};
</script>

<style>
</style>
