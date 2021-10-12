<template>
  <div>
    <div class="btn-group btn-group-toggle my-3" data-toggle="buttons">
      <button @click="sortName" class="btn btn-secondary">Name</button>
      <button @click="sortVis" class="btn btn-secondary">Visibility</button>
    </div>
    <div style="height:200px;overflow:auto">
      <table class="table">
        <tr :key="starName(star)" v-for="star in stars_">
          <td>
            <Star :star="star" :weather="weather" />
          </td>
          <td class="m-auto">
            <Button :text="text" :id="starName(star)" @btn-click="onClick" class="btn btn-outline-primary"/>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Star from "./Star.vue";
import Button from "./Button.vue";

import { starName, compareName, compareName_, compareVis, compareVis_ } from "../api/star.js";

export default {
  name: 'StarList',
  props: {
    stars: Array,
    weather: Object,
    text: String
  },
  data() {
    return {
      stars_: this.stars
    };
  },
  components: {
    Star,
    Button
  },
  watch: {
    stars() { this.stars_ = this.stars; }
  },
  methods: {
    starName,
    onClick(name) {
      this.$emit('btn-click', this.stars.find((star) => name === starName(star)));
    },
    sortName() {
      this.stars_ = this.stars_.sort(this.nameAsc ? compareName : compareName_);
      this.nameAsc = !this.nameAsc;
    },
    sortVis() {
      this.stars_ = this.stars_.sort(this.visAsc ? compareVis(this.weather) : compareVis_(this.weather));
      this.visAsc = !this.visAsc;
    }
  },
  emits: ["btn-click"]
};
</script>
