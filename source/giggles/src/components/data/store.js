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
    setFunStuff(state, posts) {
      this.state.pageTotal = posts.length;
      this.state.allFunStuffs = posts;
    },
    setFilteredFunStuff(state, posts) {
      this.state.pageTotal = posts.length;
      this.state.filteredPosts = posts.slice((this.state.page * this.state.pageSize)- this.state.pageSize, this.state.page * this.state.pageSize);
    }
  },
  actions: {
    getFunStuff({commit}) {
      Vue.http
        .get("https://api.imgur.com/3/album/ZcSPSEZ",
        {
          headers:
            {
              'Authorization': 'Client-ID a5f17efdb65a808'
            }
        })
        .then(response => {
          commit('setFunStuff', JSON.parse(response.bodyText).data.images);
        }, error => {
          console.error(error);
        });
    },
    getFilteredFunStuff({commit},payload) {
      this.state.page = payload.page || 1;
      this.state.search = payload.search || '';

      // Return all if no search term was provided
      if (this.state.search == null || this.state.search === '') {
        commit('setFilteredFunStuff', this.state.allFunStuffs);

        // Return all posts where the title matches the search term.
      } else {
        commit('setFilteredFunStuff', this.state.allFunStuffs.filter((post) => {
          if (post && post.title) {
            return post.title.match(this.state.search);
          }
        })
        );
      }
    }
  },
  getters: {
    getFunStuff(state) {
      return state.posts
    },
    getFilteredFunStuff(state) {
      return state.filteredPosts
    }
  },
  mounted() {
    this.getFunStuff()
  }
});
