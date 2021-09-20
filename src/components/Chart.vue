<template>
  <div class="example">
    <apexcharts height="350" type="bar" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'DemoChart',
  components: {
    apexcharts: VueApexCharts,
  },
  props: {
    dates: Array,
    temps: Array
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'basic-bar'
        },
        xaxis: {
          categories: this.dates
        }
      },
      series: [{
        name: 'Temperature',
        data: this.temps
      }]
    };
  },
  watch: {
    dates() {
      this.chartOptions.xaxis.categories = this.dates;
    },
    temps() {
      this.series[0].data = this.temps;
    }
  }
};
</script>
