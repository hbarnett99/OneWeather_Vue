<template>
    <h6>Weather measured by the Curosity Rover on Mars </h6>
    <p> The weather is updated once each month with the data for the previous 31 days </p>
    <br>
    <img :src="`${this.marsPhoto}`" scrolling='no' frameborder='0' alt="image of Mars taken by the curosity rover">
    <br>
    <br>
    <h3> Past 31 days </h3>
      <div style="height:350px;overflow:auto">
        <!-- <p> {{weatherData}} </p> -->
            <div v-for="day in weather"  :key="day">
             <strong> Sol: {{day.sol}} </strong>
             <p> Date: {{day.date}} </p>
             <p> Minimum temperature: {{day.minTemp}}&#176; C </p>
             <p> Maximum temperature: {{day.maxTemp}}&#176; C </p>
             <br>
           </div>
    </div>
    <br>
    <strong> Weekly average minimum temperature: {{averageMin}}&#176; C </strong>
    <br>
    <strong> Weekly average maximum temperature: {{averageMax}}&#176; C </strong>
    <div class="card-body" style="position: relative;">
      <MarsChart :dates="dates" :mintemp="minTemps" :maxtemp="maxTemps"/>
    </div>

</template>

<script>
import axios from "axios";
import MarsChart from '../components/MarsChart.vue';
export default {
  name: "Mars",

  components: {
    MarsChart
  },
  data() {
    return {
      apiKey: 'Hwaa1ehssKfFrLR2UKZbKxgm0vvPSXbg8ZvHSmf5',
      dates: [""],
      minTemps: [],
      maxTemps: [],
      latestSol: "",
      averageMin: 0,
      averageMax: 0,
      marsPhoto: "",
      weather: []
    };
  },
  created(){
    this.mars();
    
  },
  methods: {
    async mars() {
      const response = await axios.get(
        `https://api.maas2.apollorion.com/`
      );
      this.latestSol = response.data.sol;
      this.getPastWeather();
    },
    async getPastWeather(){
      var sol = this.latestSol;
      for(let i = 0; i < 30; i++){
        // this.WeeklySols.push(this.latestSol - i);
        // for Weekly days
        const response = await axios.get(
          `https://api.maas2.apollorion.com/${sol}`
        );
        sol = sol - 1;
        this.dates.push(response.data.terrestrial_date.substring(0,10));
        this.minTemps.push(response.data.min_temp);
        this.maxTemps.push(response.data.max_temp);
        this.weather[i] = {sol: response.data.sol, 
          date: response.data.terrestrial_date.substring(0,10), 
          minTemp: response.data.min_temp, 
          maxTemp: response.data.max_temp};
 
      }
      this.getPhoto();
      this.getAverage();
    },
    getAverage(){
      for (let i=0; i < 30;  i++){
        this.averageMin =  this.averageMin + this.weather[i].minTemp;
        this.averageMax =  this.averageMax + this.weather[i].maxTemp;
      }
      this.averageMin = (this.averageMin/31).toFixed(2);
      this.averageMax = (this.averageMax/31).toFixed(2);
    },
    async getPhoto(){
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.weather[0].date}&api_key=${this.apiKey}`
      );
      // maybe change to get random photo from date
      this.marsPhoto = response.data.photos[8].img_src;
    }
  }
};




</script>

<style scoped>
img{
  max-width: 100%;
  border-radius: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>