<template>
<<<<<<< HEAD
  <header>
    <h1>Weather</h1>
    ---------------------------
  </header>
  <div>
    <h2> Location: {{ data?.location?.name }} </h2>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~

    <h3> Today: {{ data?.current?.last_updated }} || {{ data?.current?.condition.text }}</h3>

    <h3> Last Week: {{ data_lastweek?.forecast?.forecastday[0]?.date}} || Max Temp: {{ data_lastweek?.forecast?.forecastday[0]?.day?.maxtemp_c}}
    || Difference from Today: {{ temp1 }} C </h3>

    <h3> Yesterday: {{ data_yesterday?.forecast?.forecastday[0]?.date}} || Max Temp: {{ data_yesterday?.forecast?.forecastday[0]?.day?.maxtemp_c}}
    || Difference from Today: {{ temp2 }} C </h3>
    ---------------------------
    <h4> Temperature (Feels Like): {{ data?.current?.feelslike_c }} </h4>
    <h4> Temperature (Actual): {{ data?.current?.temp_c }} </h4>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <h3> Forecast </h3>
    ---------------------------
    <div v-for="day in data?.forecast?.forecastday" :key="day.message">
       <h4> Date: {{ day.date }} || {{ day?.day?.condition?.text}}</h4>
       <h4> Average: {{ day?.day?.avgtemp_c }} C</h4>
       <h4> Max: {{ day?.day?.maxtemp_c }} C </h4>
       <h4> Precipitation: {{ day?.day?.totalprecip_mm }} mm </h4>
       <h4> Chance of rain: {{ day?.day?.daily_chance_of_rain }} % </h4>
       ---------------------------
   </div>
   ~~~~~~~~~~~~~~~~~~~~~~~~~~
  </div>
=======
    <header>
      <h4>Location: {{ data?.location?.name }}</h4>
      <hr />
    </header>
    <!-- Note: &#8451; is the HTML code for Celcius-->
    <div>
      <h5>Weather</h5>
      <strong> Today: {{ data?.current?.last_updated }}</strong>
      <p> {{ data?.current?.condition.text }}</p>
      <p> Temperature (Feels Like): {{ data?.current?.feelslike_c }} &#8451;</p>
      <p> Temperature (Actual): {{ data?.current?.temp_c }} &#8451;</p>
      <hr />
      <h5> 3-Day Forecast </h5>
      <div v-for="day in data?.forecast?.forecastday" :key="day.message">
        <strong> Date: {{ day.date }}</strong>
        <p>{{ day?.day?.condition?.text}}</p>
        <p> Average: {{ day?.day?.avgtemp_c }} &#8451;</p>
        <p class="content-divider"> Max: {{ day?.day?.maxtemp_c }} &#8451;</p>
      </div>
    </div>
>>>>>>> origin/Henry
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
