<template>

  <div id="app">

    <!---------------------------------------------->

    <div id="sidebar" class="active sidebar-item">
      <div class="sidebar-wrapper active ps ps--active-y scroll-hidden">
        <div class="sidebar-header">
          <div class="d-flex justify-content-between">
            <div class="logo">
              <img src="@/assets/ow_logo.png" alt="Logo" srcset="" title="" style="">
            </div>
          </div>
        </div>
        <div class="sidebar-menu">
          <ul class="menu">
            <li class="sidebar-title">Menu</li>
            <!-- ----------------------------------------------------- -->
            <li class="sidebar-item">
              <router-link to="/" class="sidebar-link" @click="hideMenuOnRoute">
                <i class="bi bi-grid-fill"></i>
                <span>Home</span>
              </router-link>
            </li>

            <li class="sidebar-item">
              <router-link :to="{name:'stars', params: {lat, lng}}" class="sidebar-link" @click="hideMenuOnRoute" >
                <i class="bi bi-grid-fill"></i>
                <span>Stars</span>
              </router-link>
            </li>

            <li class="sidebar-item">
              <router-link to="/Mars" class="sidebar-link" @click="hideMenuOnRoute">
                <i class="bi bi-grid-fill"></i>
                <span>Mars</span>
              </router-link>
            </li>


            <!-- ----------------------------------------------------- -->
            <li class="sidebar-title">Submenu</li>
            <li class="sidebar-item"> <!-- use sidebar-item-active for bolding of button-->
              <router-link to="/about" class="sidebar-link" @click="hideMenuOnRoute">
                <i class="bi bi-grid-fill"></i>
                <span>About</span>
              </router-link>
            </li>
          </ul>
        </div>
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
        <div class="ps__rail-x" style="left: 0px; bottom: 0px;">
          <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
        </div>
        <div class="ps__rail-y" style="top: 0px; height: 947px; right: 0px;">
          <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 543px;"></div>
        </div>
      </div>
    </div>

    <div id="body">
      <div id="main" >
        <header class="mb-3">
          <a href="http://localhost:63342/mazer-main/dist/index.html?_ijt=fo496p42bbqi1gjvq2pneetq&amp;_ij_reload=RELOAD_ON_SAVE#"
             class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
          </a>
        </header>
        <div class="d-flex justify-content-between">
          <div class="page-heading">
            <h3>OneWeather</h3>
          </div>
          <div>
            <button id="menuToggle" @click="menuToggle" type="button" class="btn btn-light mb-3 mx-1 d-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list"
                   viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="page-content">
          <section class="row">
            <div class="col-12 col-lg-9">
              <div class="row">

                <!--        Start of Container      -->

                <div class="col-12">
                  <div class="card">
                    <router-view @add-favourite="addFavourite" @location="onLocation" :coords="coords"/>
                  </div>
                </div>
              </div>

                <!--        End of Container      -->
            </div>
            <div class="col-12 col-lg-3">
              <div class="card">
                <div class="card-body py-4 px-5">
                  <div class="d-flex align-items-center">
                    <div class="avatar avatar-xl">
                      <img src="https://picsum.photos/500" alt="Face 1" title="" style="">
                    </div>
                    <div class="ms-3 name">
                      <h5 class="font-bold">Wayne Waine</h5>
                      <h6 class="text-muted mb-0">Profile</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header">
                  <h4>Favourites
                    <button @click="sort" class="location-btn btn btn-outline-secondary btn-sm mx-2 col-auto">Sort</button>
                  </h4>
                </div>
                <!-- The favourite list is here -->
                <div class="card-content pb-4">
                  <Items @search-fav="searchfav" @delete-item="deleteItem" :locations = "locations" />
                </div>
              </div>

            </div>
          </section>
        </div>
        <footer>
          <div class="footer clearfix mb-0 text-muted flex">
            <div class="float-start">
              <p>FIT2101 Semester 2, 2021</p>
            </div>
            <div class="float-end">
              <p>OneWeather - Team 01</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import Items from './components/FavouriteItems.vue';

export default {
  name: 'App',
  components: {
    Items,
  },
  data() {
    return {
      locations: [],
      coords: [],
      // Default to Monash University Clayton
      lat: "-37.914",
      lng: "145.132"
    };
  },
  methods: {
    onLocation({lat, lng}) {
      this.lat = String(lat);
      this.lng = String(lng);
    },
    // Used to show/hide the sidebar if the screensize does not auto-include it
    menuToggle(){
      if (document.getElementById('sidebar').classList.contains('active')) {
        document.getElementById('sidebar').classList.remove('active');
        this.deleteBackdrop();
      }
      else {
        document.getElementById('sidebar').classList.add('active');
        this.deleteBackdrop();
        const backdrop = document.createElement('div');
        backdrop.classList.add('sidebar-backdrop');
        backdrop.addEventListener('click', this.hide.bind(this));
        document.body.appendChild(backdrop);
      }
    },
    // Hides the menu after using clicking a link, if required
    hideMenuOnRoute(){
      var w = window.innerWidth;
      if (w < 1200) {
        this.menuToggle();
      }
    },
    sidebarHide(){
      document.getElementById('sidebar').classList.remove('active');
      this.deleteBackdrop();
    },
    sidebarShow(){

    },
    deleteItem(name){
      if (confirm('Are you sure to delete this location?')){
        this.locations = this.locations.filter((location) => location.name !== name);
      }
    },
    addFavourite(location){
      var duplication = false;
      this.locations.forEach((loc) => {
        if (loc.name === location.name){
          duplication = true;
        }
      });
      if (!duplication){
        this.locations.push(location);
      }
    },
    sort(){
      this.locations.sort((a,b) => a.name.localeCompare(b.name));
    },
    searchfav([lon, lat]){
      if (this.coords[0] !== lon && this.coords[1] !== lat){
        this.coords = [lon, lat];
      }
      else {console.log();}

    }
  }
};

//Checks if screen is big enough for sidebar on page load
window.addEventListener('DOMContentLoaded', () => {
  var w = window.innerWidth;
  if (w < 1200) {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('menuToggle').classList.remove('d-none');
  }
});

//Checks if screen is big enough for sidebar when resizing
window.addEventListener('resize', () => {
  var w = window.innerWidth;
  if (w < 1200) {
    document.getElementById('sidebar').classList.remove('active');
    document.getElementById('menuToggle').classList.remove('d-none');

  } else {
    document.getElementById('sidebar').classList.add('active');
    document.getElementById('menuToggle').classList.add('d-none');
  }
  // reset
  document.getElementById('sidebar').toggleOverflowBody(true);
});

</script>

<style scoped>
@import 'css/app.css';
@import 'css/bootstrap.css';
@import 'css/custom.css';
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@200&display=swap');
</style>
