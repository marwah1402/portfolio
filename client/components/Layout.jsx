import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <>
      <header className="navbar">
        <div className="logo">M</div>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/education">Services</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      {children}
    </>
  );
}