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
      const { ambientLum, illumination, vmag } = this.star;

      // Cannot see star if it is below horizon
      if (!this.star["above-horizon"]) {
        return "-";
      }

      // Multiplier applied for brightness
      const brightness = (illumination ?? 100) / 100 * this.magnitudeMultiplier(vmag);

      // Ambient light reduces visibility
      const ambient = this.ambientMultiplier(ambientLum);

      const visibility = ambient * brightness * (1 - this.calculateBlockage());

      return visibility.toFixed(2);
    },

    ambientMultiplier(amb) {
      if (amb > 50) return 1;  // TODO: Return 0 when done testing
      return Math.min(1, 1/amb);
    },

    magnitudeMultiplier: function(vmag) {
      if (vmag <= -1) return 100;
      if (vmag > 6.5) return 0;
      return 100 / (vmag + 2);
    },

    calculateBlockage: function() {
      // Don't calculate without weather information
      if (!this.weather) {
        return 0;
      }

      const isDay = !!this.weather.is_day;

      // Assume we can't see stars during day
      if (isDay) {
        // return 0;
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
