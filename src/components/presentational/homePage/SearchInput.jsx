import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ onChange }) => {
  return (
    <>
      <label htmlFor="searchInput">Search</label>
      <input 
        id="searchInput"
        type="text" 
        placeholder="search" 
        onChange={ onChange }
      />
    </>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default Search;