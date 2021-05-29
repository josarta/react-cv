import React from 'react';

const Bio = props => {
    return(
        <div className="bio text-right">
            <p>{props.bioContent}</p>
        </div>
    );
}

export default Bio;