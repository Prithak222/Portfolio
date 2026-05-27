import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = ['home', 'about', 'experience', 'education', 'portfolio', 'skills', 'contact'];
      const scrollPos = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', target: 'home' },
    { label: 'About Me', target: 'about' },
    { label: 'Experience', target: 'experience' },
    { label: 'Education', target: 'education' },
    { label: 'Portfolio', target: 'portfolio' },
    { label: 'Skills', target: 'skills' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          Binod Prasad Adhikari
        </a>

        <div className="hamburger" onClick={handleClick}>
          {click ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>

        <nav className={`nav-menu ${click ? 'active' : ''}`}>
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.target}`}
              className={`nav-link ${activeSection === item.target ? 'active' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
