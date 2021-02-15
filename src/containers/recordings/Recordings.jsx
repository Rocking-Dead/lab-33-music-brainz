/* eslint-disable max-len */
import React from 'react';
import RecordingPage from '../../components/presentational/recordingsPage/recordingsPage';
import { useRecording } from '../../state/useRecordings';

const Recordings = ({ match }) => {
  const { recordings } = useRecording(match.params.releaseId); 
  const artist = match.params.artist;
    
  return <RecordingPage recordings={recordings} artist={artist} />;
};

export default Recordings;
