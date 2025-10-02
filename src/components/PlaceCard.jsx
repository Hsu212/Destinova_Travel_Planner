import { FaHeart, FaMapMarkerAlt } from 'react-icons/fa';
import { useFavorites } from '../context/FavoriteContext';

const PlaceCard = ({ place }) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some(fav => fav.name === place.name);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(place.name);
    } else {
      addFavorite(place);
    }
  };

  const viewMap = () => {
    // In a real app, this could open a modal with Google Maps embed using place.lat and place.lng
    // For now, alert or console
    alert(`Viewing map for ${place.name} at lat: ${place.lat}, lng: ${place.lng}`);
    // Alternatively: window.open(`https://maps.google.com/?q=${place.lat},${place.lng}`, '_blank');
  };

  return (
    <div className="place-card">
      <img src={place.photo} alt={place.name} className="place-image" />
      <div className="place-content">
        <h3 className="place-name">{place.name}</h3>
        <p className="place-desc">{place.desc}</p>
        <p className="place-rating">Rating: {place.rating} / 5</p>
      </div>
      <button className="favorite-btn" onClick={toggleFavorite}>
        <FaHeart color={isFavorite ? 'red' : 'gray'} />
      </button>
      <button className="map-btn" onClick={viewMap}>
        <FaMapMarkerAlt />
      </button>
    </div>
  );
};

export default PlaceCard;