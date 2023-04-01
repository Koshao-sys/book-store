import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

const Nav = () => (
  <nav className="nav-bar">
    <ul>
      <li>BookStore CMS</li>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/Categories">CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default Nav;
