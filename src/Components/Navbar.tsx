import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <Link to="/home">
                <img src={logo} alt='Logo' className='logo' />
            </Link>

            <ul>
                <li className="nav-item">
                    <Link to="/home">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link to="/charts">Charts</Link>
                </li>
                
            </ul>
        </div>
    );
};

export default Navbar;