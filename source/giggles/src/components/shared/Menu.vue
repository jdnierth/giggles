<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link :to="{name:'Home'}" class="navbar-brand">
        <img class="logo" src="../../assets/logo.png" alt="logo"/>
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'Home'}">Home <span class="sr-only"></span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" :to="{name:'About'}">About <span class="sr-only"></span></router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
  .logo {
    max-height: 40px;
  }
  .navbar {
    margin-bottom: 40px;
  }
</style>
