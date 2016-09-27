export const allTracks = ({ playlist }) => {
  return playlist.albums.map( album => {
    return album.tracks.map( track => track );
  });
};

export const allAlbums = ({ playlist }) => playlist.albums.map( album => album );

export const searchedTracks = ({ playlist }) => playlist.searchedTracks;
