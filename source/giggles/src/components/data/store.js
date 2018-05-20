import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    allGiggles: [],
    filteredGiggles: [],
    page: 1,
    pageSize: 8,
    pageTotal: 8,
    search: ''
  },
  mutations: {
    setGiggles(state, posts) {
      this.state.pageTotal = posts.length;
      this.state.allGiggles = posts;
    },
    setFilteredGiggles(state, posts) {
      this.state.pageTotal = posts.length;
      this.state.filteredGiggles = posts.slice((this.state.page * this.state.pageSize)- this.state.pageSize, this.state.page * this.state.pageSize);
    }
  },
  actions: {
    getGiggles({commit}) {
      Vue.http
        .get("https://api.imgur.com/3/album/SAIe07G",
        {
          headers:
            {
              'Authorization': 'Client-ID a5f17efdb65a808'
            }
        })
        .then(response => {
          commit('setGiggles', JSON.parse(response.bodyText).data.images);
        }, error => {
          console.error(error);
        });
    },
    getFilteredGiggles({commit},payload) {
      this.state.page = payload.page || 1;
      this.state.search = payload.search || '';

      // Return all if no search term was provided
      if (this.state.search == null || this.state.search === '') {
        commit('setFilteredGiggles', this.state.allGiggles);

        // Return all posts where the title matches the search term.
      } else {
        commit('setFilteredGiggles', this.state.allGiggles.filter((post) => {
          if (post && post.title) {
            return post.title.match(this.state.search);
          }
        })
        );
      }
    }
  },
  getters: {
    getGiggles(state) {
      return state.posts
    },
    getFilteredGiggles(state) {
      return state.filteredGiggles
    }
  }
})
