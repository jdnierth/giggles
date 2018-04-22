<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <!-- /.col-5 -->
          <span>&copy; 2018 all rights reserved.</span>
        </div>
        <div class="col-8">
          <router-link active-class="active" class="float-right" :to="{name:'About'}">About <span class="sr-only"></span>
          </router-link>
        </div>
        <!-- /.col-8 -->
      </div>
      <!-- /.row -->
    </div>
  </footer>
</template>

<style lang="scss">
  footer {
    background-color: lightblue;
    padding: 10px 0;
  }
</style>
