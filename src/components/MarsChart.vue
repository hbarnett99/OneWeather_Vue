<template>
  <div class="example">
    <apexcharts height="350" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";

export default {
  name: 'MarsChart',
  components: {
    apexcharts: VueApexCharts,
  },
  props: {
    dates: Array,
    mintemp: Array,
    maxtemp: Array
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'barChart',
          type: 'line'
        },
        xaxis: {
          categories: this.dates,
          text: 'Date'
        },
        yaxis: [{
          title: {
            text: 'Temperature'
          }
        }], 
        dataLabels: {
          enabled: true,
        },
        title: {
          text: 'Temperature for the past 7 days'
        }
      },
      series: [{
        name: 'Minimum Temperature(°C)',
        type: 'line',
        data: this.mintemp
      },{
        name: 'Maximum Temperautre (°C)',
        type: 'line',
        data: this.maxtemp
      }]
    };
  },
  watch: {
    dates() {
      this.updateChart();
    },
    mintemp() {
      this.series[0].data = this.mintemp;
    },
    maxtemp() {
      this.series[2].data = this.maxtemp;

    }
  },
  methods: {
    //Update the value of x-axis (default: 1, 2, 3 ...) to dates
    updateChart() {
      this.chartOptions = {
        xaxis: {
          categories: this.dates
        }
      };
    }
  }
};
</script>
