<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 col-md-6 col-lg-3 fun-item" v-for="post in posts" >
        <div class="d-flex flex-column fun-item-card" :class="post.tags">
          <router-link :to="{name:'FunDetail', params: {id: post.id}}">
            <div class="img-wrapper" :style="{ 'background-image': 'url(' + post.image + ')' }">
              <span class="sr-only">
                {{post.title}}
              </span><!-- /.sr-only -->
            </div><!-- /.img-wrapper -->
          </router-link>

          <h2>{{post.title}}</h2>
          <div class="fun-item-card-content">
            <div v-for="tag in post.tags" class="badge badge-success" :class="post.tags">{{tag}}</div>
          </div><!-- /.fun-item-card-content -->
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
        backgroundImage: '',
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
  @import "../assets/styles/app/main";
  @import "../assets/styles/vendors/bootstrap/badge";

  .fun-item {
    $body-spacing-side: 10px;
    margin-bottom: 20px;


    .fun-item-card {
      @include border-theme();
      background-color: white;
      border-top: 5px solid #00b3ee;
      box-shadow: 1px 1px 3px darkgray;
      height: 100%;
      justify-content: space-between;
      overflow: hidden;
      padding-bottom: 20px;


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
