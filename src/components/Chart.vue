<template>
  <div class="example">
    <apexcharts width="500" height="350" type="bar" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'DemoChart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: ["03/09", "04/09", "05/09", "06/09", "07/09", "08/09", "09/09"]
        }
      },
      series: [{
        name: 'Temperature',
        data: [23, 17, 15, 13, 20, 23, 25]
      }]
    };
  },
};
</script>