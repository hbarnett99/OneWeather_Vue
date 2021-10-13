<template>
    <h6>Weather measured by the Curosity Rover on Mars </h6>
    <p> The weather is updated once each month with the data for the previous 30 days </p>
    <br>
    <img :src="`${this.marsPhoto}`" scrolling='no' frameborder='0' alt="image of Mars taken by the Curosity Rover">
    <br>
    <br>
    <h3> Past 30 days </h3>
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
    <strong> Monthly average minimum temperature: {{averageMin}}&#176; C </strong>
    <br>
    <strong> Monthly average maximum temperature: {{averageMax}}&#176; C </strong>
    <!-- displays a chart of the weather information -->
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
      // initialise variables that will be used
      apiKey: 'Hwaa1ehssKfFrLR2UKZbKxgm0vvPSXbg8ZvHSmf5',
      dates: [""],
      minTemps: [],
      maxTemps: [],
      latestSol: "",
      latestDate: "",
      averageMin: Number,
      averageMax: Number,
      marsPhoto: "",
      weather: []
    };
  },
  created(){
    // calls the mars method to get the most recent sol 
    this.mars();
    
    
  },
  methods: {
    async mars() {
      // gets data for the most recent sol on Mars that has the weather information available 
      const response = await axios.get(
        `https://api.maas2.apollorion.com/`
      );
      // gets the sol value for the most recent sol on Mars
      this.latestSol = response.data.sol;
      this.lastestDate = response.data.terrestrial_date.substring(0,10);
      // calls the function to get the previous weather on Mars and the photo that is displayed
      this.getPhoto();
      this.getPastWeather();
    },
    async getPastWeather(){
      var sol = this.latestSol;
      // loops
      for(let i = 0; i < 30; i++){
        const response = await axios.get(
          `https://api.maas2.apollorion.com/${sol}`
        );
        // decreases the sol to go back for the past 30 days
        sol = sol - 1;
        // gets the Earth date from the api call, this used for the chart
        this.dates.push(response.data.terrestrial_date.substring(0,10));
        // gets the min temp from the api call, this used for the chart
        this.minTemps.push(response.data.min_temp);
        // gets the max temp from the api call, this used for the chart
        this.maxTemps.push(response.data.max_temp);
        // adds the information into an object containing all the day, this is used for display
        this.weather[i] = {sol: response.data.sol, 
          date: response.data.terrestrial_date.substring(0,10), 
          minTemp: response.data.min_temp, 
          maxTemp: response.data.max_temp};
 
      }
      this.getAverage();
    },
    getAverage(){
      // calculates the monthly average
      this.averageMin =  this.weather[0].minTemp;
      this.averageMax =  this.weather[0].maxTemp;
      for (let i=1; i < 30;  i++){
        // loops through all the weather data summing all the values
        this.averageMin =  this.averageMin + this.weather[i].minTemp;
        this.averageMax =  this.averageMax + this.weather[i].maxTemp;
      }
      // divides by the total number of days to get the average
      this.averageMin = (this.averageMin/30).toFixed(2);
      this.averageMax = (this.averageMax/30).toFixed(2);
    },
    async getPhoto(){
      // uses a NASA api to get a photo take on Mars by the rover from the most recent date
      // this image is displayed on the webpage
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.lastestDate}&api_key=${this.apiKey}`
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