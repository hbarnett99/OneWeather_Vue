<template>
    <h6>Weather measured by the Curosity Rover on Mars </h6>
    <p> The weather is updated once each week with the data for the previous 7 days </p>
    <br>
    <img :src="`${this.marsPhoto}`" width='650' height='350'  scrolling='no' frameborder='0'>
    <br>
    <br>
    <h3> Past 7 days </h3>
      <div style="height:350px;overflow:auto">
    <strong> Sol: {{WeeklySols[0]}} </strong>
    <p> Date: {{WeeklyDays[0]}} </p>
    <p> Minimum temperature: {{WeeklyMinTemp[0]}}&#176; C </p>
    <p> Maximum temperature: {{WeeklyMaxTemp[0]}}&#176; C </p>
    <br>
    <strong> Sol: {{WeeklySols[1]}} </strong>
    <p> Date: {{WeeklyDays[1]}} </p>
    <p> Minimum temperature: {{WeeklyMinTemp[1]}}&#176; C </p>
    <p> Maximum temperature: {{WeeklyMaxTemp[1]}}&#176; C </p>
    <br>
    <strong> Sol: {{WeeklySols[2]}} </strong>
    <p> Date: {{WeeklyDays[2]}} </p>
    <p> Weekly  in temp: {{WeeklyMinTemp[2]}}&#176; C </p>
    <p> Maximum temperature: {{WeeklyMaxTemp[2]}}&#176; C </p>
    <br>
    <strong> Sol: {{WeeklySols[3]}} </strong>
    <p> Date: {{WeeklyDays[3]}} </p>
    <p> Minimum temperature: {{WeeklyMinTemp[3]}}&#176; C </p>
    <p> Maximum temperature: {{WeeklyMaxTemp[3]}}&#176; C </p>
    <br>
    <strong> Sol: {{WeeklySols[4]}} </strong>
    <p> Date: {{WeeklyDays[4]}} </p>
    <p> Minimum temperature: {{WeeklyMinTemp[4]}}&#176; C </p>
    <p> Maximum temperature: {{WeeklyMaxTemp[4]}}&#176; C </p>
    <br>
    <strong> Sol: {{WeeklySols[5]}} </strong>
    <p> Date: {{WeeklyDays[5]}} </p>
    <p> Minimum temperature: {{WeeklyMinTemp[5]}}&#176; C </p>
    <p> Maximum temperature: {{WeeklyMaxTemp[5]}}&#176; C </p>
    <br>
    <strong> Sol: {{WeeklySols[6]}} </strong>
    <p> Date: {{WeeklyDays[6]}} </p>
    <p> Minimum temperature: {{WeeklyMinTemp[6]}}&#176; C </p>
    <p> Maximum temperature: {{WeeklyMaxTemp[6]}}&#176; C </p>
    </div>
    <br>
    <strong> Weekly average minimum temperature: {{averageMin}}&#176; C </strong>
    <br>
    <strong> Weekly average maximum temperature: {{averageMax}}&#176; C </strong>

    <div class="card-body" style="position: relative;">
      <MarsChart :dates="WeeklyDays" :mintemp="WeeklyMinTemp" :maxtemp="WeeklyMaxTemp"/>
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
      latestSol: "",
      latestDate: "",
      latestMinTemp: "",
      latestMaxTemp: "",
      WeeklySols: [],
      WeeklyDays: [],
      WeeklyMinTemp: [],
      WeeklyMaxTemp: [],
      averageMin: 0,
      averageMax: 0,
      marsPhoto: ""
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
      this.latestDate = response.data.terrestrial_date.substring(0,10);
      this.latestMinTemp = response.data.min_temp;
      this.latestMaxTemp = response.data.max_temp;
      this.getPhoto();
      this.getPastWeather();
    },
    async getPastWeather(){
      this.WeeklySols.push(this.latestSol);
      this.WeeklyDays.push(this.latestDate);
      this.WeeklyMinTemp.push(this.latestMinTemp);
      this.WeeklyMaxTemp.push(this.latestMaxTemp);
      for(let i = 1; i < 7; i++){
        this.WeeklySols.push(this.latestSol - i);
        // for Weekly days
        const response = await axios.get(
          `https://api.maas2.apollorion.com/${this.latestSol - i}`
        );
        this.WeeklyDays.push(response.data.terrestrial_date.substring(0,10));
        this.WeeklyMinTemp.push(response.data.min_temp);
        this.WeeklyMaxTemp.push(response.data.max_temp);  
      }
      this.getAverage();
    },
    getAverage(){
      for (let i=0; i < 7;  i++){
        this.averageMin =  this.averageMin + this.WeeklyMinTemp[i];
        this.averageMax =  this.averageMax + this.WeeklyMaxTemp[i];
      }
      this.averageMin = (this.averageMin/7).toFixed(2);
      this.averageMax = (this.averageMax/7).toFixed(2);
    },
    async getPhoto(){
      const response = await axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${this.latestDate}&api_key=${this.apiKey}`
      );
      // maybe change to get random photo from date
      this.marsPhoto = response.data.photos[0].img_src;
    }
  }
};




</script>
