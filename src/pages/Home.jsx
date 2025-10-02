import CitySection from '../components/CitySection';
import MainNav from '../components/MainNav';
import SearchBar from '../components/SearchBar';

const mockData = [
  {
    city: 'Paris, France',
    places: [
      {
        name: 'Eiffel Tower',
        photo: 'https://source.unsplash.com/random/300x200/?eiffel',
        desc: 'Iconic iron lattice tower on the Champ de Mars, named after engineer Gustave Eiffel.',
        rating: 4.7,
        lat: 48.8584,
        lng: 2.2945,
      },
      {
        name: 'Louvre Museum',
        photo: 'https://source.unsplash.com/random/300x200/?louvre',
        desc: "World's largest art museum and a historic monument in Paris.",
        rating: 4.8,
        lat: 48.8606,
        lng: 2.3376,
      },
    ],
  },
  {
    city: 'New York, USA',
    places: [
      {
        name: 'Statue of Liberty',
        photo: 'https://source.unsplash.com/random/300x200/?liberty',
        desc: 'Colossal neoclassical sculpture on Liberty Island in New York Harbor.',
        rating: 4.6,
        lat: 40.6892,
        lng: -74.0445,
      },
      {
        name: 'Central Park',
        photo: 'https://source.unsplash.com/random/300x200/?centralpark',
        desc: 'Urban park in Manhattan, one of the most filmed locations in the world.',
        rating: 4.8,
        lat: 40.7851,
        lng: -73.9683,
      },
    ],
  },
];

const Home = () => {
  return (
    <>
      <MainNav />
      <SearchBar />
      <div className="home-content">
        <h1>Welcome to Destinova</h1>
        <p>Discover amazing places inspired by Tripadvisor's billions of reviews for hotels, attractions, and more.</p>
        {mockData.map((section, index) => (
          <CitySection key={index} city={section.city} places={section.places} />
        ))}
      </div>
    </>
  );
};

export default Home;