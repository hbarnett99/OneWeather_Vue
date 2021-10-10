<template>
  <span>
    Name: {{ star.name || star.designations }}, Visibility ({{ calculateVisibility(star) }} %)
  </span>
</template>

<script>
import { calculateVisibility } from "../api/star";

export default {
  props: {
    star: Object,
    weather: Object,
  },
  methods: {
    calculateVisibility
  },
};
</script>

<style>
</style>
