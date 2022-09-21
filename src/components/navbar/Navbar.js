import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">Bookstore CMS</Link>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Books</Link>
        </li>
        <li className="navbar-item">
          <Link to="/categories" className="navbar-link">Categories</Link>
        </li>
      </ul>
    </div>
  </nav>
);

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="container-navbar">
//         <h1 className="title-navbar">Bookstore CMS</h1>
//         <ul className="list-navbar">
//           <li><Link to="/" className="list-item-navbar">BOOKS</Link></li>
//           <li><Link to="/categories" className="list-item-navbar">CATEGORIES</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

export default Navbar;
