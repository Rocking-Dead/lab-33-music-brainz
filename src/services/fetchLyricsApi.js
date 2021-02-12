export const getLyrics = (artist, recordingTitle) => {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${recordingTitle}`)
        .then(res => res.json())
}