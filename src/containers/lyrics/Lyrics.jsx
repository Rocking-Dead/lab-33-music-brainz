import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({lyrics}) => {
  const parsedLyrics = lyrics.split("\n")
  .map((newLine) => {
    return 
    <li key={id}>{newLine}</li>
  });

  return <ul data-testid="Lyrics">{parsedLyrics}</ul>;
};

Lyrics.propTypes = {
    lyrics: PropTypes.string.isRequired,
};

export default Lyrics;

