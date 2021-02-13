/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom';

const ReleasePage = ({ releases }) => {
  const releaseList = releases.map(release => {
    return (
      <li key={release.id}>
        <Link to={`/releases/recordings/${release.id}`}>
          <figure>
            <img src={release.image} alt={`${release.title} cover image`} style={{ width: '100px' }} />
            <figcaption>
              {release.title}
            </figcaption>
          </figure>
        </Link>
      </li>
    );
  });
  return (
    <ul>
      { releaseList }
    </ul>
  );
};

ReleasePage.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    title:PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }
  ))
};

export default ReleasePage;
