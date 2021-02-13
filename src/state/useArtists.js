import { useState } from 'react';
import { getAllArtists } from '../services/fetchMusicBrainzApi';


export const useArtists = () => {
  const [search, setSearch] = useState('');
  const [artists, setArtists] = useState([]);

  const handleSearch = (e) => {
    e.prevent.Default();

    const searchedArtist = e.target[0].value;

    getAllArtists(searchedArtist).then((artists) => {
      setArtists(artists);
      setSearch(searchedArtist);
    });
  };

  return {
    artists,
    search,
    handleSearch
  };
};
