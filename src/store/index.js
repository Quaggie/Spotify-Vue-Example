import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as getters from './getters';
import * as actions from './actions';
import playlist from './modules/playlist';
import album from './modules/album';
import track from './modules/track';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  actions,
  getters,
  modules: { playlist, album, track },
  strict: debug
});

export default store;
