<template>
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