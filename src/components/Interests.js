import React from 'react';

const Interests = props => {
    const interestsList = props.data.map(interest => {
        return (
            <span>{interest}, </span>
        );
    });
    return(
        <div className="interests">
            <h2 className="text-center">Interests</h2>
            <p className="interestsList">{interestsList}</p>
        </div>
    );
}

export default Interests;