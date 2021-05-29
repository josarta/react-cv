import React from 'react';
import SkillBar from './SkillBar';

import javascript from './stack/javascript.svg';
import node from './stack/node.png';
import python from './stack/python.svg';
import html from './stack/html.svg';
import css from './stack/css.svg';
import creativeCloud from './stack/creative-cloud.svg';
import linux from './stack/linux.svg';

const Stack = ({data}) => {

    // TODO - Make this more modular, and not hard coded
    const iconMap = {
        'Javascript': javascript,
        'NodeJS': node,
        'Python': python,
        'HTML5': html,
        'CSS3': css,
        'Creative Cloud': creativeCloud,
        'Linux': linux
    };

    const stackList = data.map(stack => {
        return(
            <div className="stackItem">
                <div className="iconLabel">
                    <img className="stackIcon" src={iconMap[stack.name]} alt="icon" />
                    <p className="text-left stackLabel">{stack.name}</p>
                </div>
                <div className="competencyBar">
                    <SkillBar width={stack.competencyLevel}/>                  
                </div>                    
            </div>
        );
    });
    return(
        <div className="stack">
            <h2 className="text-center">Tech Stack</h2>
            <div className="stackList">
                {stackList}                
            </div>
        </div>
    );
}

export default Stack;