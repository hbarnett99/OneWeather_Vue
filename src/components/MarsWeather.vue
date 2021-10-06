<template>
    <h6>Weather measured by the Curosity Rover on Mars </h6>
       <p> Sol: {{ latestSol }} </p>
       <p> Earth day: {{ latestDate }} </p>
       <p> Minimum Temperature: {{ latestMinTemp }}&#176; C </p>
       <p> Maximum Temperature: {{ latestMaxTemp }}&#176; C </p>
    <br>
    <br>
    <h3> Past 7 days </h3>
      <div style="height:200px;overflow:auto">
    <p> Sol: {{previousSols[0]}} </p>
    <p> Date: {{previousDays[0]}} </p>
    <p> Minimum temperature: {{previousMinTemp[0]}}&#176; C </p>
    <p> Maximum temperature: {{previousMaxTemp[0]}}&#176; C </p>
    <br>
    <p> Previous sol: {{previousSols[1]}} </p>
    <p> Date: {{previousDays[1]}} </p>
    <p> Minimum temperature: {{previousMinTemp[1]}}&#176; C </p>
    <p> Maximum temperature: {{previousMaxTemp[1]}}&#176; C </p>
    <br>
    <p> Previous sol: {{previousSols[2]}} </p>
    <p> Date: {{previousDays[2]}} </p>
    <p> Previous  in temp: {{previousMinTemp[2]}}&#176; C </p>
    <p> Maximum temperature: {{previousMaxTemp[2]}}&#176; C </p>
    <br>
    <p> Previous sol: {{previousSols[3]}} </p>
    <p> Date: {{previousDays[3]}} </p>
    <p> Minimum temperature: {{previousMinTemp[3]}}&#176; C </p>
    <p> Maximum temperature: {{previousMaxTemp[3]}}&#176; C </p>
    <br>
    <p> Previous sol: {{previousSols[4]}} </p>
    <p> Date: {{previousDays[4]}} </p>
    <p> Minimum temperature: {{previousMinTemp[4]}}&#176; C </p>
    <p> Maximum temperature: {{previousMaxTemp[4]}}&#176; C </p>
    <br>
    <p> Previous sol: {{previousSols[5]}} </p>
    <p> Date: {{previousDays[5]}} </p>
    <p> Minimum temperature: {{previousMinTemp[5]}}&#176; C </p>
    <p> Maximum temperature: {{previousMaxTemp[5]}}&#176; C </p>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      latestSol: "",
      latestDate: "",
      latestMinTemp: "",
      latestMaxTemp: "",
      previousSols: [],
      previousDays: [],
      previousMinTemp: [],
      previousMaxTemp: [],
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
      // for previous days
      // const response = await axios.get(
      //   `https://api.maas2.apollorion.com/${sol}`
      // );
      this.latestSol = response.data.sol;
      this.latestDate = response.data.terrestrial_date.substring(0,10);
      this.latestMinTemp = response.data.min_temp;
      this.latestMaxTemp = response.data.max_temp;
      this.getPastWeather();
    },
    async getPastWeather(){
      for(let i = 1; i < 7; i++){
        this.previousSols.push(this.latestSol - i);
        // for previous days
        const response = await axios.get(
          `https://api.maas2.apollorion.com/${this.latestSol - i}`
        );
        this.previousDays.push(response.data.terrestrial_date.substring(0,10));
        this.previousMinTemp.push(response.data.min_temp);
        this.previousMaxTemp.push(response.data.max_temp); 
      }
    }
  }
};
</script>
