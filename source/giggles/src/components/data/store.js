import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    pageSize: 5,
    allPosts: []
  },
  mutations: {
    setMovies(state, posts) {
      // console.log('SET MOVIES');
      state.allPosts = posts;
    }
  },
  actions: {
    getPosts({commit}) {
      // console.log('ACTIONS: GET MOVIES');
      Vue.http.get("https://api.imgur.com/3/album/SAIe07G",
        {headers: {'Authorization': 'Client-ID a5f17efdb65a808'}})
        .then(response => {
          // console.log('RESPONSE: ',JSON.parse(response.bodyText).data.images);
          commit('setMovies', JSON.parse(response.bodyText).data.images);

        }, error => {
          console.error(error);
        });
    }
  },
  getters: {
    getPosts(state) {
      // console.log('GETTERS GET MOVIES: ', state.posts);
      return state.posts
    }
  }
})
