<template>
  <div class="fun">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12">
          <input type="search" v-model="search">
        </div>
        <!-- /.col-sm-12 -->
      </div>
      <!-- /.row -->
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-3 fun-item" v-for="post in filteredPosts">
          <div class="fun-item-card" :class="post.tags">
            <router-link :to="{name:'FunDetail', params: {id: post.id}}">
              <div class="d-flex flex-column justify-content-between">
                <div class="img-wrapper" :style="{ 'background-image': 'url(' + post.link + ')' }">
                  <span class="sr-only" v-if="post.hasOwnProperty('title')">
                  {{post.title}}
                  </span><!-- /.sr-only -->
                </div><!-- /.img-wrapper -->

                <h2 v-if="post.hasOwnProperty('title')">{{post.title}}</h2>
                <div class="fun-item-card-content">
                  <div v-for="tag in post.tags" class="badge badge-success" :class="post.tags">{{tag}}</div>
                </div><!-- /.fun-item-card-content -->
              </div><!-- /.d-flex flex-column -->
            </router-link>
          </div><!-- /.d-flex -->
        </div>
      </div><!-- /.row -->
    </div><!--  /.container-fluid -->
  </div>
  <!-- /.fun -->
</template>

<script>
  // import data from '../assets/data/data.json'
  import {store} from './data/store'
  import {mapGetters} from 'vuex'

  export default {
    name: 'Fun',
    data() {
      return {
        backgroundImage: '',
        posts: [],
        search: ''
      }
    },
    computed: {
      ...mapGetters([
        // Mounts the "getMovies" getter to the scope of this component.
        'getMovies'
      ]),
      filteredPosts() {
        return store.state.posts.filter((post) => {
          // Return all if no search term was provided
          if (this.search == null || this.search === '') {
            console.log('A');
            return post;
          } else if(post && post.title) {
            return post.title.match(this.search);
          }
        })
      }
    },
    created() {
      store.dispatch('getMovies');
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/vendors/bootstrap/functions";
  @import "../assets/styles/vendors/bootstrap/variables";
  @import "../assets/styles/vendors/bootstrap/mixins";
  @import "../assets/styles/app/themes";
  @import "../assets/styles/vendors/bootstrap/badge";

  .fun-item {
    $body-spacing-side: 10px;
    margin-bottom: 20px;

    .d-flex {
      height: 100%;
    }

    .fun-item-card {
      @include border-theme();
      background-color: white;
      border-bottom: 5px solid #00b3ee;
      box-shadow: 1px 1px 3px darkgray;
      height: 100%;
      justify-content: space-between;
      overflow: hidden;
      padding-bottom: 20px;
      transition: all .3s ease-in-out;

      &:hover {
        box-shadow: 5px 5px 15px darkgray;
        background-color: beige;
      }

      a:hover {
        text-decoration: none;
      }

      h2 {
        font-size: 1em;
        font-weight: bold;
        padding: $body-spacing-side $body-spacing-side 0 $body-spacing-side;
        text-transform: uppercase;
        text-align: center;
      }

      .img-wrapper {
        display: block;
        background-position: center center;
        background-size: cover;
        height: 180px;
        overflow: hidden;
        width: 100%;
      }

    }

    .fun-item-card-content {
      padding: 5px $body-spacing-side;
    }

    .badge {
      @include background-theme();
      align-self: flex-end;

      &:not(:first-child) {
        margin-left: 10px;
      }
    }
  }

</style>
