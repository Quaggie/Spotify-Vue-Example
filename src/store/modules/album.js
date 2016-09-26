import * as types from '../mutation-types'

// initial state
const state = {
  id: 0,
  tracks: []
};

// mutations
const mutations = {
  [types.ADD_TRACK] (state, track) {
    state.tracks.push({
      id: track.id,
      name: track.name,
      duration: track.duration,
      rating: track.rating,
      artist: track.artist
    })
  },

  [types.REMOVE_TRACK] (state, track) {
    const existingTrack = state.tracks.find( ({ id }) => id === track.id);
    state.tracks = tracks.filter( ({ id }) => existingTrack.id !== id);
  }
};

export default {
  state,
  mutations
};
