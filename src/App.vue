<template>
  <div id="app">
    <h2>Playlist</h2>
    <br>
    <input v-model="searchInput" @keyup.enter="searchTrack">

    <h3>Albums</h3>
    <button type="button" @click="createAlbum">Create Album</button>
    <ul>
      <div v-if="albums && albums.length">
        <li :key="album.id" v-for="album in albums">
          <p>Album: {{ album.id }}</p>
          <h4>Tracks</h4>
          <button type="button" @click="addTrack({ album, track: {
            id: Math.random(10000),
            name: '',
            duration: 0,
            rating: '',
            artist: ''
          }
          })">Add track</button>
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

export default {
  data () {
    return {
      searchInput: ''
    };
  },
  computed: mapGetters({
    albums: 'allAlbums',
    tracks: 'allTracks'
  }),
  methods: {
    searchTrack () {
      this.$store.dispatch('searchTrack', this.searchInput)
      .then( track => {
        console.log(`Track found -> ${JSON.stringify(track)}`)
        this.searchInput = '';
      })
      .catch( err => console.log(`Err -> ${err}`))
    },
    createAlbum: mapMutations(['CREATE_ALBUM']).CREATE_ALBUM,
    addTrack: mapMutations(['ADD_TRACK']).ADD_TRACK
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
