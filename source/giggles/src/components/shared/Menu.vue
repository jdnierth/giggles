<template>
  <div>

    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <!--<router-link :to="{name:'Home'}" class="navbar-brand">-->
            <!--<img class="logo" src="../../assets/logo.png" alt="logo"/>-->
          <!--</router-link>-->
          <router-link class="nav-link" exact active-class="active" :to="{name:'Home'}">Home <span class="sr-only"></span></router-link>
          <router-link class="nav-link" active-class="active" :to="{name:'About'}">About <span class="sr-only"></span></router-link>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>

  </div>
</template>

<script>
  // import Navbar from '../../../node_modules/bootstrap-vue/src/components/navbar'
  // import Navbar from '../../../node_modules/bootstrap-vue/src/components/navbar'
  // import bNavbar from '../../../node_modules/bootstrap-vue/es/components/navbar/navbar'
  // import bNavbarBrand from '../../../node_modules/bootstrap-vue/es/components/navbar/navbar-brand'
  // import bCollapse from '../../../node_modules/bootstrap-vue/es/components/collapse'
  // import bDropdown from '../../../node_modules/bootstrap-vue/es/components/dropdown'
  //
  // export default {
  //   name: 'Menu',
  //   components: {
  //     bNavbarBrand,
  //     bCollapse}, //Register other components,
  //   directives: {
  //     'b-navbar': bNavbar,
  //     'b-navbar-brand': bNavbarBrand,
  //     'b-collapse': bCollapse,
  //     'b-dropdown': bDropdown
  //   }
  // }
</script>
<style lang="scss">
  @import '../../assets/styles/vendors/bootstrap/functions';
  @import '../../assets/styles/vendors/bootstrap/variables';
  @import '../../assets/styles/vendors/bootstrap/mixins';
  @import "../../assets/styles/vendors/bootstrap/navbar";
</style>
<style scoped lang="scss">
  .logo {
    max-height: 40px;
  }
  .navbar {
    margin-bottom: 40px;
  }
</style>
