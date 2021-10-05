<template>
  <div>
    <h5>Watched stars</h5>
    <div style="height:200px;overflow:auto">
      <table :key="starName(star)" v-for="star in stars">
        <td >
          <Star :star="star" />
          <Button text="Remove" :id="starName(star)" @btn-click="onClick" />
        </td>
      </table>
    </div>
  </div>
</template>

<script>
import Star from "./Star.vue";
import Button from "./Button.vue";

import { starName } from "../util/star.js";

export default {
  name: 'StarWatch',
  props: {
    stars: Array
  },
  components: {
    Star,
    Button
  },
  methods: {
    starName,
    onClick(name) {
      this.$emit('removed', this.stars.find((star) => name === starName(star)));
    }
  },
  emits: ["removed"]
};
</script>
