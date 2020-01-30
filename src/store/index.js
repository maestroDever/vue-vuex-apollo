import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    episodes: [],
    characters: [],
    favoriteCharacters: [],
    isLoading: false,
    error: null
  },
  mutations: {
    getEpisodes(state, payload) {
      state.episodes = payload;
    },
    getCharacters(state, payload) {
      state.characters = payload;
    },
    toggleLoading(state, payload) {
      state.isLoading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    addToFavorites(state, character) {
      state.favoriteCharacters = [...state.favoriteCharacters, character];
    },
    removeFromFavorites(state, id) {
      state.favoriteCharacters = state.favoriteCharacters.filter(
        character => character.id !== id
      );
    }
  },
  actions: {
    getEpisodes({ commit }) {
      commit('toggleLoading', true);
      axios
        .get('/episode')
        .then(res => commit('getEpisodes', res.data.results))
        .catch(err => commit('setError', error))
        .finally(() => commit('toggleLoading', false));
    },
    getCharacters({ commit }) {
      commit('toggleLoading', true);
      axios
        .get('/character')
        .then(res => commit('getCharacters', res.data.results))
        .catch(err => commit('setError', err))
        .finally(() => commit('toggleLoading', false));
    },
    addToFavorites({ commit }, character) {
      commit('addToFavorites', character);
    },
    removeFromFavorites({ commit }, characterId) {
      commit('removeFromFavorites', characterId);
    }
  }
});
