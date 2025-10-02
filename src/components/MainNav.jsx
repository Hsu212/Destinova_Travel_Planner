import { Link } from 'react-router-dom';

const MainNav = () => {
  return (
    <nav className="main-nav">
      <h1 className="logo">Destinova</h1>
      <div className="nav-links">
        <Link to="/" className="nav-item">All</Link>
        <Link to="/things-to-do" className="nav-item">Things to Do</Link>
        <Link to="/hotels" className="nav-item">Hotels</Link>
        <Link to="/restaurants" className="nav-item">Restaurants</Link>
      </div>
    </nav>
  );
};

export default MainNav;