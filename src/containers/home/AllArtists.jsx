/* eslint-disable max-len */
import React from 'react';
import Loading from '../../components/loading/Loading';
// import Pagination from '../../components/pagination/Pagination';
import ArtistList from '../../components/presentational/homePage/ArtistList';
import SearchBar from '../../components/presentational/homePage/SearchInput';
import { useArtists } from '../../state/useArtists';
// import usePagination from '../../state/usePagination';


const AllArtists = () => {
  const { loading, artists, search, handleSearch, setSearch  } = useArtists();
  // const { currentPage, handleClick } = usePagination();


  if(loading) return <Loading />;

  return (
    <>
      {/* <Pagination currentPage={currentPage} handleClick={handleClick} /> */}
      <SearchBar search={search} handleSearch={handleSearch} setSearch={setSearch} />
      <ArtistList artists={artists} />
    </>
  );
};

export default AllArtists;
