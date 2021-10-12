<template>
  <div class="row">
    <header class="col">
      <h4> Weather Station: {{ data?.location?.name }} </h4>
    </header>
    <button @click="$emit('add-favourite', data.location)" class="btn btn-outline-warning col-auto mx-3 mb-3 mt-0">
      Favourite
    </button>
    <hr/>
  </div>
  <div>
    <strong> Today: {{ data?.current?.last_updated }} || {{ data?.current?.condition.text }}</strong>
    <p> Current Temperature (Feels Like): {{ data?.current?.feelslike_c }}&#176;C</p>
    <p> Current Temperature (Actual): {{ data?.current?.temp_c }}&#176;C</p>
    <hr/>

    <p> Yesterday: {{ data?.yesterday_date}} || Max Temp: {{ data?.yesterday_max}}&#176;C
      || Yesterday was {{ data?.yesterday_diff }}&#176;C different; </p>
    <p> Last Week: {{ data?.last_week_date}} || Max Temp: {{ data?.last_week_max}}&#176;C
    || Last Week was {{ data?.last_week_diff }}&#176;C different;</p>
    <hr/>

    <h3> 3-Day Forecast </h3>
    <div v-for="day in data?.forecast?.forecastday" :key="day.message">
       <strong> Date: {{ day.date }} || {{ day?.day?.condition?.text}}</strong>
       <p> Average: {{ day?.day?.avgtemp_c }}&#176;C</p>
       <p> Max: {{ day?.day?.maxtemp_c }}&#176;C</p>
       <p> Precipitation: {{ day?.day?.totalprecip_mm }}mm </p>
       <p class="content-divider"> Chance of rain: {{ day?.day?.daily_chance_of_rain }}% </p>
   </div>
  </div>
</template>

<script>
export default {
  name: "Weather",
  props: {
    data: {}
  },
};

</script>
