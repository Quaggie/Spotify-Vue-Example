import deepFreeze from 'deep-freeze';

export default deepFreeze({
  spotify: {
    clientId: process.env.SPOTIFY_CLIENT_ID || '',
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET || ''
  }
});
