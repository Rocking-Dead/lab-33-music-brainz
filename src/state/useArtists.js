import { useState } from 'react';
import { getAllArtists } from '../services/fetchMusicBrainzApi';


export const useArtists = () => {
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);
  // const [loading, setLoading] = useState(false);

  // setLoading(true);
  const handleSearch = (e) => {
    e.preventDefault();

    getAllArtists(search).then((artists) => {
      setArtists(artists);
      // setLoading(false);
    });
  };

  return {
    // loading,
    artists,
    search,
    setSearch,
    handleSearch
  };
};
