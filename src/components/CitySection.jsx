import { useFavorites } from '../context/FavoriteContext';

const CitySection = ({ city, places }) => {
  const { addFavorite, removeFavorite, favorites } = useFavorites();

  return (
    <div className="city-section">
      <h2 className="city-title">{city}</h2>
      <div className="places-grid">
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img src={place.photo} alt={place.name} className="place-image" />
            <div className="place-content">
              <h3 className="place-name">{place.name}</h3>
              <p className="place-desc">{place.desc}</p>
              <p className="place-rating">Rating: {place.rating} / 5</p>
              <button
                className="favorite-btn"
                onClick={() =>
                  favorites.some((fav) => fav.name === place.name)
                    ? removeFavorite(place.name)
                    : addFavorite(place)
                }
              >
                {favorites.some((fav) => fav.name === place.name) ? '❤️' : '♡'}
              </button>
              <button className="map-btn">🗺️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitySection;
