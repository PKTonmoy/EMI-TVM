import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Breakdown } from './pages/Breakdown';
import { TVMHub } from './pages/TVMHub';
import { Formulas } from './pages/Formulas';
import { Navigation } from './components/layout/Navigation';
import { useThemeStore } from './store/themeStore';
import './styles/global.css';
import './App.css';

function App() {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    // Initial check
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    // Set initial theme
    setTheme(mediaQuery.matches ? 'dark' : 'light');

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  return (
    <Router>
      <div className="app">
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/tvm" element={<TVMHub />} />
            <Route path="/formulas" element={<Formulas />} />
          </Routes>
        </div>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
