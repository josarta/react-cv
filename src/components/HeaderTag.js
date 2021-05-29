import React from 'react';

const HeaderTag = props => {
    return(
        <div className="headerTag text-center">
            <h1>{props.data.name}</h1>
            <p className="tagline">{props.data.tag}</p>
        </div>
    );
}

export default HeaderTag;