<script>


export default{
  el: '#locations',

  methods: {



    search(){
      let searchLocation = this.$refs.location.value;
      this.$refs.location.value = '';

      //var geocodeKey = 'ce01f0588fe14055b9071b2005bce2aa';
      // let MAP_API = 'AIzaSyDgZa61EhA3XhxSXgSWrBVj0sqjfHYBVR0';
      // let geocode_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchLocation)}&key=${MAP_API}`;



      // alert(geocode_URL);
      alert(searchLocation);

    }
  }
};

</script>

<template>
   
  <!-- <script async
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
  </script> -->

    <div id="locations">
    <input ref = "location" />
    <button v-on:click="search()">Submit</button>
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

