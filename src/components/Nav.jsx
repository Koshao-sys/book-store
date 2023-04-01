import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="nav-bar">
    <ul>
      <li>BookStore CMS</li>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/">CATEGORIES</Link></li>
    </ul>
  </nav>
);

export default Nav;
