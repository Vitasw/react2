import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu.jsx';
import Cart from './Cart.jsx';

const Header = props => {
    return (
        <div className="header">
            <Link to='/'><img src="/img/logo.png" className="header__logo"/></Link>
            <Menu className="header__menu" match={props.match}/>
            <Cart className="header__cart"/>
        </div>
    );
};

export default Header;