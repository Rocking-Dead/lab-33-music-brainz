const LYRICS_URL = 'https://api.lyrics.ovh/v1/';

export const getLyrics = (artist, recordingTitle) => {
  return fetch(LYRICS_URL + `/${artist}/${recordingTitle}`)
    .then(res => {
      if(!res.ok) throw 'Could not find lyrics';

      return res.json();
    });
};



