import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-title">Bookstore CMS</Link>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">BOOKS</Link>
        </li>
        <li className="navbar-item">
          <Link to="/categories" className="navbar-link">CATEGORIES</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
