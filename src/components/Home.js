
import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import './home.scss';

class Home extends React.Component{
    render(){
        return <div className="home">
                <Sidebar />
                <Navbar />
        </div>
    }
}

export default Home;