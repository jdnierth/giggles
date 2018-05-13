import * as Vuex from "vuex";
import Vue from 'vue';

export const store = new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    setMovies(state, posts) {
      // console.log('SET MOVIES');
      state.posts = posts;
    }
  },
  actions: {
    getMovies({commit}) {
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
    getMovies(state) {
      // console.log('GETTERS GET MOVIES: ', state.posts);
      return state.posts
    }
  }
})