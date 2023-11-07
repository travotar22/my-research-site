import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationMenu.css';

const NavigationMenu = () => {
    return (
        <nav>
            <ul>
                <li><NavLink exact to="/" activeClassName="active">About</NavLink></li>
                <li><NavLink to="/research" activeClassName="active">Research</NavLink></li>
                <li><NavLink to="/documentation" activeClassName="active">Documentation</NavLink></li> 
                <li><NavLink to="/contact" activeClassName="active">About US</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavigationMenu;
