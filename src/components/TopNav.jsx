import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { useScroll } from '../context/ScrollContext';
import SearchBar from './SearchBar';

const TopNav = () => {
  const { theme, toggleTheme } = useTheme();
  const { isScrolled } = useScroll();

  return (
    <nav className={`top-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="language-select">
        <select>
          <option>EN</option>
          <option>FR</option>
          <option>ES</option>
        </select>
      </div>
      <div className="top-nav-content">
        {isScrolled && <SearchBar isInTopNav={true} />}
        <div className="user-actions">
          <button className="auth-btn">Sign In</button>
          <button className="auth-btn">Sign Up</button>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;