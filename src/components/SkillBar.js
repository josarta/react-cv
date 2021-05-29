import React from 'react';

const SkillBar = props => {
    const style = {
        content: '',
        display: 'block',
        'background-color': '#2c3e50',
        width: `${props.width}%`,
        height: '15px'
    };

    return(
        <div className="skillBarBorder">
            <div className="skillBarFill" style={style}></div>
        </div>
    );
}

export default SkillBar;