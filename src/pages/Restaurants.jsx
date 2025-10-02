import MainNav from '../components/MainNav';
import SearchBar from '../components/SearchBar';

const Restaurants = () => {
  return (
    <>
      <MainNav />
      <SearchBar />
      <div className="page-content">
        <h1>Restaurants</h1>
        <p>Discover top-rated restaurants and dining experiences.</p>
      </div>
    </>
  );
};

export default Restaurants;