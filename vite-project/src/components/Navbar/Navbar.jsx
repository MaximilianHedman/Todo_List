import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <div className="brand-container">
                <h2>Maximilian Hedman</h2>
            </div>
            <div className='nav-links-container'>
                <ul className='nav-links-mobile'>
                    <li>
                        <Link to='/' className='navbar-link'>
                            <FontAwesomeIcon icon={['fas', 'bars']} />
                        </Link>
                    </li>
                </ul>
                <ul className='nav-links-desktop'>
                    <li>
                        <Link to='/' className='navbar-link'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about' className='navbar-link'>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar