<template>
  <div id="app">
    <h2>Playlist</h2>
    <br>
    <h3>Tracks</h3>
    <button type="button" @click="addTrack({})">Add track</button>
    <ul>
      <div v-if="tracks && tracks.length">
        <li v-for="track in tracks">
          {{ track | json }}
        </li>
      </div>
      <div v-else>
        <p>No tracks available</p>
      </div>
    </ul>
    <h3>Albums</h3>
    <button type="button" @click="createAlbum({})">Create Album</button>
    <ul>
      <div v-if="albums && albums.length">
        <li v-for="album in albums">
          {{ album | json }}
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
  computed: mapGetters({
    albums: 'allAlbums',
    tracks: 'allTracks'
  }),
  methods: {
    searchTrack: mapActions(['searchTrack']).searchTrack,
    createAlbum: mapMutations(['CREATE_ALBUM']).CREATE_ALBUM,
    addTrack: mapMutations(['ADD_TRACK']).ADD_TRACK
  },
  created () {
    this.searchTrack({})
    .then( () => console.log('completed'))
    .catch( err => console.log(`Err -> ${err}`));
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
