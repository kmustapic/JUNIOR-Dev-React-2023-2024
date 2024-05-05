import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li>Radionice</li>
        <li>Predavači</li>
        <li>Administracija</li>
      </ul>
      <div className="navbar-right">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round">Admin</span>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;