<template>
  <header>
    <h4> Location: {{ data?.location?.name }} </h4>
    <hr/>
  </header>
  <div>
    <strong> Today: {{ data?.current?.last_updated }} || {{ data?.current?.condition.text }}</strong>

    <p> Last Week: {{ data_lastweek?.forecast?.forecastday[0]?.date}} || Max Temp: {{ data_lastweek?.forecast?.forecastday[0]?.day?.maxtemp_c}}
    || Difference from Today: {{ temp1 }}&#176; C</p>

    <p> Yesterday: {{ data_yesterday?.forecast?.forecastday[0]?.date}} || Max Temp: {{ data_yesterday?.forecast?.forecastday[0]?.day?.maxtemp_c}}
    || Difference from Today: {{ temp2 }}&#176; C </p>
    <hr/>
    <strong> Temperature (Feels Like): {{ data?.current?.feelslike_c }}&#176; C</strong>  <br/>
    <strong> Temperature (Actual): {{ data?.current?.temp_c }}&#176; C</strong>
    <hr/>
    <h3> 3-Day Forecast </h3>
    <div v-for="day in data?.forecast?.forecastday" :key="day.message">
       <strong> Date: {{ day.date }} || {{ day?.day?.condition?.text}}</strong>
       <p> Average: {{ day?.day?.avgtemp_c }}&#176; C</p>
       <p> Max: {{ day?.day?.maxtemp_c }}&#176; C</p>
       <p> Precipitation: {{ day?.day?.totalprecip_mm }}mm </p>
       <p class="content-divider"> Chance of rain: {{ day?.day?.daily_chance_of_rain }}% </p>
   </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    data: {},
    data_lastweek: {},
    data_yesterday: {}
  },
  updated() {
    this.temp1 = (parseInt(this.data?.forecast?.forecastday[0]?.day?.maxtemp_c) - parseInt(this.data_lastweek?.forecast?.forecastday[0]?.day?.maxtemp_c)).toString();
    this.temp2 = (parseInt(this.data?.forecast?.forecastday[0]?.day?.maxtemp_c) - parseInt(this.data_yesterday?.forecast?.forecastday[0]?.day?.maxtemp_c)).toString();
    console.log(this.temp1);
    console.log(this.temp2);
  }
};

</script>
