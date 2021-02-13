/* eslint-disable max-len */
import React from 'react';
import ArtistList from '../../components/presentational/homePage/ArtistList';
import SearchBar from '../../components/presentational/homePage/SearchInput';
import { useArtists } from '../../state/useArtists';


const AllArtists = () => {
  const { artists, search, handleSearch, setSearch  } = useArtists();

  return (
    <>
      <SearchBar search={search} handleSearch={handleSearch} setSearch={setSearch} />
      <ArtistList artists={artists} />
    </>
  );
};

export default AllArtists;
