import React from 'react';

const Experience = ({data}) => {
    const experienceList = data.map(item => {
        return(
            <div className="experienceItem">
                <h3 className="header3">{item.company}</h3>
                <div className="flexLine">
                    <h4 className="header4 text-left">{item.position}</h4>
                    <p className="text-right">{item.years}</p>
                </div>
                <p>{item.description}</p>
            </div>
        );
    });
    return(
        <div className="Experience">
            <h2 className="blockHeader">Experience</h2>
            <div className="experienceItems">
                {experienceList}                
            </div>
        </div>
    );
}

export default Experience;