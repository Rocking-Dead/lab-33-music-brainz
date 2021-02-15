import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const RecordingPage = ({ recordingTitle, artist }) => {
  const recordingsList = recordings.map((recording) => {
    return (
      <li key={id}>
        <Link to={`/releases/lyrics/${artist}/${recordingTitle}`}>
          {recordingTitle}
        </Link>
      </li>
    );
  });
  return <ul data-testid="recordingsList">{recordingsList}</ul>;
}; 


RecordingPage.propTypes = {
  recordingTitle: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired
}; 

export default RecordingPage;
