<template>
  <div id="app">
    <!--<img src="./assets/logo.png" alt="logo"/>-->
    <app-menu></app-menu>
    <transition appear
                name="fade"
                mode="out-in">
      <router-view/>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  /*@import './assets/styles/vendors/bootstrap/bootstrap.scss';*/
  @import './assets/styles/app/main.scss';
  @import './assets/styles/vendors/animate-css/properties';
  @import './assets/styles/vendors/animate-css/_fading-entrances/fading-entrances';
</style>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  /*.fade {*/
    /*@include './assets/styles/vendors/animate-css/_fading-entrances/fadeIn';*/
  /*}*/
  .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-leave-to {
    opacity: 0;
  }

</style>
