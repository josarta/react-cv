import React from 'react';

const Education = ({data}) => {
    const educationList = data.map(item => {
        return (
            <div className="educationItem">
                {/* <h3><span className="educationInfo">{item.level}</span>  {item.name}</h3> */}
                <div className="flexLine">
                    <h3 className="header3">{item.name}</h3>
                    <p className="text-right experienceYears">{item.years}</p>                    
                </div>
                <p className="text-left">{item.credit}</p>
            </div>
        );
    });

    return(
        <div className="Education">
            <h2 className="blockHeader">Education</h2>
            <div className="educationItems">
                {educationList}
            </div>
        </div>
    );
}

export default Education;