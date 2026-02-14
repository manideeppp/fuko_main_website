import React from 'react';
import Header from './components/Header';
import HeroCarousel from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import Menu from './components/Menu';
import OrderSection from './components/OrderSection';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  return (
    <div className="App bg-black">
      <Header />
      <HeroCarousel />
      <AboutSection />
      <Menu />
      <OrderSection />
      <Location />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;


// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App" style={{ 
//       backgroundColor: '#000', 
//       color: '#fff', 
//       minHeight: '100vh',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       fontSize: '2rem'
//     }}>
//       <h1>🍜 FUKO Restaurant - TEST MODE</h1>
//     </div>
//   );
// }

// export default App;