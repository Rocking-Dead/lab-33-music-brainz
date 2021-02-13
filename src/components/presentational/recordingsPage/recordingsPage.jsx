import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


const RecordingPage = ({ recordings, artist }) => {
    const recordingsList = recordings.map((recording) => {
        return (
        <li key={id}>
            <Link to={`/releases/lyrics/${artist}/${recordingTitle}`}>
                {recording.recordingTitle}
            </Link>
        </li>
        );
    });
    return <ul data-testid="recordingsList">{recordingsList}</ul>
}; 

RecordingPage.propType = {
    recordings: PropTypes.arrayOf(
        PropType.shape({
            recordingTitle: PropType.string.isRequired,
        })
        ),
    artist: PropType.string.isRequired
};

export default RecordingPage;