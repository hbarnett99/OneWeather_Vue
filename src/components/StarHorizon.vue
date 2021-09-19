<template>
    <StarList :stars="stars" />
</template>

<script>
import StarList from './StarList.vue';
export default {
  name: 'HorizonStars',
  components: {
    StarList
  },
  data() {
    return {
      stars: [{name:"Mercury",aboveHorizon:true,nakedEyeObject:false},{name:"Venus",aboveHorizon:true,nakedEyeObject:false},{name:"Moon",aboveHorizon:true,nakedEyeObject:false},{name:"Mars",aboveHorizon:true,nakedEyeObject:false},{name:"Jupiter",aboveHorizon:true,nakedEyeObject:false},{name:"Saturn",aboveHorizon:true,nakedEyeObject:false},{name:"Neptune",aboveHorizon:true,nakedEyeObject:false}]
    };
  }
};
</script>
