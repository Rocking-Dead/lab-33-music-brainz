import { useState, useEffect } from 'react';
import getReleasesById from '../services/fetchMusicBrainzApi';

export const useReleases = (id) => {
  const [releases, setRelease] = useState([]);

  useEffect(() => {
    getReleasesById(id)
      .then(releases => {
        setRelease(releases);
      });
  }, [id]);

  return {
    releases
  };
};
