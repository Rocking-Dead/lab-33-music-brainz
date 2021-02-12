import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      <input defaultValue={search} />
      <button>Search</button>
    </form>
  );
};

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  
};

export default SearchBar;
