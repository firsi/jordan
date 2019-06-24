import React from 'react';
import './navbar.scss';

const Navbar = () => {

    return <nav className="horizontal-nav"> 
            <div className="left-menu">
                <ul className="naviguation">
                    <li className="nav-item"><a href="#">Man</a></li>
                    <li className="nav-item"><a href="#">Woman</a></li>
                    <li className="nav-item"><a href="#">Customize</a></li>
                    <li className="nav-item"><a href="#">History</a></li>
                </ul>
            </div>

            <div className="right-menu">
            <ul className="naviguation">
                    <li className="nav-item"><a href="#">Search</a></li>
                    <li className="nav-item"><a href="#">Hamburger</a></li>
                    
                </ul>
            </div>

                
            </nav>
}

export default Navbar;