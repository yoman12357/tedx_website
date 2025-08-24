import React, { useState } from 'react';
import '../mainstyles.css'; // Assuming global CSS file

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">TEDxNITK Surathkal</div>

      <div 
        className={`menu-toggle ${menuOpen ? 'open' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Toggle menu" 
        aria-expanded={menuOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') toggleMenu(); }}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#salon" onClick={closeMenu}>Salon</a></li>
        <li><a href="#theme" onClick={closeMenu}>Theme</a></li>
        <li><a href="#past-editions" onClick={closeMenu}>Past Editions</a></li>
        <li><a href="#talk-archives" onClick={closeMenu}>Talk Archives</a></li>
        <li><a href="#team" onClick={closeMenu}>Team</a></li>
        <li><a href="#partners" onClick={closeMenu}>Partners</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        <li><a href="#game" onClick={closeMenu}>Game</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
