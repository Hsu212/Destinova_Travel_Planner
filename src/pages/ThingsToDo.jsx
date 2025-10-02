import MainNav from '../components/MainNav';
import SearchBar from '../components/SearchBar';
import CitySection from '../components/CitySection';

const mockData = [
  {
    city: 'Paris, France',
    places: [
      {
        name: 'Eiffel Tower',
        photo: 'https://source.unsplash.com/random/300x200/?eiffel',
        desc: 'Iconic iron lattice tower.',
        rating: 4.7,
        lat: 48.8584,
        lng: 2.2945,
      },
    ],
  },
];

const ThingsToDo = () => {
  return (
    <>
      <MainNav />
      <SearchBar />
      <div className="page-content">
        <h1>Things to Do</h1>
        <p>Explore amazing activities and attractions around the world.</p>
        {mockData.map((section, index) => (
          <CitySection key={index} city={section.city} places={section.places} />
        ))}
      </div>
    </>
  );
};

export default ThingsToDo;