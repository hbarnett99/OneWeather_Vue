<template>
  <div class="example">
    <apexcharts height="600" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
// similar to Chart.vue has been changed to fit the Mars weather data
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
          text: 'Temperature for the past 30 days'
        }
      },
      series: [{
        name: 'Minimum Temperature (°C)',
        type: 'line',
        data: this.mintemp
      },{
        name: 'Maximum Temperature (°C)',
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
      // sets the given data to be able to be displayed
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
      console.log("this.dates");
    }
  }
};
</script>
