import * as types from '../mutation-types'

// initial state
const state = {
  albums: []
};

let id = 0;

// mutations
const mutations = {
  [types.CREATE_ALBUM] (state) {
    state.albums.push({
      id: id++,
      tracks: []
    });
  },

  [types.REMOVE_ALBUM] (state, { album }) {
    const existingAlbum = state.albums.find( ({ id }) => id === album.id);
    state.albums = albums.filter( ({ id }) => existingAlbum.id !== id);
  },
};

export default {
  state,
  mutations
};
