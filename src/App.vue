<template>

  <div id="app">

<!---------------------------------------------->

    <div id="sidebar" class="active">
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
              <router-link to="/" class="sidebar-link">
                <i class="bi bi-grid-fill"></i>
                <span>Home</span>
              </router-link>
            </li>

            <li class="sidebar-item">
              <router-link :to="{name:'stars', params: {lat, lng}}" class="sidebar-link" >
                <i class="bi bi-grid-fill"></i>
                <span>Stars</span>
              </router-link>
            </li>



<!-- ----------------------------------------------------- -->
            <li class="sidebar-title">Submenu</li>
            <li class="sidebar-item"> <!-- use sidebar-item-active for bolding of button-->
              <router-link to="/about" class="sidebar-link">
                <i class="bi bi-grid-fill"></i>
                <span>About</span>
              </router-link>
            </li>
          </ul>
        </div>
        <button class="sidebar-toggler btn x"><i data-feather="x"></i></button>
        <div class="ps__rail-x" style="left: 0px; bottom: 0px;"><div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps__rail-y" style="top: 0px; height: 947px; right: 0px;"><div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 543px;"></div></div></div>
    </div>
    <div id="main">
      <header class="mb-3">
        <a href="http://localhost:63342/mazer-main/dist/index.html?_ijt=fo496p42bbqi1gjvq2pneetq&amp;_ij_reload=RELOAD_ON_SAVE#" class="burger-btn d-block d-xl-none">
          <i class="bi bi-justify fs-3"></i>
        </a>
      </header>
      <div class="page-heading">
        <h3>OneWeather</h3>
      </div>
      <div class="page-content">
        <section class="row">
          <div class="col-12 col-lg-9">
            <!-- The following code is for the 'cards' that would appear above the container
            <div class="row">
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-3 py-4-5">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="stats-icon purple">
                          <i class="iconly-boldShow"></i>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <h6 class="text-muted font-semibold">Card 1</h6>
                        <h6 class="font-extrabold mb-0">112.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-3 py-4-5">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="stats-icon blue">
                          <i class="iconly-boldProfile"></i>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <h6 class="text-muted font-semibold">Card 2</h6>
                        <h6 class="font-extrabold mb-0">183.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-3 py-4-5">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="stats-icon green">
                          <i class="iconly-boldAdd-User"></i>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <h6 class="text-muted font-semibold">Card 3</h6>
                        <h6 class="font-extrabold mb-0">80.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-3 py-4-5">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="stats-icon red">
                          <i class="iconly-boldBookmark"></i>
                        </div>
                      </div>
                      <div class="col-md-8">
                        <h6 class="text-muted font-semibold">Card 4</h6>
                        <h6 class="font-extrabold mb-0">112</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->

            <div class="row">

<!--        Start of Container      -->

              <div class="col-12">
                <div class="card">
                  <router-view @location="onLocation" />
                </div>
              </div>

<!--        End of Container      -->

            </div>
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
                <h4>Favourites</h4>
              </div>
              <div class="card-content pb-4">
                <div class="recent-message d-flex px-4 py-3">

                  <div class="name ms-4">
                    <h5 class="mb-1">Placeholder 1</h5>
                    <h6 class="text-muted mb-0">subtext</h6>
                  </div>
                </div>
                <div class="recent-message d-flex px-4 py-3">

                  <div class="name ms-4">
                    <h5 class="mb-1">Placeholder 2</h5>
                    <h6 class="text-muted mb-0">subtext</h6>
                  </div>
                </div>
                <div class="recent-message d-flex px-4 py-3">

                  <div class="name ms-4">
                    <h5 class="mb-1">Placeholder 3</h5>
                    <h6 class="text-muted mb-0">Subtext</h6>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>
      </div>
      <footer>
        <div class="footer clearfix mb-0 text-muted">
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
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      // Default to Monash University Clayton
      lat: "-37.914",
      lng: "145.132"
    };
  },
  methods: {
    onLocation({lat, lng}) {
      this.lat = String(lat);
      this.lng = String(lng);
    }
  }
};

</script>

<style scoped>
@import 'css/app.css';
@import 'css/bootstrap.css';
@import 'css/custom.css';
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300&display=swap');
</style>
