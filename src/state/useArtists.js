import { useState } from 'react';
import { getAllArtists } from '../services/fetchMusicBrainzApi';


export const useArtists = () => {
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    getAllArtists(search).then((artists) => {
      setArtists(artists);
    });
  };

  return {
    artists,
    search,
    setSearch,
    handleSearch
  };
};
