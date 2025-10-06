import { useScroll } from '../context/ScrollContext';

const SearchBar = ({ isInTopNav = false }) => {
  const { isScrolled } = useScroll();

  return (
    <div
      className={`search-bar ${isInTopNav ? 'search-bar-top' : ''} ${
        isScrolled && !isInTopNav ? 'search-bar-transition' : ''
      }`}
    >
      <input
        type="text"
        placeholder="Search for places..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
