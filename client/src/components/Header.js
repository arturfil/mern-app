import React, { Component } from 'react';

class Header extends Component {
    render () {
        return (
            <nav>
                <div className="container">
                    <a className="nav-wrapper">BeerGlass</a>
                    <ul className="right">
                        <li>
                            <a >Google Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
};

export default Header;