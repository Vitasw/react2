import React from 'react';
import Menu from './Menu.jsx';

const Footer = props => {
    return (
        <div className="footer">
            <div className="footer__copyright">
                Company.Ru &ndash; 2017
            </div>
            <Menu className="footer__menu" match={props.match}/>
        </div>
    )
};

export default Footer;