import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.scss';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav>
            <div className="brand-container">
                <h2>Maximilian Hedman</h2>
                <button className='menu-toggle' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={['fas', 'bars']} />
                </button>
            </div>

            <div className='nav-links-container'>
                <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <Link to='/' className='navbar-link' onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about' className='navbar-link' onClick={() => setMenuOpen(false)}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>

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
    );
}

export default Navbar;