<template>
  <div id="app">
    <app-menu></app-menu>

    <div class="page">
      <transition appear
                  name="fade"
                  mode="out-in">
        <router-view default="{name: 'Home'}"/>

      </transition>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  @import './assets/styles/app/main.scss';
  @import './assets/styles/vendors/animate-css/properties';
  @import './assets/styles/vendors/animate-css/_fading-entrances/fading-entrances';

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }

  .page {
    min-height:60vh;
    padding-bottom: 30px;
  }

  .fade-enter-active {
    @include fadeIn(3s,3s,null);
  }

</style>
