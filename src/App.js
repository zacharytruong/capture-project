import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';
import { AnimatePresence } from 'framer-motion';
import ScrollTop from './components/ScrollTop';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
      <ScrollTop />
    </div>
  );
}

export default App;
