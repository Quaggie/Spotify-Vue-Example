import Vue from 'vue';
import * as types from './mutation-types';

export const searchTrack = ({ state, commit }, track ) => {
  if (!track || !track.length) return Promise.reject();

  const formattedTrack = track.trim().split(' ').join('+');
  return Vue.http.get(`https://api.spotify.com/v1/search?q=${formattedTrack}&type=track`)
  // href: String,
  // items: [
  //    album { id: String, images: [{ height, url, width }], name: String },
  //    artists: [{ id: String, name: String }],
  //    id: String,
  //    name: String,
  //    popularity: Number (1 -> 100)
  // ]
  // total: Number
  .then( ({body}) => {
    const result = body.tracks.items.map( item => {
      return {
        id: item.id,
        name: item.name,
        duration: item.duration_ms,
        rating: item.popularity,
        artist: item.artists.find( h => h ).name
      }
    });
    commit(types.SET_SEARCHED_TRACKS, result)
    return result
  })
  .catch( err => err)
};
