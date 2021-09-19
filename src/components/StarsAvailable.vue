<template>
  <div>
    <h1>Stars</h1>
    <ul :key="star.name" v-for="star in stars">
      <li >
        <Star :star="star" />
        <Button text="Add" :id="star.name" @btn-click="onClick" />
      </li>
    </ul>
  </div>
</template>

<script>
import Star from './Star.vue';
import Button from "./Button.vue";

export default {
  name: 'StarsAvailable',
  data() {
    return {
      stars: []
    };
  },
  async created() {
    const res = await fetch("http://localhost:8090/api/objects/listobjectsbytype?type=SolarSystem:planet");
    const stars = await res.json();
    this.stars = stars.map((name) => ({name}));
  },
  components: {
    Star,
    Button
  },
  methods: {
    onClick(name) {
      this.$emit('btn-click', this.stars.find((s) => s.name == name));
    }
  },
  emits: ["btn-click"]
};
</script>
