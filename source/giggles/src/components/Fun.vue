<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3" v-for="post in posts">
        <div class="fun-item">
          <h2>{{post.title}}</h2>
          <img :src="post.image" alt="">
        </div>
      </div>
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
.fun-item {
  img {
    max-height: 150px;
  }
}
</style>
