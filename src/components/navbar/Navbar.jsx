import React from 'react';
import './Navbar.css';

function navbar() {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <h1 className="title-navbar">Bookstore CMS</h1>
        <ul className="list-navbar">
          <li className="list-item-navbar">BOOKS</li>
          <li className="list-item-navbar">CATEGORIES</li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
