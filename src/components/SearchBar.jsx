import { useScroll } from '../context/ScrollContext';

const SearchBar = ({ isInTopNav = false }) => {
  const { isScrolled } = useScroll();

  if (!isInTopNav && isScrolled) return null;

  return (
    <div className={`search-bar ${isInTopNav ? 'search-bar-top' : ''}`}>
      <input
        type="text"
        placeholder="Search for places, hotels, restaurants..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;