/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, handleSearch, setSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input onChange={({ target }) => setSearch(target.value)} defaultValue={search} />
      <button>Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
