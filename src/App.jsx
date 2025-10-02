import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoriteProvider } from './context/FavoriteContext';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollProvider } from './context/ScrollContext';
import TopNav from './components/TopNav';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import ThingsToDo from './pages/ThingsToDo';
import Hotels from './pages/Hotels';
import Restaurants from './pages/Restaurants';

function App() {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <ScrollProvider>
          <Router>
            <TopNav />
            <main className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/things-to-do" element={<ThingsToDo />} />
                <Route path="/hotels" element={<Hotels />} />
                <Route path="/restaurants" element={<Restaurants />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </main>
          </Router>
        </ScrollProvider>
      </FavoriteProvider>
    </ThemeProvider>
  );
}

export default App;
