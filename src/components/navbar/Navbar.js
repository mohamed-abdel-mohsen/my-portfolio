import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { menuLinks } from '../../constant/Constant';

const Navbar = () => {
    const [click, setClick] = useState(false);

    return (
        <div className="header">
            <Link to="/" className="main__logo">
                <h1>Portfolio</h1>
            </Link>
            <ul className={click ? 'nav__menu active' : 'nav__menu'}>
                {menuLinks.map(({ url, name }, index) => (
                    <li key={index}>
                        <Link to={url}>{name}</Link>
                    </li>
                ))}
            </ul>
            <div className="hamburger" onClick={() => setClick(!click)}>
                {click ? <FaTimes size={20} style={{ color: '#fff' }} /> : <FaBars size={20} style={{ color: '#fff' }} />}
            </div>
        </div>
    );
};

export default Navbar;
