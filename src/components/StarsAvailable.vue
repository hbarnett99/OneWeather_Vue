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
      stars: [{name:"Mercury",aboveHorizon:true,nakedEyeObject:false},{name:"Venus",aboveHorizon:true,nakedEyeObject:false},{name:"Moon",aboveHorizon:true,nakedEyeObject:false},{name:"Mars",aboveHorizon:true,nakedEyeObject:false},{name:"Jupiter",aboveHorizon:true,nakedEyeObject:false},{name:"Saturn",aboveHorizon:true,nakedEyeObject:false},{name:"Neptune",aboveHorizon:true,nakedEyeObject:false}]
    };
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
