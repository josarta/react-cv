import React from 'react';

import email from './links/email.svg';
import phone from './links/phone.svg';
import website from './links/website.svg';
import github from './links/github.svg';

const Links = (props) => {
    const iconMap = {
        email,
        phone,
        website,
        github
    };
    const linksList = props.data.map(link => {
        console.log(iconMap[link.type]);
        return (
            <div key={link.type} className="linkContainer">
                <img src={iconMap[link.type]} className="linkIcon" alt="link-icon"/>
                <p className="linkText">{link.value}</p>
            </div>
        );
    });

    return(
        <div className="links">
            {linksList}
        </div>
    );
}

export default Links;