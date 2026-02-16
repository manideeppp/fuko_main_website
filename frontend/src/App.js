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


// import React from "react";
// import Header from "./components/Header";
// import HeroCarousel from "./components/HeroCarousel";
// import AboutSection from "./components/AboutSection";
// import Menu from "./components/Menu";
// import OrderSection from "./components/OrderSection";
// import Location from "./components/Location";
// import Reviews from "./components/Reviews";
// import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import { Toaster } from "./components/ui/sonner";
// import useReveal from "./hooks/useReveal";
// import "./App.css";

// function App() {
//   useReveal();

//   return (
//     <div className="App bg-black">
//       <Header />

//       {/* Add `reveal` to sections (or inside each component’s top section) */}
//       <div className="reveal">
//         <HeroCarousel />
//       </div>

//       <div className="reveal">
//         <AboutSection />
//       </div>

//       <div className="reveal">
//         <Menu />
//       </div>

//       <div className="reveal">
//         <OrderSection />
//       </div>

//       <div className="reveal">
//         <Location />
//       </div>

//       <div className="reveal">
//         <Reviews />
//       </div>

//       <div className="reveal">
//         <Gallery />
//       </div>

//       <div className="reveal">
//         <Contact />
//       </div>

//       <div className="reveal">
//         <Footer />
//       </div>

//       <Toaster position="top-right" />
//     </div>
//   );
// }

// export default App;
