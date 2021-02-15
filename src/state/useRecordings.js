import { getRecordingById } from '../services/fetchMusicBrainzApi';
import { useEffect, useState } from 'react';

export const useRecording = (recordingId) => {
  const [recordings, setRecording] = useState([]);

  useEffect(() => {
    getRecordingById(recordingId).then((recordings) => {
      setRecording(recordings);
    });
  }, []);

  return {
    recordings,
  };
};
