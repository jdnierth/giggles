import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    allFunStuffs: [],
    filteredPosts: [],
    page: 1,
    pageSize: 8,
    pageTotal: 8,
    search: ''
  },
  mutations: {
    setPosts(state, posts) {
      this.state.pageTotal = posts.length;
      this.state.allFunStuffs = posts;
    },
    setFilteredPosts(state, posts) {
      this.state.pageTotal = posts.length;
      this.state.filteredPosts = posts.slice((this.state.page * this.state.pageSize)- this.state.pageSize, this.state.page * this.state.pageSize);
    }
  },
  actions: {
    getPosts({commit}) {
      Vue.http
        .get("https://api.imgur.com/3/album/ZcSPSEZ",
        {
          headers:
            {
              'Authorization': 'Client-ID a5f17efdb65a808'
            }
        })
        .then(response => {
            commit('setPosts', JSON.parse(response.bodyText).data.images);
        }, error => {
          console.error(error);
        });
    },
    getFilteredPosts({commit},payload) {
      this.state.page = payload.page || 1;
      this.state.search = payload.search || '';

      commit('setFilteredPosts', this.state.allFunStuffs.filter((post) => {
        if (post && post.title) {
          return post.title.match(this.state.search);
        }
      }));
    }
  }
});
