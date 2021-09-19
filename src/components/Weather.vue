<template>
  <header>
    <h1>Weather</h1>
    ---------------------------
  </header>
  <div>
    <h2> Location: {{ data?.location?.name }} </h2>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <h3> Today: {{ data?.current?.last_updated }}</h3>
    <h3> {{ data?.current?.condition.text }}</h3>
    ---------------------------
    <h4> Temperature (Feels Like): {{ data?.current?.feelslike_c }} </h4>
    <h4> Temperature (Actual): {{ data?.current?.temp_c }} </h4>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <h3> Forecast </h3>
    ---------------------------
    <div v-for="day in data?.forecast?.forecastday" :key="day.message">
       <h4> Date: {{ day.date }} || {{ day?.day?.condition?.text}}</h4>
       <h4> Average: {{ day?.day?.avgtemp_c }} </h4>
       <h4> Max: {{ day?.day?.maxtemp_c }} </h4>
       ---------------------------
   </div>
   ~~~~~~~~~~~~~~~~~~~~~~~~~~
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
