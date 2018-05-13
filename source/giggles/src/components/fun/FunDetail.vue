<template>
  <div class="fun-detail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div v-if="post">
            <img :src="post.link" :alt="post.title">
            <h1 class="text-center">{{post.title}}</h1>
          </div>
        </div><!-- /.col-sm-12 -->
      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
</template>

<script>
  import {store} from '../data/store'
  import {mapGetters} from 'vuex'

  export default {
    name: 'FunDetail',
    data() {
      return {
        posts: [],
        post: ''
      }
    },
    computed: {
      ...mapGetters([
        // Mounts the "getPosts" getter to the scope of this component.
        'getPosts'
      ]),
    },
    created: function () {
      let posts;

      if(!store.state.posts.length) {
        store.dispatch('getPosts');
        console.log('dispatch');
        posts = store.state.posts;
        console.log('posts: ', posts);
      }

      posts = store.state.posts.filter(function (item) {
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
