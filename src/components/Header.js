import React from 'react';
import './Header.css'; // make sure to link the correct path to your CSS file

const Header = ({ title }) => {
    return (
        <header className="site-header">
            <img src="/Logo.png" alt="Logo" className="header-logo" />
            <h1 className="header-title">{title}</h1>
        </header>
    );
};

export default Header;

