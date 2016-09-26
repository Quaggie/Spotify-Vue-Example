import * as types from './mutation-types';

export const searchTrack = ({ state, commit }, track ) => {
  return new Promise( (resolve, reject ) => {
    commit(types.ADD_TRACK, {})
    resolve(`Testando ${track.id}`);
  });
};
