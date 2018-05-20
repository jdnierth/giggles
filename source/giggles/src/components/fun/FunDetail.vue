<template>
  <div class="fun-detail">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <div v-if="currentPost">
            <img :src="currentPost.link" :alt="currentPost.title">
            <h1 class="text-center">{{currentPost.title}}</h1>
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
        post: ''
      }
    },
    computed: {
      ...mapGetters([
        // Mounts the "getGiggles" getter to the scope of this component.
        'getGiggles'
      ]),
      currentPost() {
        let posts;
        posts = store.state.allGiggles.filter(function (item) {
          if (item.id === this.$route.params.id) {
            return item;
          }
        }.bind(this));

        if (posts.length) {
          this.post = posts[0];
        }

        return posts[0];
      }
    },
    created() {
      store.dispatch('getGiggles');
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
