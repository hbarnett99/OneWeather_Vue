<script>
import axios from "axios";
// import mapboxgl from "mapbox-gl";
// import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
// import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
export default {
  data() {
    return {
      location: "",
      access_token: 'pk.eyJ1Ijoiem9lcGFya2luc29uIiwiYSI6ImNrbzl2cjI0cTFyejAyd3MybzlxYm0xbnIifQ.iaDU-piT9RAa8qZuFFKeEg',
      coordinates: [],
    };
  },
  methods: {
    async getCoords() {
      let searchLocation = this.$refs.location.value;
      this.$refs.location.value = '';
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchLocation)}.json?access_token=${this.access_token}`
      );
      // [lng,lat]
      console.log(response.data.features[0].geometry.coordinates);
      var coords = response.data.features[0].geometry.coordinates;
      this.coordinates = response.data.features[0].geometry.coordinates;
      alert(coords);
      console.log(this.coordinates);
      alert(this.coordinates);
      this.location = response.data.features[0].place_name;
      console.log(this.location);
    }
  },
};

</script>
  

<template>
   
    <div>
      <input ref = "location" />
      <button
        type="button"
        class="location-btn"
        @click="getCoords"
      >
        Search
      </button>
  </div>

</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

