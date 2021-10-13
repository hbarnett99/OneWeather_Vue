<template>

  <div class="row px-4">
    <input ref = "location" placeholder="Location" class="dataTable-input form-control form-control-sm w-75 col" @submit="getCoords"/>
    <button
      type="button"
      class="location-btn btn btn-outline-secondary btn-sm mx-2 col-auto"
      @click="getCoords"
    >
      Search
    </button>
  </div>

  <div class="map-holder m-3">
    <div id="map"></div>
  </div>

</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";


import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
export default {
  props: {
    favCoords: Array
  },
  data() {
    return {
      location: "",
      access_token: 'pk.eyJ1Ijoiem9lcGFya2luc29uIiwiYSI6ImNrbzl2cjI0cTFyejAyd3MybzlxYm0xbnIifQ.iaDU-piT9RAa8qZuFFKeEg',
      coordinates: [],
      center: [144.9671,-37.8183],
      map: {},
      allMarkers: [],
    };
  },
  mounted(){
  
    this.createMap();
  },
  methods: {
    async createMap(){
    //  creates the map that is displayed on the webpage
    // centred at Melbourne CBD
      mapboxgl.accessToken = this.access_token;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: this.center,
        zoom: 12,
      });
      // gets the coords of the location when the user clicks on the map
      this.map.on('click', (e) => {
        const lat = e.lngLat.lat;
        const lng = e.lngLat.lng;
        this.coordinates[0] = lng;
        this.coordinates[1] = lat;
        // centres the map on the location the user clicked on
        this.map.flyTo({
          center: this.coordinates
        });
        // emits the coords to be used by the weather component 
        this.$emit('coords-fetch', this.coordinates);
        this.addMarkers();
      });

     
      
    },
    async getCoords() {
      // this is the search location function
      // it takes the user input when searching a location and geocodes it to get the coords of that location
      let searchLocation = this.$refs.location.value;
      // clears the search bar
      this.$refs.location.value = '';
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchLocation)}.json?access_token=${this.access_token}`
      );
      // [lng,lat]
      
      // gets the coords from the api call
      this.coordinates[1] = response.data.features[0].geometry.coordinates[1];
      this.coordinates[0] = response.data.features[0].geometry.coordinates[0];
      

     
      this.$emit('coords-fetch', this.coordinates);
      this.addMarkers();
    },
    async addMarkers(){
      // adds a marker to the map for the users chosen location, search or click
      // removes any other markers on the map
      if (this.allMarkers!==null) {
        for (var i = 0; i < this.allMarkers.length; i++) {
          this.allMarkers[i].remove();
        }
      }

      var marker = new mapboxgl.Marker({"color": "#FFDE59"});
      marker.setLngLat(this.coordinates);
      marker.addTo(this.map);

      marker.addTo(this.map);

      // centres the map on the coords
      this.allMarkers.push(marker);
      this.map.flyTo({
        center: this.coordinates
      });

    }
  },
  emits: ['coords-fetch'],
  watch: {
    favCoords(){
      // the coords of the location when the user saves it as a favourite
      this.coordinates[0] = this.favCoords[0];
      this.coordinates[1] = this.favCoords[1];
      this.addMarkers();
    }
  }
};



</script>



<style scoped>

#map {
  height: 30vh;
  /*width: 50%;*/
  border-radius: 15px;

}
.Marker {
 color: pink;
}




</style>
