<template>
  <div class="fun">
    <div class="container-fluid">

      <!-- /.row -->
      <div class="row">
        <div class="col-sm-6 col-md-6 col-lg-3 fun-item" v-for="post in filteredPosts">
          <div class="fun-item-card"
               :class="getTags(post.description) | removeHash">
            <router-link :to="{name:'Fun', params: {posts: filteredPosts, id: post.id}}">
              <div class="d-flex flex-column justify-content-between">
                <div class="img-wrapper"
                     :style="{ 'background-image': 'url(' + post.link + ')' }">
                  <span class="sr-only"
                        v-if="post.hasOwnProperty('title')">
                  {{post.title}}
                  </span><!-- /.sr-only -->
                </div><!-- /.img-wrapper -->

                <h2 v-if="post.hasOwnProperty('title')">{{post.title}}</h2>
                <div class="fun-item-card-content">
                  <div v-for="tag in getTags(post.description)"
                       class="badge badge-success"
                       :class="post.tags">{{tag}}
                  </div>
                </div><!-- /.fun-item-card-content -->
              </div><!-- /.d-flex flex-column -->
            </router-link>
          </div><!-- /.d-flex -->
        </div>
      </div><!-- /.row -->
      <app-pagination></app-pagination>
    </div><!--  /.container-fluid -->
  </div>
  <!-- /.fun -->
</template>

<script>
  import {store} from './data/store';
  import {getTags} from '../components/shared/filters/getTags';
  import {removeHash} from '../components/shared/filters/removeHash';

  export default {
    name: 'FunList',
    data() {
      return {
        backgroundImage: '',
        tags: []
      }
    },
    computed: {
      filteredPosts() {
        let self = this;
        store.dispatch('getFilteredPosts',
          {
            page: self.$route.params.page,
            search: store.state.search || ''
          });

        return store.state.filteredPosts;
      }
    },
    filters: {
      removeHash(value) {
        return removeHash(value);
      }
    },
    methods: {
      getTags(description) {
        return getTags(description);
      }
    }
  }
</script>

<style lang="scss">
  @import "../assets/styles/vendors/bootstrap/functions";
  @import "../assets/styles/vendors/bootstrap/variables";
  @import "../assets/styles/vendors/bootstrap/mixins";
  @import "../assets/styles/app/card";
  @import "../assets/styles/vendors/bootstrap/badge";
  @import "../assets/styles/app/themes";

  .fun-item {
    $body-spacing-side: 10px;
    margin-bottom: 20px;

    .d-flex {
      height: 100%;
    }

    .fun-item-card {
      background-color: darken(#00ffee, 10%);
      border-bottom: 5px solid #00ffee;
      @include border-theme(#00ffee);
      box-shadow: 1px 1px 3px darkgray;
      height: 100%;
      justify-content: space-between;
      overflow: hidden;
      padding-bottom: 20px;
      transition: all .3s ease-in-out;

      &:hover {
        background-color: #00ffee;

        a {
          text-decoration: none;
        }
      }

      a {
        color: #fff;
      }

      h2 {
        font-size: 1em;
        font-weight: bold;
        padding: 20px $body-spacing-side 0 $body-spacing-side;
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
