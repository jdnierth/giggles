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
    name: 'Fun',
    data() {
      return {
        post: ''
      }
    },
    computed: {
      ...mapGetters([
        // Mounts the "getFunStuff" getter to the scope of this component.
        'getFunStuff'
      ]),
      currentPost() {
        let posts;
        posts = store.state.allFunStuffs.filter(function (item) {
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
      store.dispatch('getFunStuff');
    }
  }
</script>

<style scoped lang="scss">

  @import '../../assets/styles/vendors/bootstrap/functions';
  @import '../../assets/styles/vendors/bootstrap/variables';
  @import '../../assets/styles/vendors/bootstrap/mixins';

  .fun-detail {
    h1 {
      font-size: 24px;
      margin: 20px auto;

      @include media-breakpoint-up(md) {
        width: 50%;
      }
    }

    img {
      border:5px solid #999;
      display: block;
      margin: 0 auto;
      width: 500px;
      max-width: 100%;
    }
  }
</style>
