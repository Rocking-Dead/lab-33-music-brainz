import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistList = ({ artists }) => {
  const artistList = artists.map((artist) => {
    return (
      <li key={artist.id}>
        <Link to={`/releases/${artist.name}/${artist.id}`}>{artist.name}</Link>
      </li>
    );
  });
  return <ul>{artistList}</ul>;
};

ArtistList.propTypes = {
  artists: PropTypes.array,
};

export default ArtistList;
