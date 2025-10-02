import MainNav from '../components/MainNav';
import SearchBar from '../components/SearchBar';

const Hotels = () => {
  return (
    <>
      <MainNav />
      <SearchBar />
      <div className="page-content">
        <h1>Hotels</h1>
        <p>Find the perfect hotel for your stay. Inspired by Tripadvisor reviews.</p>
      </div>
    </>
  );
};

export default Hotels;