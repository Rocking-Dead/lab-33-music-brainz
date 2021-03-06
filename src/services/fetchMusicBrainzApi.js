/* eslint-disable max-len */
export const getAllArtists = (artist) => {
  return fetch(`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`)
    .then(res => res.json())
    .then(json => json.artists);
};

export const getReleasesById = (id) => {
  return fetch(`https://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
    .then((res) => res.json())
    .then((res) => res.releases)
    .then(releases => releases.map(release => ({
      id: release.id,
      title: release.title,
      image: release['cover-art-archive']['front'] ? `https://coverartarchive.org/release/${release.id}/front` : 'https://www.placecage.com/100/100'
    })));
};

export const getRecordingById = (releaseId) => {
  return fetch(`https://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`)
    .then(res => res.json())
    .then(json => json.recordings);
};
