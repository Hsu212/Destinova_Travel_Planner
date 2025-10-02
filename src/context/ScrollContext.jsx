import { createContext, useContext, useEffect, useState } from 'react';

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 110); // Trigger when scrolled past TopNav (60px) + MainNav (50px)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ isScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};