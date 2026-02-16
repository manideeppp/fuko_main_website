// import React, { useState, useEffect, useRef, useCallback } from "react";
// import { Menu, X, Facebook, Instagram } from "lucide-react";
// import { Button } from "./ui/button";
// import { externalLinks } from "../utils/mockData";
// import fukoLogo from "../assets/FUKO_LOGO_ORANGE_transparant.png";

// const Header = () => {
//   const headerRef = useRef(null);

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 60);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const getHeaderOffset = useCallback(() => {
//     // ✅ always use the *real* header height
//     const h = headerRef.current?.offsetHeight ?? 90;
//     return h + 10; // small breathing space
//   }, []);

//   const scrollToSection = useCallback(
//     (sectionId) => {
//       const el = document.getElementById(sectionId);
//       if (!el) return;

//       // close menu first (mobile)
//       setIsMobileMenuOpen(false);

//       // wait 1 frame so layout stabilizes (important!)
//       requestAnimationFrame(() => {
//         const offset = getHeaderOffset();
//         const y = el.getBoundingClientRect().top + window.scrollY - offset;

//         window.scrollTo({
//           top: y,
//           behavior: "smooth",
//         });
//       });
//     },
//     [getHeaderOffset]
//   );

//   const navItems = [
//     { name: "Home", id: "home" },
//     { name: "Menu", id: "menu" },
//     { name: "Location", id: "location" },
//     { name: "Reviews", id: "reviews" },
//     { name: "Contact", id: "contact" },
//   ];

//   return (
//     <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
//       <div
//         className={`transition-all duration-500 ease-out ${
//           isScrolled
//             ? "bg-black/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
//             : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
//           <div className="flex items-center justify-between py-4 sm:py-5">
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
//                 className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto drop-shadow-[0_6px_22px_rgba(0,0,0,0.75)] transition-transform duration-200 group-hover:scale-105"
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
//                 className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out"
//               >
//                 <Facebook size={20} />
//               </a>

//               <a
//                 href={externalLinks.instagram}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//                 className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out"
//               >
//                 <Instagram size={20} />
//               </a>
//             </div>

//             {/* Mobile Button */}
//             <button
//               className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out"
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
//                     className="text-white/95 hover:text-white hover:bg-white/10 font-extrabold uppercase tracking-wide py-3 px-3 rounded-md text-left transition-all duration-300 ease-out"
//                   >
//                     {item.name}
//                   </button>
//                 ))}

//                 <button
//                   onClick={() => scrollToSection("order")}
//                   className="mt-3 bg-[#ff5722] hover:bg-[#ff7849] text-white py-3 rounded-none font-extrabold uppercase tracking-wide transition-colors duration-300 ease-out"
//                 >
//                   Order Now
//                 </button>

//                 <div className="flex justify-center gap-5 mt-4 pt-4 border-t border-white/10">
//                   <a
//                     href={externalLinks.facebook}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 ease-out"
//                   >
//                     <Facebook size={20} />
//                   </a>
//                   <a
//                     href={externalLinks.instagram}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Instagram"
//                     className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 ease-out"
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


import React, { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { externalLinks } from "../utils/mockData";
import fukoLogo from "../assets/FUKO_LOGO_ORANGE_transparant.png";

const Header = () => {
  const headerRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // ✅ keep CSS var updated with real header height (used by scroll-mt)
  useEffect(() => {
    const setHeaderOffsetVar = () => {
      const h = headerRef.current?.offsetHeight ?? 90;
      // add a tiny breathing space like you had (+10)
      document.documentElement.style.setProperty("--header-offset", `${h + 10}px`);
    };

    setHeaderOffsetVar();
    window.addEventListener("resize", setHeaderOffsetVar, { passive: true });

    return () => window.removeEventListener("resize", setHeaderOffsetVar);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    const el = document.getElementById(sectionId);
    if (!el) return;

    setIsMobileMenuOpen(false);

    // ✅ allow the mobile menu to close first, then scroll
    requestAnimationFrame(() => {
      // ensure var is correct even if layout changed
      const h = headerRef.current?.offsetHeight ?? 90;
      document.documentElement.style.setProperty("--header-offset", `${h + 10}px`);

      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "Location", id: "location" },
    { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header ref={headerRef} className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between py-4 sm:py-5">
            {/* Logo */}
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
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out"
              >
                <Facebook size={20} />
              </a>

              <a
                href={externalLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out"
              >
                <Instagram size={20} />
              </a>
            </div>

            {/* Mobile Button */}
            <button
              className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.25)] transition-all duration-300 ease-out"
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
                    className="text-white/95 hover:text-white hover:bg-white/10 font-extrabold uppercase tracking-wide py-3 px-3 rounded-md text-left transition-all duration-300 ease-out"
                  >
                    {item.name}
                  </button>
                ))}

                <button
                  onClick={() => scrollToSection("order")}
                  className="mt-3 bg-[#ff5722] hover:bg-[#ff7849] text-white py-3 rounded-none font-extrabold uppercase tracking-wide transition-colors duration-300 ease-out"
                >
                  Order Now
                </button>

                <div className="flex justify-center gap-5 mt-4 pt-4 border-t border-white/10">
                  <a
                    href={externalLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 ease-out"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href={externalLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-300 ease-out"
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
