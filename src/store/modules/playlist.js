import * as types from '../mutation-types'

// initial state
const state = {
  id: 0,
  albums: [],
  searchedTracks: []
};

// mutations
const mutations = {
  [types.CREATE_ALBUM] (state) {
    state.albums.push({
      id: state.id++,
      tracks: []
    });
  },

  [types.REMOVE_ALBUM] (state, { album }) {
    const existingAlbum = state.albums.find( ({ id }) => id === album.id);
    state.albums = albums.filter( ({ id }) => existingAlbum.id !== id);
  },

  [types.ADD_TRACK] (state, { album, track }) {
    for (let albm of state.albums) {
      if (albm.id === album.id) {
        if (albm.tracks.find( t => t.id === track.id )) break;
        albm.tracks.push({
          id: track.id,
          name: track.name,
          duration: track.duration,
          rating: track.rating,
          artist: track.artist
        })
        break;
      }
    }
  },

  [types.REMOVE_TRACK] (state, { album, track }) {
    for (let albm of state.albums) {
      if (albm.id === album.id) {
        albm.tracks = albm.tracks.filter( ({ id }) => track.id !== id);
        break;
      }
    }
  },

  [types.SET_SEARCHED_TRACKS] (state, tracks) {
    state.searchedTracks = tracks
  }

};

export default {
  state,
  mutations
};
