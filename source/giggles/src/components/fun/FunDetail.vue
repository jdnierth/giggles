<template>
  <div class="fun-detail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">

          <div v-if="post">
            <h1 class="text-center">{{post.title}}</h1>
            <img :src="'../../'+post.image" :alt="post.title">
          </div>
        </div><!-- /.col-sm-12 -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
</template>

<script>
  import data from '../../assets/data/data.json'

  export default {
    name: 'FunDetail',
    data() {
      return {
        posts: data,
        post: ''
      }
    },
    created: function () {
      let posts = data.filter(function (item) {
        if (item.id === this.$route.params.id) {
          return item;
        }
      }.bind(this));

      if (posts.length) {
        this.post = posts[0];
      }
    }
  }
</script>

<style scoped lang="scss">
  .fun-detail {
    img {
      display: block;
      margin: 0 auto;
      width: 500px;
      max-width: 100%;
    }
  }
</style>
