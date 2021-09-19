<template>
    <button @click="onClick()">{{text}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    id: String
  },
  methods: {
    onClick() {
      this.$emit("btn-click", this.id);
    }
  },
  emits: ["btn-click"]
};
</script>
