import React from 'react';

const BioImage = props => {
    const source = 'https://avatars1.githubusercontent.com/u/26560482';

    return(
        <div className="bioImage media-object">
            <img src={source} alt="Profile" />
        </div>
    );
}

export default BioImage;