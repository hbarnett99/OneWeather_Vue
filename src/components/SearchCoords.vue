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
    <!-- <button
    type="button"
    class="location-btn"
    @click="createMap"
    >Search by map
    </button> -->
    <div id="map"></div>
  </div>

</template>

<script>
import axios from "axios";
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line no-unused-vars
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
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
     
      mapboxgl.accessToken = this.access_token;
      this.map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: this.center,
        zoom: 12,
      });
      this.map.on('click', (e) => {
        const lat = e.lngLat.lat;
        const lng = e.lngLat.lng;
        this.coordinates[0] = lng;
        this.coordinates[1] = lat;
    
        this.map.flyTo({
          center: this.coordinates
        });
        this.$emit('coords-fetch', this.coordinates);
        this.addMarkers();
      });

     
      
    },
    async getCoords() {
      let searchLocation = this.$refs.location.value;
      this.$refs.location.value = '';
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchLocation)}.json?access_token=${this.access_token}`
      );
      // [lng,lat]
      

      this.coordinates[1] = response.data.features[0].geometry.coordinates[1];
      this.coordinates[0] = response.data.features[0].geometry.coordinates[0];
      

     
      this.$emit('coords-fetch', this.coordinates);
      this.addMarkers();
    },
    async addMarkers(){
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.coordinates[0] + ',' + this.coordinates[1]}.json?access_token=${this.access_token}`
      );
      
      
      if (this.allMarkers!==null) {
        for (var i = 0; i < this.allMarkers.length; i++) {
          this.allMarkers[i].remove();
        }
      }

      var marker = new mapboxgl.Marker({"color": "#FFDE59"});
      marker.setLngLat(this.coordinates);
      marker.addTo(this.map);

      var popup = new mapboxgl.Popup({ offset: 45, closeOnClick: false, closeButton: false });
      popup.setText(response.data.features[0].context[1].text);
      // popup.setText(response.data.features[0].place_name);
      marker.setPopup(popup);
      marker.addTo(this.map);
      popup.addTo(this.map);

      this.allMarkers.push(marker);
      this.map.flyTo({
        center: this.coordinates
      });

    }
  },
  emits: ['coords-fetch'],
  watch: {
    favCoords(){
      this.coordinates[0] = this.favCoords[0];
      this.coordinates[1] = this.favCoords[1];
      console.log('Search', this.coordinates);
      this.addMarkers();
    }
  }
};



</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .map-holder {
  width: 65%;
}*/
#map {
  height: 30vh;
  /*width: 50%;*/
  border-radius: 15px;

}
.Marker {
 color: pink;
}




</style>
