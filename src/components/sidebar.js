import React from 'react';
import logo from '../img/logo.svg';
import './sidebar.scss';
const Sidebar = () => {

       return <aside className="side-naviguation">
           <div >
                <a href="#" className="brand">
                    <img src={logo} alt="logo" />
                </a>
           </div>

           <div >
            <ul className="vertical-nav">
                <li className = "item"><a href="#">01</a></li>
                <li className = "item"><a href="#">02</a></li>
                <li className = "item"><a href="#">03</a></li>
                <li className = "item"><a href="#">04</a></li>
                <li className = "item"><a href="#">05</a></li>
            </ul>
        </div>
        </aside>
}

export default Sidebar;