import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <h1 className="title-navbar">Bookstore CMS</h1>
        <ul className="list-navbar">
          <li><Link to="/" className="list-item-navbar">BOOKS</Link></li>
          <li><Link to="/categories" className="list-item-navbar">CATEGORIES</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
