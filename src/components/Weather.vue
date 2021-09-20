<template>
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
</template>

<script>
export default {
  name: "Weather",
  props: {
    data: {}
  },
};

</script>
