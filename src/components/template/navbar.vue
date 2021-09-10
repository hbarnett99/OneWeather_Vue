<template>

  <div id="app">
    <div id="sidebar" class="active">
      <div class="sidebar-wrapper active ps ps--active-y">
        <div class="sidebar-header">
          <div class="d-flex justify-content-between">
            <div class="logo">
              <a href="http://localhost:63342/mazer-main/dist/index.html"><img src="https://icons-for-free.com/iconfiles/png/512/fog+foggy+weather+icon-1320196634851598977.png" alt="Logo" srcset="" title="" style=""></a>
            </div>
            <div class="toggler">
              <a href="http://localhost:63342/mazer-main/dist/index.html?_ijt=fo496p42bbqi1gjvq2pneetq&amp;_ij_reload=RELOAD_ON_SAVE#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
            </div>
          </div>
        </div>
        <div class="sidebar-menu">
          <ul class="menu">
            <li class="sidebar-title">Menu</li>

            <li class="sidebar-item active ">
              <a href="http://localhost:63342/mazer-main/dist/index.html" class="sidebar-link">
                <i class="bi bi-grid-fill"></i>
                <span>Home</span>
              </a>
            </li>
            <li class="sidebar-item  has-sub">
              <a href="http://localhost:63342/mazer-main/dist/index.html?_ijt=fo496p42bbqi1gjvq2pneetq&amp;_ij_reload=RELOAD_ON_SAVE#" class="sidebar-link">
                <i class="bi bi-stack"></i>
                <span>Accordian</span>
              </a>
              <ul class="submenu" style="display: none;">
                <li class="submenu-item ">
                  <a href="http://localhost:63342/mazer-main/dist/component-alert.html">Item 1</a>
                </li>
                <li class="submenu-item ">
                  <a href="http://localhost:63342/mazer-main/dist/component-badge.html">Item 2</a>
                </li>
                <li class="submenu-item ">
                  <a href="http://localhost:63342/mazer-main/dist/component-breadcrumb.html">Item 3</a>
                </li>
              </ul>
            </li>
            <li class="sidebar-title">Submenu</li>
            <li class="sidebar-item  ">
              <a href="http://localhost:63342/mazer-main/dist/table.html" class="sidebar-link">
                <i class="bi bi-grid-1x2-fill"></i>
                <span>Table</span>
              </a>
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
        <h3>Profile Statistics</h3>
      </div>
      <div class="page-content">
        <section class="row">
          <div class="col-12 col-lg-9">
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
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-header">
                    <h4>Container</h4>
                  </div>
                  <div class="card-body" style="position: relative;">
                    INSERT COMPONENT 1 HERE
                  </div>
                  <div class="card-body" style="position: relative;">
                    INSERT COMPONENT 2 HERE
                  </div>
                </div>
              </div>
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
  name: "sidebar"
};
</script>

<style scoped>

@import '../../css/app.css';
@import '../../css/bootstrap.css';


</style>