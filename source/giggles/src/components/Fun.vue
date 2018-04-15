<template>
  <div class="container-fluid">
    <div class="row">
      <!--<div class="d-flex flex-wrap p3">-->
      <div class="col-sm" v-for="post in posts">
        <div class="fun-item">
          <h2>{{post.title}}</h2>
          <img :src="post.image" class="embed-responsive" alt="">
        </div>
      </div>
      <!--</div>-->
    </div>
  </div>
</template>

<script>
  import data from '../assets/data/data.json'

  export default {
    name: 'Fun',
    data() {
      return {
        posts: data
      }
    },
    created() {
      // let self = this
      //  this.$http.get('http://localhost:8080/assets/data/data.json')
      //    .then(response => {
      //    // get body data
      //    console.log('response: ', response);
      //    self.posts = response.body
      //
      //  }, error => {
      //    console.log('Error: ', error)
      //  })
    }
  }
</script>

<style scoped lang="scss">
  h2 {
  text-align: left;
  }

  .fun-item {
  borderr:1px solid;
  }
</style>
