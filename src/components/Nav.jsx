import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../styles/Nav.css';

const Nav = () => (
  <nav className="nav-bar">
    <ul>
      <li>Bookstore CMS</li>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/Categories">CATEGORIES</Link></li>
    </ul>
    <div className="user-icon">
      <FaUser style={{
        width: 20, height: 20, color: '#0290ff',
      }}
      />
    </div>
  </nav>
);

export default Nav;
