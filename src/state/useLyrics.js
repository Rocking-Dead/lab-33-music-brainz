import { getLyrics } from '../services/fetchLyricsApi';
import { useState, useEffect } from 'react';

export const useLyrics = (artist, recordingTitle) => {
    const [lyrics, setLyrics] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
    
        getLyrics(artist, recordingTitle)
          .then(({ lyrics }) => {
            setLyrics(lyrics);
            setLoading(false);
          });
      }, []);

      return (
        <div>
          {
            loading ? <Loading />
              : <p>{lyrics}</p>
          }
        </div>
      );

}

