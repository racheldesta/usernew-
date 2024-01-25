import React from 'react';
import './Toolbar.css';

const Toolbar = (props) => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div></div>
            <div className="toolbar__logo"><a href="/">THE LOGO</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Profile Picture</a></li>
                    <li><a href="/">Login/Logout</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;
