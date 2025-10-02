import { useFavorites } from '../context/FavoriteContext';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="page-content">
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="favorites-list">
          {favorites.map((place, index) => (
            <div key={index} className="place-card">
              <h2>{place.name}</h2>
              <p>{place.desc}</p>
              <p className="place-rating">Rating: {place.rating} / 5</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;