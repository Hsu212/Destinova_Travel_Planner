import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../index.css';

const TopNav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`top-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="top-nav-content">
        <div className="right-content">
          <h1 className="logo">Destinova</h1>
          <div className="language-select">
            <select>
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>
          </div>
          <div className="user-actions">
            <button className="auth-btn">Sign In</button>
            <button className="auth-btn">Sign Up</button>
          </div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      <div className={scrolled ? 'search-bar-top' : 'search-bar'}>
        <input className="search-input" placeholder="Search for places..." />
      </div>
    </header>
  );
};

export default TopNav;
