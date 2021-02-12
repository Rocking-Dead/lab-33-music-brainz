export const getAllArtists = (artist) => {
    return fetch(`http://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=25`)
        .then(res => res.json())
        .then(json => json.artists)
}

export const getReleasesById = (id) => {
    return fetch(`http://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
        .then(res => res.json())
        .then(json => json.releases)
}

export const getRecordingById = (release_id) => {
    return fetch(`http://musicbrainz.org/ws/2/recording?release=${release_id}&fmt=json`)
        .then(res => res.json())
        .then(json => json.recordings)
};
