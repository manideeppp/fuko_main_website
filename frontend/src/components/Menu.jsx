


// import React, { useMemo, useState, useEffect } from "react";
// import { menuCategories } from "../utils/mockData";
// import { Flame, TrendingUp, FileText } from "lucide-react";
// import { Card, CardContent } from "./ui/card";
// import { Badge } from "./ui/badge";
// import menuPdf from "../assets/Menu.pdf";

// const Menu = () => {
//   const [selectedCategory, setSelectedCategory] = useState(
//     menuCategories[0]?.id
//   );
//   const [particles, setParticles] = useState([]);

//   const currentCategory = useMemo(
//     () => menuCategories.find((cat) => cat.id === selectedCategory),
//     [selectedCategory]
//   );

//   // Generate soft bokeh particles
//   useEffect(() => {
//     const generateParticles = () => {
//       const newParticles = [];
//       for (let i = 0; i < 12; i++) {
//         newParticles.push({
//           id: i,
//           left: Math.random() * 100,
//           top: Math.random() * 100,
//           size: Math.random() * 3 + 2,
//           duration: Math.random() * 15 + 20,
//           delay: Math.random() * 8,
//           opacity: Math.random() * 0.15 + 0.05,
//         });
//       }
//       setParticles(newParticles);
//     };
//     generateParticles();
//   }, []);

//   return (
//     <section
//       id="menu"
//       className="relative pt-10 md:pt-12 pb-10 md:pb-12 flex items-center overflow-hidden"
//       style={{
//         minHeight: "calc(100vh - 110px)",
//         background: "linear-gradient(135deg, #071428 0%, #081a33 100%)",
//       }}
//     >
//       {/* ========== LAYERED BACKGROUND ========== */}

//       {/* Layer 1: Vignette Edges */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.4) 100%)",
//         }}
//       />

//       {/* Layer 2: Subtle Korean Lattice Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(
//               45deg,
//               transparent,
//               transparent 20px,
//               rgba(255, 255, 255, 0.3) 20px,
//               rgba(255, 255, 255, 0.3) 21px
//             ),
//             repeating-linear-gradient(
//               -45deg,
//               transparent,
//               transparent 20px,
//               rgba(255, 255, 255, 0.3) 20px,
//               rgba(255, 255, 255, 0.3) 21px
//             )
//           `,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Layer 3: Subtle Gradient Movement */}
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           background:
//             "radial-gradient(circle at 30% 40%, rgba(100, 150, 200, 0.08) 0%, transparent 50%)",
//           animation: "gradientShift 22s ease-in-out infinite",
//         }}
//       />

//       {/* Layer 4: Soft Spotlight Glows */}
//       <div
//         className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(220, 200, 180, 0.3) 0%, transparent 70%)",
//           filter: "blur(80px)",
//           animation: "spotlightDrift 30s ease-in-out infinite",
//         }}
//       />
//       <div
//         className="absolute bottom-0 right-1/3 w-[500px] h-[500px] rounded-full opacity-4"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(180, 190, 210, 0.25) 0%, transparent 70%)",
//           filter: "blur(100px)",
//           animation: "spotlightDrift 35s ease-in-out infinite reverse",
//         }}
//       />

//       {/* Layer 5: Floating Bokeh Particles */}
//       {particles.map((particle) => (
//         <div
//           key={particle.id}
//           className="absolute rounded-full"
//           style={{
//             left: `${particle.left}%`,
//             top: `${particle.top}%`,
//             width: `${particle.size}px`,
//             height: `${particle.size}px`,
//             background: "rgba(240, 235, 220, 0.6)",
//             opacity: particle.opacity,
//             filter: "blur(2px)",
//             animation: `gentleDrift ${particle.duration}s ease-in-out infinite`,
//             animationDelay: `${particle.delay}s`,
//           }}
//         />
//       ))}

//       {/* Layer 6: Floating Korean Food Icons (CLEAR + MOVING + GLOW) */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {/* Ramen Bowl - Top Left */}
//         <div
//           className="absolute opacity-[0.30] icon-float icon-glow"
//           style={{
//             top: "8%",
//             left: "6%",
//             width: "92px",
//             height: "92px",
//             animation: "floatIcon1 18s ease-in-out infinite",
//           }}
//         >
//           <svg
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <ellipse cx="50" cy="65" rx="35" ry="8" fill="rgba(230,220,210,0.9)" />
//             <path
//               d="M 15 65 Q 15 85 50 88 Q 85 85 85 65"
//               fill="rgba(245,240,235,0.9)"
//               stroke="rgba(212,175,55,0.55)"
//               strokeWidth="1.8"
//             />
//             <circle cx="45" cy="60" r="3.2" fill="rgba(255,245,205,0.95)" />
//             <circle cx="55" cy="58" r="3.2" fill="rgba(255,245,205,0.95)" />
//             <circle cx="50" cy="55" r="3.2" fill="rgba(255,245,205,0.95)" />
//             <line
//               x1="30"
//               y1="35"
//               x2="40"
//               y2="60"
//               stroke="rgba(190,165,135,0.95)"
//               strokeWidth="2.4"
//               strokeLinecap="round"
//             />
//             <line
//               x1="35"
//               y1="33"
//               x2="45"
//               y2="58"
//               stroke="rgba(190,165,135,0.95)"
//               strokeWidth="2.4"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>

//         {/* Chopsticks - Top Right */}
//         <div
//           className="absolute opacity-[0.26] icon-float icon-glow"
//           style={{
//             top: "12%",
//             right: "8%",
//             width: "86px",
//             height: "86px",
//             animation: "floatIcon2 20s ease-in-out infinite",
//           }}
//         >
//           <svg
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <line
//               x1="30"
//               y1="10"
//               x2="40"
//               y2="90"
//               stroke="rgba(230,215,195,0.95)"
//               strokeWidth="3.2"
//               strokeLinecap="round"
//             />
//             <line
//               x1="60"
//               y1="10"
//               x2="70"
//               y2="90"
//               stroke="rgba(230,215,195,0.95)"
//               strokeWidth="3.2"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>

//         {/* Kimchi Bowl - Bottom Left */}
//         <div
//           className="absolute opacity-[0.28] icon-float icon-glow"
//           style={{
//             bottom: "15%",
//             left: "10%",
//             width: "84px",
//             height: "84px",
//             animation: "floatIcon3 19s ease-in-out infinite",
//           }}
//         >
//           <svg
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <ellipse cx="50" cy="55" rx="30" ry="7" fill="rgba(230,220,210,0.9)" />
//             <path
//               d="M 20 55 Q 20 75 50 77 Q 80 75 80 55"
//               fill="rgba(245,240,235,0.9)"
//               stroke="rgba(212,175,55,0.55)"
//               strokeWidth="1.8"
//             />
//             <circle cx="45" cy="50" r="4.2" fill="rgba(255,120,95,0.75)" />
//             <circle cx="55" cy="48" r="4.2" fill="rgba(255,120,95,0.75)" />
//             <circle cx="50" cy="52" r="3.6" fill="rgba(240,105,80,0.75)" />
//           </svg>
//         </div>

//         {/* Dumplings - Bottom Right */}
//         <div
//           className="absolute opacity-[0.32] icon-float icon-glow"
//           style={{
//             bottom: "10%",
//             right: "12%",
//             width: "92px",
//             height: "92px",
//             animation: "floatIcon4 17s ease-in-out infinite",
//           }}
//         >
//           <svg
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <ellipse cx="35" cy="55" rx="15" ry="10" fill="rgba(250,245,235,0.92)" />
//             <path
//               d="M 20 55 Q 35 45 50 55"
//               stroke="rgba(212,175,55,0.50)"
//               strokeWidth="1.8"
//               fill="none"
//             />
//             <ellipse cx="60" cy="58" rx="15" ry="10" fill="rgba(250,245,235,0.92)" />
//             <path
//               d="M 45 58 Q 60 48 75 58"
//               stroke="rgba(212,175,55,0.50)"
//               strokeWidth="1.8"
//               fill="none"
//             />
//           </svg>
//         </div>

//         {/* Soy Sauce Dish - Mid Right */}
//         <div
//           className="absolute opacity-[0.24] icon-float icon-glow"
//           style={{
//             top: "45%",
//             right: "5%",
//             width: "78px",
//             height: "78px",
//             animation: "floatIcon5 22s ease-in-out infinite",
//           }}
//         >
//           <svg
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <ellipse cx="50" cy="50" rx="25" ry="5" fill="rgba(235,225,215,0.9)" />
//             <ellipse cx="50" cy="50" rx="20" ry="4" fill="rgba(90,80,70,0.65)" />
//           </svg>
//         </div>

//         {/* Rice Bowl - Mid Left */}
//         <div
//           className="absolute opacity-[0.26] icon-float icon-glow"
//           style={{
//             top: "50%",
//             left: "7%",
//             width: "88px",
//             height: "88px",
//             animation: "floatIcon6 18.5s ease-in-out infinite",
//           }}
//         >
//           <svg
//             viewBox="0 0 100 100"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <ellipse cx="50" cy="60" rx="28" ry="7" fill="rgba(230,220,210,0.9)" />
//             <path
//               d="M 22 60 Q 22 78 50 80 Q 78 78 78 60"
//               fill="rgba(245,240,235,0.9)"
//               stroke="rgba(212,175,55,0.55)"
//               strokeWidth="1.8"
//             />
//             <circle cx="45" cy="55" r="2.7" fill="rgba(255,250,240,0.95)" />
//             <circle cx="52" cy="53" r="2.7" fill="rgba(255,250,240,0.95)" />
//             <circle cx="55" cy="56" r="2.7" fill="rgba(255,250,240,0.95)" />
//             <circle cx="48" cy="58" r="2.7" fill="rgba(255,250,240,0.95)" />
//           </svg>
//         </div>
//       </div>

//       {/* ========== MAIN CONTENT ========== */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         {/* Header */}
//         <div className="text-center mb-6 md:mb-8">
//           <h2
//             className="text-4xl md:text-5xl font-serif font-bold text-white mb-2"
//             style={{ letterSpacing: "0.02em" }}
//           >
//             Our <span className="text-[#d4af37]">Menu</span>
//           </h2>

//           <p className="text-gray-300/80 text-base md:text-lg max-w-2xl mx-auto">
//             Discover our fusion masterpieces — where Korean tradition meets
//             global innovation
//           </p>
//         </div>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-7">
//           {menuCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`
//                 relative px-5 py-2.5 rounded-lg font-medium
//                 transition-all duration-300
//                 text-sm md:text-base
//                 ${
//                   selectedCategory === category.id
//                     ? "text-white shadow-lg"
//                     : "text-gray-300 hover:text-white hover:bg-white/5"
//                 }
//               `}
//               style={{
//                 background:
//                   selectedCategory === category.id
//                     ? "rgba(212, 175, 55, 0.15)"
//                     : "rgba(255, 255, 255, 0.03)",
//                 backdropFilter: "blur(10px)",
//                 border:
//                   selectedCategory === category.id
//                     ? "1px solid rgba(212, 175, 55, 0.3)"
//                     : "1px solid rgba(255, 255, 255, 0.08)",
//               }}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {currentCategory && (
//           <>
//             {/* Category Banner */}
//             <div
//               className="relative h-36 md:h-40 rounded-2xl overflow-hidden mb-6 group"
//               style={{
//                 border: "1px solid rgba(255, 255, 255, 0.1)",
//                 boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
//               }}
//             >
//               <img
//                 src={`${currentCategory.image}?w=1400&q=80`}
//                 alt={currentCategory.name}
//                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
//                 <div className="p-5 md:p-6">
//                   <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
//                     {currentCategory.name}
//                   </h3>
//                   <p className="text-gray-200/90 text-sm md:text-base">
//                     {currentCategory.description}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Menu Items */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {currentCategory.items.slice(0, 3).map((item, index) => (
//                 <Card
//                   key={item.id}
//                   className="relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] group"
//                   style={{
//                     background: "rgba(255, 255, 255, 0.04)",
//                     backdropFilter: "blur(20px)",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
//                     animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
//                   }}
//                 >
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                     style={{
//                       background:
//                         "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
//                     }}
//                   />

//                   <CardContent className="p-4 relative">
//                     <div className="flex items-start justify-between gap-3 mb-2">
//                       <h4 className="text-lg font-semibold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
//                         {item.name}
//                       </h4>

//                       <div className="flex items-center gap-2 flex-wrap justify-end">
//                         {item.spicy && (
//                           <Badge
//                             className="bg-red-900/20 text-red-200 border border-red-800/30 text-xs"
//                             style={{ backdropFilter: "blur(10px)" }}
//                           >
//                             <Flame size={12} className="mr-1" />
//                             Spicy
//                           </Badge>
//                         )}

//                         {item.popular && (
//                           <Badge
//                             className="bg-amber-900/20 text-amber-200 border border-amber-800/30 text-xs"
//                             style={{ backdropFilter: "blur(10px)" }}
//                           >
//                             <TrendingUp size={12} className="mr-1" />
//                             Popular
//                           </Badge>
//                         )}
//                       </div>
//                     </div>

//                     <p className="text-gray-300/80 text-sm leading-relaxed whitespace-normal break-words">
//                       {item.description}
//                     </p>

//                     {item.price && (
//                       <div className="mt-3 pt-3 border-t border-white/10">
//                         <span className="text-xl font-semibold text-[#d4af37]">
//                           {item.price}
//                         </span>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </>
//         )}

//         {/* View Full Menu PDF Button */}
//         <div className="text-center mt-6 md:mt-7">
//           <a
//             href={menuPdf}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               relative inline-flex items-center gap-2
//               text-white
//               px-7 py-3 rounded-lg
//               font-semibold text-base md:text-lg
//               transition-all duration-300
//               hover:scale-105
//               overflow-hidden
//               group
//             "
//             style={{
//               background: "rgba(212, 175, 55, 0.12)",
//               backdropFilter: "blur(15px)",
//               border: "1px solid rgba(212, 175, 55, 0.25)",
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
//             }}
//           >
//             <div
//               className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{
//                 background:
//                   "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
//               }}
//             />
//             <FileText size={18} className="relative z-10" />
//             <span className="relative z-10">View Full Menu PDF</span>
//           </a>
//         </div>
//       </div>

//       {/* ========== CUSTOM ANIMATIONS ========== */}
//       <style jsx>{`
//         /* Make icons clearly visible + premium glow */
//         .icon-glow {
//           filter: drop-shadow(0 0 18px rgba(212, 175, 55, 0.22))
//             drop-shadow(0 0 40px rgba(255, 255, 255, 0.08));
//         }

//         /* Gentle pulse to keep them “alive” */
//         .icon-float {
//           animation-timing-function: ease-in-out;
//           will-change: transform;
//         }

//         @keyframes gradientShift {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//             opacity: 0.2;
//           }
//           33% {
//             transform: translate(10%, 5%) scale(1.05);
//             opacity: 0.25;
//           }
//           66% {
//             transform: translate(-5%, 10%) scale(0.98);
//             opacity: 0.18;
//           }
//         }

//         @keyframes spotlightDrift {
//           0%,
//           100% {
//             transform: translate(0, 0);
//           }
//           50% {
//             transform: translate(15%, 10%);
//           }
//         }

//         @keyframes gentleDrift {
//           0%,
//           100% {
//             transform: translate(0, 0);
//           }
//           25% {
//             transform: translate(18px, -24px);
//           }
//           50% {
//             transform: translate(-12px, -18px);
//           }
//           75% {
//             transform: translate(22px, -28px);
//           }
//         }

//         /* Stronger motion than before (still classy) */
//         @keyframes floatIcon1 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           25% {
//             transform: translate(22px, -16px) rotate(2deg) scale(1.03);
//           }
//           50% {
//             transform: translate(-14px, -10px) rotate(-1.5deg) scale(1.01);
//           }
//           75% {
//             transform: translate(18px, -22px) rotate(2.5deg) scale(1.04);
//           }
//         }

//         @keyframes floatIcon2 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           30% {
//             transform: translate(-18px, -18px) rotate(-2.5deg) scale(1.02);
//           }
//           60% {
//             transform: translate(16px, -22px) rotate(2deg) scale(1.04);
//           }
//         }

//         @keyframes floatIcon3 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           40% {
//             transform: translate(-16px, -18px) rotate(-2deg) scale(1.03);
//           }
//           80% {
//             transform: translate(20px, -12px) rotate(3deg) scale(1.05);
//           }
//         }

//         @keyframes floatIcon4 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           35% {
//             transform: translate(18px, -14px) rotate(1.5deg) scale(1.03);
//           }
//           70% {
//             transform: translate(-14px, -24px) rotate(-2.6deg) scale(1.05);
//           }
//         }

//         @keyframes floatIcon5 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           50% {
//             transform: translate(-22px, -12px) rotate(-2deg) scale(1.04);
//           }
//         }

//         @keyframes floatIcon6 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           45% {
//             transform: translate(18px, -22px) rotate(2.6deg) scale(1.05);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         /* Respect reduced motion */
//         @media (prefers-reduced-motion: reduce) {
//           .icon-float {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Menu;



// import React, { useMemo, useState, useEffect } from "react";
// import { menuCategories } from "../utils/mockData";
// import { Flame, TrendingUp, FileText } from "lucide-react";
// import { Card, CardContent } from "./ui/card";
// import { Badge } from "./ui/badge";
// import menuPdf from "../assets/Menu.pdf";

// const Menu = () => {
//   const [selectedCategory, setSelectedCategory] = useState(
//     menuCategories[0]?.id
//   );
//   const [particles, setParticles] = useState([]);

//   const currentCategory = useMemo(
//     () => menuCategories.find((cat) => cat.id === selectedCategory),
//     [selectedCategory]
//   );

//   // Generate soft bokeh particles
//   useEffect(() => {
//     const generateParticles = () => {
//       const newParticles = [];
//       for (let i = 0; i < 12; i++) {
//         newParticles.push({
//           id: i,
//           left: Math.random() * 100,
//           top: Math.random() * 100,
//           size: Math.random() * 3 + 2,
//           duration: Math.random() * 15 + 20,
//           delay: Math.random() * 8,
//           opacity: Math.random() * 0.15 + 0.05,
//         });
//       }
//       setParticles(newParticles);
//     };
//     generateParticles();
//   }, []);

//   return (
//     <section
//       id="menu"
//       className="relative pt-10 md:pt-12 pb-10 md:pb-12 flex items-center overflow-hidden"
//       style={{
//         minHeight: "calc(100vh - 110px)",
//         background: "linear-gradient(135deg, #071428 0%, #081a33 100%)",
//       }}
//     >
//       {/* ========== LAYERED BACKGROUND ========== */}

//       {/* Layer 1: Vignette Edges */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.45) 100%)",
//         }}
//       />

//       {/* Layer 2: Subtle Korean Lattice Pattern */}
//       <div
//         className="absolute inset-0 opacity-[0.04]"
//         style={{
//           backgroundImage: `
//             repeating-linear-gradient(
//               45deg,
//               transparent,
//               transparent 20px,
//               rgba(255, 255, 255, 0.3) 20px,
//               rgba(255, 255, 255, 0.3) 21px
//             ),
//             repeating-linear-gradient(
//               -45deg,
//               transparent,
//               transparent 20px,
//               rgba(255, 255, 255, 0.3) 20px,
//               rgba(255, 255, 255, 0.3) 21px
//             )
//           `,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Layer 3: Subtle Gradient Movement */}
//       <div
//         className="absolute inset-0 opacity-20"
//         style={{
//           background:
//             "radial-gradient(circle at 30% 40%, rgba(100, 150, 200, 0.09) 0%, transparent 55%)",
//           animation: "gradientShift 22s ease-in-out infinite",
//         }}
//       />

//       {/* Layer 4: Soft Spotlight Glows */}
//       <div
//         className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(220, 200, 180, 0.34) 0%, transparent 70%)",
//           filter: "blur(80px)",
//           animation: "spotlightDrift 30s ease-in-out infinite",
//         }}
//       />
//       <div
//         className="absolute bottom-0 right-1/3 w-[520px] h-[520px] rounded-full opacity-4"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(180, 190, 210, 0.28) 0%, transparent 70%)",
//           filter: "blur(110px)",
//           animation: "spotlightDrift 35s ease-in-out infinite reverse",
//         }}
//       />

//       {/* Layer 5: Floating Bokeh Particles */}
//       {particles.map((particle) => (
//         <div
//           key={particle.id}
//           className="absolute rounded-full"
//           style={{
//             left: `${particle.left}%`,
//             top: `${particle.top}%`,
//             width: `${particle.size}px`,
//             height: `${particle.size}px`,
//             background: "rgba(240, 235, 220, 0.62)",
//             opacity: particle.opacity,
//             filter: "blur(2px)",
//             animation: `gentleDrift ${particle.duration}s ease-in-out infinite`,
//             animationDelay: `${particle.delay}s`,
//           }}
//         />
//       ))}

//       {/* Layer 6: Floating Korean Food Icons (More Icons) */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {/* Ramen Bowl - Top Left */}
//         <div
//           className="absolute opacity-[0.30] icon-float icon-glow"
//           style={{
//             top: "8%",
//             left: "6%",
//             width: "92px",
//             height: "92px",
//             animation: "floatIcon1 18s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <ellipse cx="50" cy="65" rx="35" ry="8" fill="rgba(230,220,210,0.9)" />
//             <path
//               d="M 15 65 Q 15 85 50 88 Q 85 85 85 65"
//               fill="rgba(245,240,235,0.9)"
//               stroke="rgba(212,175,55,0.55)"
//               strokeWidth="1.8"
//             />
//             <circle cx="45" cy="60" r="3.2" fill="rgba(255,245,205,0.95)" />
//             <circle cx="55" cy="58" r="3.2" fill="rgba(255,245,205,0.95)" />
//             <circle cx="50" cy="55" r="3.2" fill="rgba(255,245,205,0.95)" />
//             <line x1="30" y1="35" x2="40" y2="60" stroke="rgba(190,165,135,0.95)" strokeWidth="2.4" strokeLinecap="round" />
//             <line x1="35" y1="33" x2="45" y2="58" stroke="rgba(190,165,135,0.95)" strokeWidth="2.4" strokeLinecap="round" />
//           </svg>
//         </div>

//         {/* Chopsticks - Top Right */}
//         <div
//           className="absolute opacity-[0.26] icon-float icon-glow"
//           style={{
//             top: "12%",
//             right: "8%",
//             width: "86px",
//             height: "86px",
//             animation: "floatIcon2 20s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <line x1="30" y1="10" x2="40" y2="90" stroke="rgba(230,215,195,0.95)" strokeWidth="3.2" strokeLinecap="round" />
//             <line x1="60" y1="10" x2="70" y2="90" stroke="rgba(230,215,195,0.95)" strokeWidth="3.2" strokeLinecap="round" />
//           </svg>
//         </div>

//         {/* Kimchi Bowl - Bottom Left */}
//         <div
//           className="absolute opacity-[0.28] icon-float icon-glow"
//           style={{
//             bottom: "15%",
//             left: "10%",
//             width: "84px",
//             height: "84px",
//             animation: "floatIcon3 19s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <ellipse cx="50" cy="55" rx="30" ry="7" fill="rgba(230,220,210,0.9)" />
//             <path
//               d="M 20 55 Q 20 75 50 77 Q 80 75 80 55"
//               fill="rgba(245,240,235,0.9)"
//               stroke="rgba(212,175,55,0.55)"
//               strokeWidth="1.8"
//             />
//             <circle cx="45" cy="50" r="4.2" fill="rgba(255,120,95,0.75)" />
//             <circle cx="55" cy="48" r="4.2" fill="rgba(255,120,95,0.75)" />
//             <circle cx="50" cy="52" r="3.6" fill="rgba(240,105,80,0.75)" />
//           </svg>
//         </div>

//         {/* Dumplings - Bottom Right */}
//         <div
//           className="absolute opacity-[0.32] icon-float icon-glow"
//           style={{
//             bottom: "10%",
//             right: "12%",
//             width: "92px",
//             height: "92px",
//             animation: "floatIcon4 17s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <ellipse cx="35" cy="55" rx="15" ry="10" fill="rgba(250,245,235,0.92)" />
//             <path d="M 20 55 Q 35 45 50 55" stroke="rgba(212,175,55,0.50)" strokeWidth="1.8" fill="none" />
//             <ellipse cx="60" cy="58" rx="15" ry="10" fill="rgba(250,245,235,0.92)" />
//             <path d="M 45 58 Q 60 48 75 58" stroke="rgba(212,175,55,0.50)" strokeWidth="1.8" fill="none" />
//           </svg>
//         </div>

//         {/* Soy Sauce Dish - Mid Right */}
//         <div
//           className="absolute opacity-[0.24] icon-float icon-glow"
//           style={{
//             top: "45%",
//             right: "5%",
//             width: "78px",
//             height: "78px",
//             animation: "floatIcon5 22s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <ellipse cx="50" cy="50" rx="25" ry="5" fill="rgba(235,225,215,0.9)" />
//             <ellipse cx="50" cy="50" rx="20" ry="4" fill="rgba(90,80,70,0.65)" />
//           </svg>
//         </div>

//         {/* Rice Bowl - Mid Left */}
//         <div
//           className="absolute opacity-[0.26] icon-float icon-glow"
//           style={{
//             top: "50%",
//             left: "7%",
//             width: "88px",
//             height: "88px",
//             animation: "floatIcon6 18.5s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <ellipse cx="50" cy="60" rx="28" ry="7" fill="rgba(230,220,210,0.9)" />
//             <path
//               d="M 22 60 Q 22 78 50 80 Q 78 78 78 60"
//               fill="rgba(245,240,235,0.9)"
//               stroke="rgba(212,175,55,0.55)"
//               strokeWidth="1.8"
//             />
//             <circle cx="45" cy="55" r="2.7" fill="rgba(255,250,240,0.95)" />
//             <circle cx="52" cy="53" r="2.7" fill="rgba(255,250,240,0.95)" />
//             <circle cx="55" cy="56" r="2.7" fill="rgba(255,250,240,0.95)" />
//             <circle cx="48" cy="58" r="2.7" fill="rgba(255,250,240,0.95)" />
//           </svg>
//         </div>

//         {/* NEW: Kimbap Roll - Mid Top */}
//         <div
//           className="absolute opacity-[0.24] icon-float icon-glow"
//           style={{
//             top: "22%",
//             left: "48%",
//             width: "84px",
//             height: "84px",
//             animation: "floatIcon7 21s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="50" cy="50" r="20" fill="rgba(60,55,50,0.55)" />
//             <circle cx="50" cy="50" r="16" fill="rgba(250,245,235,0.92)" />
//             <circle cx="44" cy="46" r="3" fill="rgba(255,120,95,0.8)" />
//             <circle cx="57" cy="46" r="3" fill="rgba(120,210,140,0.8)" />
//             <circle cx="50" cy="56" r="3" fill="rgba(255,220,120,0.85)" />
//             <circle cx="42" cy="56" r="2.6" fill="rgba(130,170,255,0.7)" />
//             <circle cx="58" cy="56" r="2.6" fill="rgba(240,160,255,0.65)" />
//             <circle cx="50" cy="50" r="19" stroke="rgba(212,175,55,0.35)" strokeWidth="1.2" />
//           </svg>
//         </div>

//         {/* NEW: Tteokbokki Bowl - Mid Bottom */}
//         <div
//           className="absolute opacity-[0.26] icon-float icon-glow"
//           style={{
//             bottom: "22%",
//             left: "42%",
//             width: "94px",
//             height: "94px",
//             animation: "floatIcon8 20s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <ellipse cx="50" cy="65" rx="32" ry="7" fill="rgba(230,220,210,0.9)" />
//             <path
//               d="M 18 65 Q 18 84 50 86 Q 82 84 82 65"
//               fill="rgba(245,240,235,0.9)"
//               stroke="rgba(212,175,55,0.55)"
//               strokeWidth="1.8"
//             />
//             <rect x="34" y="50" width="10" height="5" rx="2.5" fill="rgba(255,110,85,0.75)" />
//             <rect x="46" y="52" width="10" height="5" rx="2.5" fill="rgba(255,110,85,0.75)" />
//             <rect x="58" y="50" width="10" height="5" rx="2.5" fill="rgba(255,110,85,0.75)" />
//             <circle cx="52" cy="48" r="2.8" fill="rgba(255,220,120,0.85)" />
//           </svg>
//         </div>

//         {/* NEW: Bubble Tea - Center Right */}
//         <div
//           className="absolute opacity-[0.20] icon-float icon-glow"
//           style={{
//             top: "58%",
//             right: "20%",
//             width: "78px",
//             height: "78px",
//             animation: "floatIcon9 23s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect x="35" y="20" width="30" height="55" rx="10" fill="rgba(245,240,235,0.65)" />
//             <rect x="38" y="30" width="24" height="40" rx="8" fill="rgba(140,110,90,0.45)" />
//             <rect x="47" y="12" width="6" height="18" rx="3" fill="rgba(230,215,195,0.9)" />
//             <circle cx="44" cy="66" r="3" fill="rgba(60,55,50,0.55)" />
//             <circle cx="50" cy="69" r="3" fill="rgba(60,55,50,0.55)" />
//             <circle cx="56" cy="66" r="3" fill="rgba(60,55,50,0.55)" />
//             <rect x="34" y="20" width="32" height="55" rx="11" stroke="rgba(212,175,55,0.35)" strokeWidth="1.2" />
//           </svg>
//         </div>

//         {/* NEW: Spice Pepper - Upper Left Center */}
//         <div
//           className="absolute opacity-[0.18] icon-float icon-glow"
//           style={{
//             top: "32%",
//             left: "18%",
//             width: "70px",
//             height: "70px",
//             animation: "floatIcon10 24s ease-in-out infinite",
//           }}
//         >
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M55 20 C45 18 36 28 38 38 C40 54 58 72 62 74 C70 78 82 70 80 56 C78 38 67 22 55 20 Z"
//               fill="rgba(255,110,85,0.55)"
//               stroke="rgba(212,175,55,0.30)"
//               strokeWidth="1.2"
//             />
//             <path
//               d="M52 18 C54 12 60 10 65 13"
//               stroke="rgba(120,210,140,0.65)"
//               strokeWidth="3"
//               strokeLinecap="round"
//             />
//           </svg>
//         </div>
//       </div>

//       {/* ========== MAIN CONTENT ========== */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         {/* Header */}
//         <div className="text-center mb-6 md:mb-8">
//           <h2
//             className="text-4xl md:text-5xl font-serif font-bold text-white mb-2"
//             style={{ letterSpacing: "0.02em" }}
//           >
//             Our <span className="text-[#d4af37]">Menu</span>
//           </h2>

//           <p className="text-gray-300/80 text-base md:text-lg max-w-2xl mx-auto">
//             Discover our fusion masterpieces — where Korean tradition meets
//             global innovation
//           </p>
//         </div>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-7">
//           {menuCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`
//                 relative px-5 py-2.5 rounded-lg font-medium
//                 transition-all duration-300
//                 text-sm md:text-base
//                 ${
//                   selectedCategory === category.id
//                     ? "text-white shadow-lg"
//                     : "text-gray-300 hover:text-white hover:bg-white/5"
//                 }
//               `}
//               style={{
//                 background:
//                   selectedCategory === category.id
//                     ? "rgba(212, 175, 55, 0.15)"
//                     : "rgba(255, 255, 255, 0.03)",
//                 backdropFilter: "blur(10px)",
//                 border:
//                   selectedCategory === category.id
//                     ? "1px solid rgba(212, 175, 55, 0.3)"
//                     : "1px solid rgba(255, 255, 255, 0.08)",
//               }}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {currentCategory && (
//           <>
//             {/* Category Banner */}
//             <div
//               className="relative h-36 md:h-40 rounded-2xl overflow-hidden mb-6 group"
//               style={{
//                 border: "1px solid rgba(255, 255, 255, 0.1)",
//                 boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
//               }}
//             >
//               <img
//                 src={`${currentCategory.image}?w=1400&q=80`}
//                 alt={currentCategory.name}
//                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
//                 <div className="p-5 md:p-6">
//                   <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
//                     {currentCategory.name}
//                   </h3>
//                   <p className="text-gray-200/90 text-sm md:text-base">
//                     {currentCategory.description}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Menu Items (NO PRICE) */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {currentCategory.items.slice(0, 3).map((item, index) => (
//                 <Card
//                   key={item.id}
//                   className="relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] group"
//                   style={{
//                     background: "rgba(255, 255, 255, 0.04)",
//                     backdropFilter: "blur(20px)",
//                     border: "1px solid rgba(255, 255, 255, 0.1)",
//                     boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
//                     animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
//                   }}
//                 >
//                   <div
//                     className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
//                     style={{
//                       background:
//                         "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
//                     }}
//                   />

//                   <CardContent className="p-4 relative">
//                     <div className="flex items-start justify-between gap-3 mb-2">
//                       <h4 className="text-lg font-semibold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
//                         {item.name}
//                       </h4>

//                       <div className="flex items-center gap-2 flex-wrap justify-end">
//                         {item.spicy && (
//                           <Badge
//                             className="bg-red-900/20 text-red-200 border border-red-800/30 text-xs"
//                             style={{ backdropFilter: "blur(10px)" }}
//                           >
//                             <Flame size={12} className="mr-1" />
//                             Spicy
//                           </Badge>
//                         )}

//                         {item.popular && (
//                           <Badge
//                             className="bg-amber-900/20 text-amber-200 border border-amber-800/30 text-xs"
//                             style={{ backdropFilter: "blur(10px)" }}
//                           >
//                             <TrendingUp size={12} className="mr-1" />
//                             Popular
//                           </Badge>
//                         )}
//                       </div>
//                     </div>

//                     <p className="text-gray-300/80 text-sm leading-relaxed whitespace-normal break-words">
//                       {item.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </>
//         )}

//         {/* View Full Menu PDF Button */}
//         <div className="text-center mt-6 md:mt-7">
//           <a
//             href={menuPdf}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               relative inline-flex items-center gap-2
//               text-white
//               px-7 py-3 rounded-lg
//               font-semibold text-base md:text-lg
//               transition-all duration-300
//               hover:scale-105
//               overflow-hidden
//               group
//             "
//             style={{
//               background: "rgba(212, 175, 55, 0.12)",
//               backdropFilter: "blur(15px)",
//               border: "1px solid rgba(212, 175, 55, 0.25)",
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
//             }}
//           >
//             <div
//               className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{
//                 background:
//                   "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
//               }}
//             />
//             <FileText size={18} className="relative z-10" />
//             <span className="relative z-10">View Full Menu PDF</span>
//           </a>
//         </div>
//       </div>

//       {/* ========== CUSTOM ANIMATIONS ========== */}
//       <style jsx>{`
//         .icon-glow {
//           filter: drop-shadow(0 0 18px rgba(212, 175, 55, 0.22))
//             drop-shadow(0 0 40px rgba(255, 255, 255, 0.08));
//         }

//         .icon-float {
//           will-change: transform;
//         }

//         @keyframes gradientShift {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//             opacity: 0.2;
//           }
//           33% {
//             transform: translate(10%, 5%) scale(1.05);
//             opacity: 0.25;
//           }
//           66% {
//             transform: translate(-5%, 10%) scale(0.98);
//             opacity: 0.18;
//           }
//         }

//         @keyframes spotlightDrift {
//           0%,
//           100% {
//             transform: translate(0, 0);
//           }
//           50% {
//             transform: translate(15%, 10%);
//           }
//         }

//         @keyframes gentleDrift {
//           0%,
//           100% {
//             transform: translate(0, 0);
//           }
//           25% {
//             transform: translate(18px, -24px);
//           }
//           50% {
//             transform: translate(-12px, -18px);
//           }
//           75% {
//             transform: translate(22px, -28px);
//           }
//         }

//         @keyframes floatIcon1 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           25% {
//             transform: translate(22px, -16px) rotate(2deg) scale(1.03);
//           }
//           50% {
//             transform: translate(-14px, -10px) rotate(-1.5deg) scale(1.01);
//           }
//           75% {
//             transform: translate(18px, -22px) rotate(2.5deg) scale(1.04);
//           }
//         }

//         @keyframes floatIcon2 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           30% {
//             transform: translate(-18px, -18px) rotate(-2.5deg) scale(1.02);
//           }
//           60% {
//             transform: translate(16px, -22px) rotate(2deg) scale(1.04);
//           }
//         }

//         @keyframes floatIcon3 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           40% {
//             transform: translate(-16px, -18px) rotate(-2deg) scale(1.03);
//           }
//           80% {
//             transform: translate(20px, -12px) rotate(3deg) scale(1.05);
//           }
//         }

//         @keyframes floatIcon4 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           35% {
//             transform: translate(18px, -14px) rotate(1.5deg) scale(1.03);
//           }
//           70% {
//             transform: translate(-14px, -24px) rotate(-2.6deg) scale(1.05);
//           }
//         }

//         @keyframes floatIcon5 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           50% {
//             transform: translate(-22px, -12px) rotate(-2deg) scale(1.04);
//           }
//         }

//         @keyframes floatIcon6 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           45% {
//             transform: translate(18px, -22px) rotate(2.6deg) scale(1.05);
//           }
//         }

//         /* NEW ICON ANIMS */
//         @keyframes floatIcon7 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           35% {
//             transform: translate(16px, -18px) rotate(2.2deg) scale(1.05);
//           }
//           70% {
//             transform: translate(-18px, -10px) rotate(-2deg) scale(1.03);
//           }
//         }

//         @keyframes floatIcon8 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           40% {
//             transform: translate(-18px, -18px) rotate(-2.2deg) scale(1.04);
//           }
//           80% {
//             transform: translate(20px, -12px) rotate(2.8deg) scale(1.06);
//           }
//         }

//         @keyframes floatIcon9 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           30% {
//             transform: translate(18px, -14px) rotate(2deg) scale(1.04);
//           }
//           60% {
//             transform: translate(-16px, -18px) rotate(-2.4deg) scale(1.05);
//           }
//         }

//         @keyframes floatIcon10 {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           50% {
//             transform: translate(20px, -18px) rotate(3deg) scale(1.06);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .icon-float {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Menu;



import React, { useMemo, useState, useEffect } from "react";
import { menuCategories } from "../utils/mockData";
import { Flame, TrendingUp, FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import menuPdf from "../assets/Menu.pdf";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    menuCategories[0]?.id
  );
  const [particles, setParticles] = useState([]);

  const currentCategory = useMemo(
    () => menuCategories.find((cat) => cat.id === selectedCategory),
    [selectedCategory]
  );

  // Generate soft bokeh particles
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 14; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 3 + 2,
          duration: Math.random() * 15 + 20,
          delay: Math.random() * 8,
          opacity: Math.random() * 0.16 + 0.05,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  // ✅ More icons across the whole section so empty areas still look “alive”
  const bgIcons = useMemo(
    () => [
      // top band
      { id: "i1", type: "ramen", top: "6%", left: "4%", size: 92, o: 0.3, anim: "floatA", dur: "18s", delay: "0s" },
      { id: "i2", type: "chopsticks", top: "8%", left: "85%", size: 86, o: 0.26, anim: "floatB", dur: "20s", delay: "1s" },
      { id: "i3", type: "kimbap", top: "14%", left: "48%", size: 84, o: 0.24, anim: "floatC", dur: "21s", delay: "0.5s" },
      { id: "i4", type: "pepper", top: "18%", left: "18%", size: 70, o: 0.18, anim: "floatD", dur: "24s", delay: "1.2s" },

      // mid band
      { id: "i5", type: "rice", top: "44%", left: "6%", size: 88, o: 0.26, anim: "floatC", dur: "19s", delay: "0.3s" },
      { id: "i6", type: "soy", top: "42%", left: "92%", size: 78, o: 0.24, anim: "floatD", dur: "22s", delay: "0.9s" },
      { id: "i7", type: "dumplings", top: "46%", left: "70%", size: 92, o: 0.22, anim: "floatA", dur: "23s", delay: "0.2s" },
      { id: "i8", type: "boba", top: "52%", left: "78%", size: 78, o: 0.2, anim: "floatB", dur: "25s", delay: "1.4s" },
      { id: "i9", type: "kimchi", top: "56%", left: "12%", size: 84, o: 0.24, anim: "floatB", dur: "21s", delay: "0.7s" },
      { id: "i10", type: "tteok", top: "58%", left: "44%", size: 94, o: 0.22, anim: "floatD", dur: "20s", delay: "0.4s" },

      // bottom band (fills the “empty space” under cards + around button)
      { id: "i11", type: "chopsticks", top: "76%", left: "90%", size: 78, o: 0.18, anim: "floatC", dur: "22s", delay: "0.6s" },
      { id: "i12", type: "ramen", top: "80%", left: "8%", size: 80, o: 0.2, anim: "floatA", dur: "24s", delay: "1.1s" },
      { id: "i13", type: "kimbap", top: "82%", left: "56%", size: 76, o: 0.18, anim: "floatB", dur: "23s", delay: "0.3s" },
      { id: "i14", type: "dumplings", top: "86%", left: "28%", size: 86, o: 0.2, anim: "floatD", dur: "21s", delay: "0.8s" },
      { id: "i15", type: "pepper", top: "72%", left: "66%", size: 64, o: 0.14, anim: "floatA", dur: "26s", delay: "1.6s" },

      // extra corners / fillers
      { id: "i16", type: "soy", top: "28%", left: "94%", size: 66, o: 0.16, anim: "floatC", dur: "27s", delay: "0.4s" },
      { id: "i17", type: "rice", top: "30%", left: "2%", size: 74, o: 0.16, anim: "floatB", dur: "28s", delay: "0.9s" },
      { id: "i18", type: "kimchi", top: "88%", left: "92%", size: 70, o: 0.14, anim: "floatD", dur: "26s", delay: "0.5s" },
    ],
    []
  );

  const BgIconSvg = ({ type }) => {
    switch (type) {
      case "ramen":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="65" rx="35" ry="8" fill="rgba(230,220,210,0.9)" />
            <path
              d="M 15 65 Q 15 85 50 88 Q 85 85 85 65"
              fill="rgba(245,240,235,0.9)"
              stroke="rgba(212,175,55,0.55)"
              strokeWidth="1.8"
            />
            <circle cx="45" cy="60" r="3.2" fill="rgba(255,245,205,0.95)" />
            <circle cx="55" cy="58" r="3.2" fill="rgba(255,245,205,0.95)" />
            <circle cx="50" cy="55" r="3.2" fill="rgba(255,245,205,0.95)" />
            <line x1="30" y1="35" x2="40" y2="60" stroke="rgba(190,165,135,0.95)" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="35" y1="33" x2="45" y2="58" stroke="rgba(190,165,135,0.95)" strokeWidth="2.4" strokeLinecap="round" />
          </svg>
        );
      case "chopsticks":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="30" y1="10" x2="40" y2="90" stroke="rgba(230,215,195,0.95)" strokeWidth="3.2" strokeLinecap="round" />
            <line x1="60" y1="10" x2="70" y2="90" stroke="rgba(230,215,195,0.95)" strokeWidth="3.2" strokeLinecap="round" />
          </svg>
        );
      case "kimchi":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="55" rx="30" ry="7" fill="rgba(230,220,210,0.9)" />
            <path
              d="M 20 55 Q 20 75 50 77 Q 80 75 80 55"
              fill="rgba(245,240,235,0.9)"
              stroke="rgba(212,175,55,0.55)"
              strokeWidth="1.8"
            />
            <circle cx="45" cy="50" r="4.2" fill="rgba(255,120,95,0.75)" />
            <circle cx="55" cy="48" r="4.2" fill="rgba(255,120,95,0.75)" />
            <circle cx="50" cy="52" r="3.6" fill="rgba(240,105,80,0.75)" />
          </svg>
        );
      case "dumplings":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="35" cy="55" rx="15" ry="10" fill="rgba(250,245,235,0.92)" />
            <path d="M 20 55 Q 35 45 50 55" stroke="rgba(212,175,55,0.50)" strokeWidth="1.8" fill="none" />
            <ellipse cx="60" cy="58" rx="15" ry="10" fill="rgba(250,245,235,0.92)" />
            <path d="M 45 58 Q 60 48 75 58" stroke="rgba(212,175,55,0.50)" strokeWidth="1.8" fill="none" />
          </svg>
        );
      case "soy":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="50" rx="25" ry="5" fill="rgba(235,225,215,0.9)" />
            <ellipse cx="50" cy="50" rx="20" ry="4" fill="rgba(90,80,70,0.65)" />
          </svg>
        );
      case "rice":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="60" rx="28" ry="7" fill="rgba(230,220,210,0.9)" />
            <path
              d="M 22 60 Q 22 78 50 80 Q 78 78 78 60"
              fill="rgba(245,240,235,0.9)"
              stroke="rgba(212,175,55,0.55)"
              strokeWidth="1.8"
            />
            <circle cx="45" cy="55" r="2.7" fill="rgba(255,250,240,0.95)" />
            <circle cx="52" cy="53" r="2.7" fill="rgba(255,250,240,0.95)" />
            <circle cx="55" cy="56" r="2.7" fill="rgba(255,250,240,0.95)" />
            <circle cx="48" cy="58" r="2.7" fill="rgba(255,250,240,0.95)" />
          </svg>
        );
      case "kimbap":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="20" fill="rgba(60,55,50,0.55)" />
            <circle cx="50" cy="50" r="16" fill="rgba(250,245,235,0.92)" />
            <circle cx="44" cy="46" r="3" fill="rgba(255,120,95,0.8)" />
            <circle cx="57" cy="46" r="3" fill="rgba(120,210,140,0.8)" />
            <circle cx="50" cy="56" r="3" fill="rgba(255,220,120,0.85)" />
            <circle cx="42" cy="56" r="2.6" fill="rgba(130,170,255,0.7)" />
            <circle cx="58" cy="56" r="2.6" fill="rgba(240,160,255,0.65)" />
            <circle cx="50" cy="50" r="19" stroke="rgba(212,175,55,0.35)" strokeWidth="1.2" />
          </svg>
        );
      case "tteok":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="50" cy="65" rx="32" ry="7" fill="rgba(230,220,210,0.9)" />
            <path
              d="M 18 65 Q 18 84 50 86 Q 82 84 82 65"
              fill="rgba(245,240,235,0.9)"
              stroke="rgba(212,175,55,0.55)"
              strokeWidth="1.8"
            />
            <rect x="34" y="50" width="10" height="5" rx="2.5" fill="rgba(255,110,85,0.75)" />
            <rect x="46" y="52" width="10" height="5" rx="2.5" fill="rgba(255,110,85,0.75)" />
            <rect x="58" y="50" width="10" height="5" rx="2.5" fill="rgba(255,110,85,0.75)" />
            <circle cx="52" cy="48" r="2.8" fill="rgba(255,220,120,0.85)" />
          </svg>
        );
      case "boba":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="35" y="20" width="30" height="55" rx="10" fill="rgba(245,240,235,0.65)" />
            <rect x="38" y="30" width="24" height="40" rx="8" fill="rgba(140,110,90,0.45)" />
            <rect x="47" y="12" width="6" height="18" rx="3" fill="rgba(230,215,195,0.9)" />
            <circle cx="44" cy="66" r="3" fill="rgba(60,55,50,0.55)" />
            <circle cx="50" cy="69" r="3" fill="rgba(60,55,50,0.55)" />
            <circle cx="56" cy="66" r="3" fill="rgba(60,55,50,0.55)" />
            <rect x="34" y="20" width="32" height="55" rx="11" stroke="rgba(212,175,55,0.35)" strokeWidth="1.2" />
          </svg>
        );
      case "pepper":
        return (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M55 20 C45 18 36 28 38 38 C40 54 58 72 62 74 C70 78 82 70 80 56 C78 38 67 22 55 20 Z"
              fill="rgba(255,110,85,0.55)"
              stroke="rgba(212,175,55,0.30)"
              strokeWidth="1.2"
            />
            <path
              d="M52 18 C54 12 60 10 65 13"
              stroke="rgba(120,210,140,0.65)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="menu"
      className="relative pt-10 md:pt-12 pb-10 md:pb-12 flex items-center overflow-hidden"
      style={{
        minHeight: "calc(100vh - 110px)",
        background: "linear-gradient(135deg, #071428 0%, #081a33 100%)",
      }}
    >
      {/* ========== LAYERED BACKGROUND ========== */}

      {/* Layer 1: Vignette Edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.45) 100%)",
        }}
      />

      {/* Layer 2: Subtle Korean Lattice Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(255, 255, 255, 0.3) 20px,
              rgba(255, 255, 255, 0.3) 21px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              rgba(255, 255, 255, 0.3) 20px,
              rgba(255, 255, 255, 0.3) 21px
            )
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Layer 3: Subtle Gradient Movement */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(100, 150, 200, 0.09) 0%, transparent 55%)",
          animation: "gradientShift 22s ease-in-out infinite",
        }}
      />

      {/* Layer 4: Soft Spotlight Glows */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
        style={{
          background:
            "radial-gradient(circle, rgba(220, 200, 180, 0.34) 0%, transparent 70%)",
          filter: "blur(80px)",
          animation: "spotlightDrift 30s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 right-1/3 w-[520px] h-[520px] rounded-full opacity-4"
        style={{
          background:
            "radial-gradient(circle, rgba(180, 190, 210, 0.28) 0%, transparent 70%)",
          filter: "blur(110px)",
          animation: "spotlightDrift 35s ease-in-out infinite reverse",
        }}
      />

      {/* Layer 5: Floating Bokeh Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: "rgba(240, 235, 220, 0.62)",
            opacity: particle.opacity,
            filter: "blur(2px)",
            animation: `gentleDrift ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Layer 6: MANY Floating Korean Icons (fills empty space nicely) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {bgIcons.map((ic) => (
          <div
            key={ic.id}
            className="absolute icon-glow"
            style={{
              top: ic.top,
              left: ic.left,
              width: `${ic.size}px`,
              height: `${ic.size}px`,
              opacity: ic.o,
              animation: `${ic.anim} ${ic.dur} ease-in-out infinite`,
              animationDelay: ic.delay,
              willChange: "transform",
            }}
          >
            <BgIconSvg type={ic.type} />
          </div>
        ))}
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-2"
            style={{ letterSpacing: "0.02em" }}
          >
            Our <span className="text-[#d4af37]">Menu</span>
          </h2>

          <p className="text-gray-300/80 text-base md:text-lg max-w-2xl mx-auto">
            Discover our fusion masterpieces — where Korean tradition meets
            global innovation
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-7">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                relative px-5 py-2.5 rounded-lg font-medium
                transition-all duration-300
                text-sm md:text-base
                ${
                  selectedCategory === category.id
                    ? "text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }
              `}
              style={{
                background:
                  selectedCategory === category.id
                    ? "rgba(212, 175, 55, 0.15)"
                    : "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                border:
                  selectedCategory === category.id
                    ? "1px solid rgba(212, 175, 55, 0.3)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {category.name}
            </button>
          ))}
        </div>

        {currentCategory && (
          <>
            {/* Category Banner */}
            <div
              className="relative h-36 md:h-40 rounded-2xl overflow-hidden mb-6 group"
              style={{
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={`${currentCategory.image}?w=1400&q=80`}
                alt={currentCategory.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
                <div className="p-5 md:p-6">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
                    {currentCategory.name}
                  </h3>
                  <p className="text-gray-200/90 text-sm md:text-base">
                    {currentCategory.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Menu Items (NO PRICE) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentCategory.items.slice(0, 3).map((item, index) => (
                <Card
                  key={item.id}
                  className="relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] group"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)",
                    }}
                  />

                  <CardContent className="p-4 relative">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                        {item.name}
                      </h4>

                      {/* badges in one horizontal line */}
                      <div className="flex items-center gap-2 flex-nowrap justify-end">
                        {item.spicy && (
                          <Badge
                            className="bg-red-900/20 text-red-200 border border-red-800/30 text-xs whitespace-nowrap"
                            style={{ backdropFilter: "blur(10px)" }}
                          >
                            <Flame size={12} className="mr-1" />
                            Spicy
                          </Badge>
                        )}

                        {item.popular && (
                          <Badge
                            className="bg-amber-900/20 text-amber-200 border border-amber-800/30 text-xs whitespace-nowrap"
                            style={{ backdropFilter: "blur(10px)" }}
                          >
                            <TrendingUp size={12} className="mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300/80 text-sm leading-relaxed whitespace-normal break-words">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* View Full Menu PDF Button */}
        <div className="text-center mt-6 md:mt-7">
          <a
            href={menuPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative inline-flex items-center gap-2
              text-white
              px-7 py-3 rounded-lg
              font-semibold text-base md:text-lg
              transition-all duration-300
              hover:scale-105
              overflow-hidden
              group
            "
            style={{
              background: "rgba(212, 175, 55, 0.12)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(212, 175, 55, 0.25)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
              }}
            />
            <FileText size={18} className="relative z-10" />
            <span className="relative z-10">View Full Menu PDF</span>
          </a>
        </div>
      </div>

      {/* ========== CUSTOM ANIMATIONS ========== */}
      <style jsx>{`
        .icon-glow {
          filter: drop-shadow(0 0 18px rgba(212, 175, 55, 0.22))
            drop-shadow(0 0 40px rgba(255, 255, 255, 0.08));
        }

        @keyframes gradientShift {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.2;
          }
          33% {
            transform: translate(10%, 5%) scale(1.05);
            opacity: 0.25;
          }
          66% {
            transform: translate(-5%, 10%) scale(0.98);
            opacity: 0.18;
          }
        }

        @keyframes spotlightDrift {
          0%,
          100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(15%, 10%);
          }
        }

        @keyframes gentleDrift {
          0%,
          100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(18px, -24px);
          }
          50% {
            transform: translate(-12px, -18px);
          }
          75% {
            transform: translate(22px, -28px);
          }
        }

        /* ✅ 4 base float animations reused across many icons */
        @keyframes floatA {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          35% {
            transform: translate(22px, -16px) rotate(2.2deg) scale(1.05);
          }
          70% {
            transform: translate(-16px, -10px) rotate(-2deg) scale(1.03);
          }
        }

        @keyframes floatB {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          30% {
            transform: translate(-18px, -18px) rotate(-2.5deg) scale(1.04);
          }
          60% {
            transform: translate(16px, -22px) rotate(2deg) scale(1.05);
          }
        }

        @keyframes floatC {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          40% {
            transform: translate(-14px, -20px) rotate(-2deg) scale(1.04);
          }
          80% {
            transform: translate(20px, -12px) rotate(3deg) scale(1.06);
          }
        }

        @keyframes floatD {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(20px, -18px) rotate(3deg) scale(1.06);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .icon-glow {
            filter: none;
          }
          .icon-glow[style*="animation"] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Menu;
