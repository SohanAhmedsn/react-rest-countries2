import React, { memo } from 'react';
import './Header.css';

const Header = memo(() => {
    return (
        <div>
            <nav className="menu">
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About</a>
            </nav>
            <p className="subtitle">Visit our page</p>
        </div>
    );
});

export default Header;