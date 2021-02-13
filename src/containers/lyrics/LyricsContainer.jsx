import React, { useState, useEffect } from 'react';
import { getLyrics } from '../../services/fetchLyricsApi';
import Loading from '../../components/loading/Loading';
//import app context with state

export default function LyricsContainer() {
  const { artist, recordingTitle } = useApp();

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


