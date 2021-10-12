<template>
  <div class="row">
    <header class="col">
      <h4> Location: {{ data?.location?.name }} </h4>
    </header>
    <button class="btn btn-outline-warning col-auto mx-3 mb-3 mt-0">
      Favourite
    </button>
    <hr/>
  </div>
  <div>
    <strong> Today: {{ data?.current?.last_updated }} || {{ data?.current?.condition.text }}</strong>
    <p> Temperature (Feels Like): {{ data?.current?.feelslike_c }}&#176; C</p>
    <p> Temperature (Actual): {{ data?.current?.temp_c }}&#176; C</p>
    <hr/>

    <p> Last Week: {{ data?.last_week_date}} || Max Temp: {{ data?.last_week_max}}
    || Last Week was {{ data?.last_week_diff }} C different;</p>

    <p> Yesterday: {{ data?.yesterday_date}} || Max Temp: {{ data?.yesterday_max}}
    || Yesterday was {{ data?.yesterday_diff }} C different; </p>
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
    data: {}
  },
};

</script>
