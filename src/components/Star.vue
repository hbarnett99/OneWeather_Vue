<template>
  <span>
    Name: {{ star.name || star.designations }}, Visibility ({{ calculateVisibility() }} %)
  </span>
</template>

<script>
export default {
  props: {
    star: Object,
    weather: Object,
  },
  methods: {
    calculateVisibility: function () {
      const { ambientLum, illumination, aboveHorizon } = this.star;

      // Cannot see star if it is below horizon
      if (!aboveHorizon) {
        return 0;
      }

      return ambientLum * illumination * this.calculateBlockage();
    },

    calculateBlockage: function() {
      const isDay = !!this.weather.is_day;

      // Assume we can't see stars during day
      if (isDay) {
        return 0;
      }

      const {
        will_it_rain,
        chance_of_rain,
        chance_of_snow,
        cloud
      } = this.weather.condition;

      // Chance of it raining or snowing
      const
        snowProb = chance_of_snow/100,
        rainProb = chance_of_rain/100,
        noSnowProb = 1 - snowProb,
        noRainProb = 1 - rainProb,
        rainSnowProb = snowProb * noRainProb + rainProb * noSnowProb,
        chanceOfVisibility = 1 - (will_it_rain || rainSnowProb);

      // Blocking view due to clouds
      const cloudBlock = cloud > 25 ? 1 : cloud/25;

      return cloudBlock * chanceOfVisibility;
    }
  },
};
</script>

<style>
</style>
