// import React, { useState, useEffect } from 'react';
// import { Menu, X, Facebook, Instagram } from 'lucide-react';
// import { Button } from './ui/button';
// import { externalLinks } from '../utils/mockData';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'Menu', id: 'menu' },
//     { name: 'Location', id: 'location' },
//     { name: 'Reviews', id: 'reviews' },
//     { name: 'Contact', id: 'contact' }
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-[#1a1a1a]/98 backdrop-blur-md' : 'bg-[#1a1a1a]'
//       } border-b-2 border-[#ff5722]`}
//     >
//       <div className="max-w-[1400px] mx-auto px-6">
//         <div className="flex justify-between items-center py-3">
//           {/* Logo - Left Side */}
//           <div 
//             className="flex flex-col items-center cursor-pointer group"
//             onClick={() => scrollToSection('home')}
//           >
//             <div className="border-4 border-[#ff5722] px-3 py-1 group-hover:bg-[#ff5722]/10 transition-all duration-200">
//               <div className="flex flex-col items-center">
//                 <span className="text-[#ff5722] text-xl font-bold leading-tight">FU</span>
//                 <span className="text-[#ff5722] text-xl font-bold leading-tight">KO</span>
//               </div>
//             </div>
//             <span className="text-[#ff5722] text-[10px] mt-1 tracking-widest uppercase">Fusion'd Korea</span>
//           </div>

//           {/* Center Navigation - Desktop */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className="text-[#ff5722] hover:text-[#ff7849] transition-colors duration-200 font-medium text-lg"
//               >
//                 {item.name}
//               </button>
//             ))}
//             <button
//               onClick={() => scrollToSection('order')}
//               className="text-[#ff5722] hover:text-[#ff7849] transition-colors duration-200 font-medium text-lg"
//             >
//               Order Now
//             </button>
//           </nav>

//           {/* Right Side - Order Now Button + Social Icons */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <Button 
//               onClick={() => scrollToSection('order')}
//               className="bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-2 rounded-none font-semibold transition-all duration-200"
//             >
//               Order Now
//             </Button>
//             <a
//               href={externalLinks.facebook}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#ff5722] hover:text-[#ff7849] transition-colors"
//             >
//               <Facebook size={24} />
//             </a>
//             <a
//               href={externalLinks.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#ff5722] hover:text-[#ff7849] transition-colors"
//             >
//               <Instagram size={24} />
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-[#ff5722] p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-[#0f0f10] absolute top-full left-0 right-0 border-t-2 border-[#ff5722]/30">
//             <nav className="flex flex-col py-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="text-[#ff5722] hover:bg-[#ff5722]/10 transition-all duration-200 py-3 px-6 text-left"
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <button
//                 onClick={() => scrollToSection('order')}
//                 className="mx-6 mt-4 bg-[#ff5722] hover:bg-[#ff7849] text-white py-3 rounded-none transition-colors duration-200"
//               >
//                 Order Now
//               </button>
//               <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-[#ff5722]/20">
//                 <a
//                   href={externalLinks.facebook}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#ff5722] hover:text-[#ff7849]"
//                 >
//                   <Facebook size={24} />
//                 </a>
//                 <a
//                   href={externalLinks.instagram}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#ff5722] hover:text-[#ff7849]"
//                 >
//                   <Instagram size={24} />
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from 'react';
// import { Menu, X, Facebook, Instagram } from 'lucide-react';
// import { Button } from './ui/button';
// import { externalLinks } from '../utils/mockData';
// import fukoLogo from '../assets/FUKO_LOGO_ORANGE_transparant.png';

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const navItems = [
//     { name: 'Home', id: 'home' },
//     { name: 'Menu', id: 'menu' },
//     { name: 'Location', id: 'location' },
//     { name: 'Reviews', id: 'reviews' },
//     { name: 'Contact', id: 'contact' }
//   ];

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-[#1a1a1a]/98 backdrop-blur-md' : 'bg-[#1a1a1a]'
//       } border-b-2 border-[#ff5722]`}
//     >
//       <div className="max-w-[1400px] mx-auto px-6">
//         <div className="flex justify-between items-center py-3">
          
//           {/* Logo */}
//           <div className="cursor-pointer group" onClick={() => scrollToSection('home')}>
//             <img
//               src={fukoLogo}
//               alt="FUKO - Fusion'd Korea"
//               className="h-16 w-auto transition-transform duration-200 group-hover:scale-105"
//             />
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => scrollToSection(item.id)}
//                 className="text-[#ff5722] hover:text-[#ff7849] transition-colors duration-200 font-medium text-lg"
//               >
//                 {item.name}
//               </button>
//             ))}
//             <button
//               onClick={() => scrollToSection('order')}
//               className="text-[#ff5722] hover:text-[#ff7849] transition-colors duration-200 font-medium text-lg"
//             >
//               Order Now
//             </button>
//           </nav>

//           {/* Desktop Right Side: Button + Social Icons */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <Button
//               onClick={() => scrollToSection('order')}
//               className="bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-2 rounded-none font-semibold transition-all duration-200"
//             >
//               Order Now
//             </Button>
//             <a
//               href={externalLinks.facebook}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#ff5722] hover:text-[#ff7849] transition-colors"
//             >
//               <Facebook size={24} />
//             </a>
//             <a
//               href={externalLinks.instagram}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#ff5722] hover:text-[#ff7849] transition-colors"
//             >
//               <Instagram size={24} />
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-[#ff5722] p-2"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-[#0f0f10] absolute top-full left-0 right-0 border-t-2 border-[#ff5722]/30">
//             <nav className="flex flex-col py-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="text-[#ff5722] hover:bg-[#ff5722]/10 transition-all duration-200 py-3 px-6 text-left"
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <button
//                 onClick={() => scrollToSection('order')}
//                 className="mx-6 mt-4 bg-[#ff5722] hover:bg-[#ff7849] text-white py-3 rounded-none transition-colors duration-200"
//               >
//                 Order Now
//               </button>
//               <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-[#ff5722]/20">
//                 <a
//                   href={externalLinks.facebook}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#ff5722] hover:text-[#ff7849]"
//                 >
//                   <Facebook size={24} />
//                 </a>
//                 <a
//                   href={externalLinks.instagram}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#ff5722] hover:text-[#ff7849]"
//                 >
//                   <Instagram size={24} />
//                 </a>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;



// import React, { useState, useEffect } from "react";
// import { Menu, X, Facebook, Instagram } from "lucide-react";
// import { Button } from "./ui/button";
// import { externalLinks } from "../utils/mockData";
// import fukoLogo from "../assets/FUKO_LOGO_ORANGE_transparant.png";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     const el = document.getElementById(sectionId);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//       setIsMobileMenuOpen(false);
//     }
//   };

//   const navItems = [
//     { name: "Home", id: "home" },
//     { name: "Menu", id: "menu" },
//     { name: "Location", id: "location" },
//     { name: "Reviews", id: "reviews" },
//     { name: "Contact", id: "contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50">
//       {/* ✅ IMPORTANT: no background when NOT scrolled */}
//       <div
//         className={`transition-all duration-300 ${
//           isScrolled
//             ? "bg-black/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
//           <div className="flex items-center justify-between py-3 sm:py-4">
//             {/* Logo */}
//             <button
//               type="button"
//               onClick={() => scrollToSection("home")}
//               className="group flex items-center"
//               aria-label="Go to home"
//             >
//               <img
//                 src={fukoLogo}
//                 alt="FUKO - Fusion'd Korea"
//                 className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto drop-shadow-[0_6px_22px_rgba(0,0,0,0.75)] transition-transform duration-200 group-hover:scale-105"h
//               />
//             </button>

//             {/* Desktop Nav */}
//             <nav className="hidden lg:flex items-center gap-8">
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => scrollToSection(item.id)}
//                   className="text-white/95 hover:text-white font-extrabold uppercase tracking-wide text-[14px] drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)]"
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <button
//                 onClick={() => scrollToSection("order")}
//                 className="text-white/95 hover:text-white font-extrabold uppercase tracking-wide text-[14px] drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)]"
//               >
//                 Order Now
//               </button>
//             </nav>

//             {/* Desktop Right */}
//             <div className="hidden lg:flex items-center gap-3">
//               <Button
//                 onClick={() => scrollToSection("order")}
//                 className="bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-2 rounded-none font-extrabold uppercase tracking-wide shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
//               >
//                 Order Now
//               </Button>

//               <a
//                 href={externalLinks.facebook}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//                 className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
//               >
//                 <Facebook size={20} />
//               </a>

//               <a
//                 href={externalLinks.instagram}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
//               >
//                 <Instagram size={20} />
//               </a>
//             </div>

//             {/* Mobile Button */}
//             <button
//               className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
//               onClick={() => setIsMobileMenuOpen((v) => !v)}
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="lg:hidden bg-black/70 backdrop-blur-xl border-t border-white/10">
//             <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
//               <nav className="flex flex-col">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.id}
//                     onClick={() => scrollToSection(item.id)}
//                     className="text-white/95 hover:text-white hover:bg-white/10 font-extrabold uppercase tracking-wide py-3 px-3 rounded-md text-left transition-all"
//                   >
//                     {item.name}
//                   </button>
//                 ))}

//                 <button
//                   onClick={() => scrollToSection("order")}
//                   className="mt-3 bg-[#ff5722] hover:bg-[#ff7849] text-white py-3 rounded-none font-extrabold uppercase tracking-wide transition-colors"
//                 >
//                   Order Now
//                 </button>

//                 <div className="flex justify-center gap-5 mt-4 pt-4 border-t border-white/10">
//                   <a
//                     href={externalLinks.facebook}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all"
//                   >
//                     <Facebook size={20} />
//                   </a>
//                   <a
//                     href={externalLinks.instagram}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all"
//                   >
//                     <Instagram size={20} />
//                   </a>
//                 </div>
//               </nav>
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { externalLinks } from "../utils/mockData";
import fukoLogo from "../assets/FUKO_LOGO_ORANGE_transparant.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Location", id: "location" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Transparent over carousel; background appears only after scroll */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 sm:py-5">
            {/* Logo (bigger) */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className="group flex items-center"
              aria-label="Go to home"
            >
              <img
                src={fukoLogo}
                alt="FUKO - Fusion'd Korea"
                className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto drop-shadow-[0_6px_22px_rgba(0,0,0,0.75)] transition-transform duration-200 group-hover:scale-105"
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/95 hover:text-white font-extrabold uppercase tracking-wide text-[14px] drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)]"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("order")}
                className="text-white/95 hover:text-white font-extrabold uppercase tracking-wide text-[14px] drop-shadow-[0_3px_12px_rgba(0,0,0,0.75)]"
              >
                Order Now
              </button>
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={() => scrollToSection("order")}
                className="bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-2 rounded-none font-extrabold uppercase tracking-wide shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
              >
                Order Now
              </Button>

              <a
                href={externalLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
              >
                <Facebook size={20} />
              </a>

              <a
                href={externalLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all"
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/70 backdrop-blur-xl border-t border-white/10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-4">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-white/95 hover:text-white hover:bg-white/10 font-extrabold uppercase tracking-wide py-3 px-3 rounded-md text-left transition-all"
                  >
                    {item.name}
                  </button>
                ))}

                <button
                  onClick={() => scrollToSection("order")}
                  className="mt-3 bg-[#ff5722] hover:bg-[#ff7849] text-white py-3 rounded-none font-extrabold uppercase tracking-wide transition-colors"
                >
                  Order Now
                </button>

                <div className="flex justify-center gap-5 mt-4 pt-4 border-t border-white/10">
                  <a
                    href={externalLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={externalLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
