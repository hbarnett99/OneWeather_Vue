<template>
  <div class="example">
    <apexcharts width="600" height="400" :options="chartOptions" :series="series"></apexcharts>
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
    temps: Array,
    precipitation: Array
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'barChart',
          type: 'line'
        },
        xaxis: {
          categories: this.dates
        },
        yaxis: [{
          title: {
            text: 'Temperature'
          }
        },{
          opposite:true,
          title: {
            text: 'Precipitation Chance'
          }
        }],
        dataLabels: {
          enabled: true,
        },
        title: {
          text: 'Forcast of temperature and precipitation chance'
        }
      },
      series: [{
        name: 'Temperature(*C)',
        type: 'column',
        data: this.temps
      },{
        name: 'Chance of rain(%)',
        type: 'line',
        data: this.precipitation
      }]
    };
  },
  watch: {
    dates() {
      this.updateChart();
    },
    temps() {
      this.series[0].data = this.temps;
    },
    precipitation() {
      this.series[1].data = this.precipitation;
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
