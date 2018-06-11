<template>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <!-- /.col-5 -->
          <span>&copy; {{year}} all rights reserved.</span>
        </div>
        <div class="col-8">
          <router-link active-class="active" class="float-right" :to="{name:'About'}">About <span
            class="sr-only"></span>
          </router-link>
        </div>
        <!-- /.col-8 -->
      </div>
      <!-- /.row -->
    </div>

  </footer>
</template>

<script>
  export default {
    data() {
      return {
        year: (new Date).getFullYear()
      }
    }
  }
</script>

<style lang="scss">
  footer {
    background-color: white;
    padding: 10px 0;
  }
</style>
