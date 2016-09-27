<template>
  <div id="app">
    <h2>Playlist</h2>
    <br>
    <label>Pesquise a musica</label>
    <multiselect
      :selected="selected"
      :options="localTracks"
      :searchable="true"
      :loading="isLoading"
      :custom-label="styleLabel"
      @search-change="searchTrack"
      @update="updateSelected"
      label="name"
      track-by="id">
    </multiselect>

    <h3>Albums</h3>
    <button type="button" @click="createAlbum">Create Album</button>
    <ul>
      <div v-if="albums && albums.length">
        <li :key="album.id" v-for="album in albums">
          <p>Album: {{ album.id }}</p>
          <h4>Tracks</h4>
          <button type="button" @click="addTrack(album)">Add track</button>
          <ul>
            <div v-if="album.tracks && album.tracks.length">
              <li :key="album.id" v-for="track in album.tracks">
                <p>Id: {{ track.id }}, Name: {{ track.name }}, Duration: {{ track.duration }}, Artist: {{ track.artist }}</p>
              </li>
            </div>
            <div v-else>
              <p>No tracks available</p>
            </div>
          </ul>
        </li>
      </div>
      <div v-else>
        <p>No Albums available</p>
      </div>

    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import Multiselect from 'vue-multiselect';
import debounce from 'lodash/debounce';
import moment from 'moment';

export default {
  data () {
    return {
      localTracks: [],
      isLoading: false,
      selected: null
    }
  },
  components: {
    Multiselect
  },
  computed: mapGetters({
    albums: 'allAlbums',
    tracks: 'allTracks',
    searchedTracks: 'searchedTracks'
  }),
  methods: {
    searchTrack (search) {
      if (this.isLoading) return;
      // if (search.trim().length <= 0) {
      //   this.$store.commit('SET_SEARCHED_TRACKS', []);
      //   this.localTracks = [];
      // }

      this.isLoading = true
      this.$store.dispatch('searchTrack', search)
      .then( tracks => {
        this.isLoading = false;
        console.log('Tracks -> ');
        console.log(tracks);
        this.localTracks = tracks
      })
      .catch( err => {
        this.isLoading = false;
        console.log(`Err -> ${err}`);
      });
    },
    updateSelected: selected => { this.selected = selected },
    styleLabel: ({ name, artist, duration }) => `${name} (${moment(duration).format('m:ss')}) - ${artist}`,
    createAlbum: mapMutations(['CREATE_ALBUM']).CREATE_ALBUM,
    addTrack (album, track) {
      const trk = {
        id: Math.random(10000),
        name: '',
        duration: 0,
        rating: '',
        artist: ''
      }
      this.$store.commit('ADD_TRACK', { album, track: trk })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
