<template>

      <div class="map-holder">
        <!-- <button
        type="button"
        class="location-btn"
        @click="createMap"
      >Search by map
      </button> -->
       <div id="map"></div>
      </div>
    
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

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line no-unused-vars
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
export default {
  data() {
    return {
      location: "",
      access_token: 'pk.eyJ1Ijoiem9lcGFya2luc29uIiwiYSI6ImNrbzl2cjI0cTFyejAyd3MybzlxYm0xbnIifQ.iaDU-piT9RAa8qZuFFKeEg',
      coordinates: [],
      center: [144.9671,-37.8183],
      map: {},
    };
  },
  mounted(){
    console.log("create map");
    this.createMap();
  },
  methods: {
    async createMap(){
      console.log("======== map =========");
      mapboxgl.accessToken = this.access_token;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: this.center,
        zoom: 11,
      });
      this.map.on('click', (response) => {
        // const lat = e.lngLat.lat;
        // const lng = e.lngLat.lng;
        const coordinates = [response.lngLat.lng,response.lngLat.lat];
 
        // var marker = new mapboxgl.Marker({ "color": "#FF8C00" });
        // marker.setLngLat(coordinates);
        // marker.addTo(this.map);
        this.map.flyTo({
          center: coordinates
        });
        this.$emit('coords-fetch', coordinates);

      });

    },
    async getCoords() {
      let searchLocation = this.$refs.location.value;
      this.$refs.location.value = '';
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchLocation)}.json?access_token=${this.access_token}`
      );
      // [lng,lat]
      const coordinates = response.data.features[0].geometry.coordinates;
      console.log(this.map, "===================");
      if (this.map){
        // var marker = new mapboxgl.Marker({ "color": "#FF8C00" });
        // marker.setLngLat(coordinates);
        // marker.addTo(this.map);
        this.map.flyTo({
          center: coordinates
        });
      }
      this.$emit('coords-fetch', coordinates);
    }
  },
  emits: ['coords-fetch']
};

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .map-holder {
  width: 65%;
}
#map {
  height: 70vh;
} */
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
