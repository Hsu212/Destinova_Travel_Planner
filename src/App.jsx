import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import { useEffect } from 'react';
import './index.css';

function NavHandler() {
  const { pathname } = useLocation(); // Get current route pathname

  useEffect(() => {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      const href = item.getAttribute('href');
      // Handle root path and other routes
      const isActive = href === pathname || (href === '/' && pathname === '');
      if (isActive) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }, [pathname]); // Re-run when pathname changes

  return null; // This component only handles logic, no rendering
}

function App() {
  return (
    <ThemeProvider>
      <FavoriteProvider>
        <ScrollProvider>
          <Router>
            <NavHandler /> {/* Add NavHandler inside Router */}
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
