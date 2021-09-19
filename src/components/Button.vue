<template>
    <button type="button" @click="this.$emit('btn-click')">{{name}}</button>
</template>

<script>
export default {
  props: {
    name: String
  },
  emits: ["btn-click"]
};
</script>
