


// import React from "react";
// import { MapPin } from "lucide-react";

// const Location = () => {
//   const directionsLink =
//     "https://www.google.com/maps/dir//FUKO+-+Crystal+Palace,+64+Westow+Hill,+London+SE19+1RX,+United+Kingdom";

//   const embedUrl =
//     "https://www.google.com/maps?output=embed&q=" +
//     encodeURIComponent(
//       "FUKO - Crystal Palace, 64 Westow Hill, London SE19 1RX, United Kingdom"
//     );

//   return (
//     <section
//       id="location"
//       className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
//             Visit <span className="text-[#ff5722]">Us</span>
//           </h2>

//           <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
//             Find us in the heart of the city, ready to serve you authentic Korean fusion
//           </p>
//         </div>

//         {/* Map Card */}
//         <div className="rounded-2xl overflow-hidden border border-gray-700 hover:border-[#ff5722] transition-all duration-300 shadow-lg">

//           {/* Smaller map height */}
//           <div className="h-[300px] md:h-[380px]">
//             <iframe
//               src={embedUrl}
//               title="FUKO Location"
//               className="w-full h-full"
//               style={{ border: 0 }}
//               loading="lazy"
//             />
//           </div>

//           {/* Footer */}
//           <div className="bg-black/40 border-t border-white/10 px-5 py-3 flex items-center justify-between">

//             <div className="text-white/80 text-sm">
//               64 Westow Hill, London SE19 1RX
//             </div>

//             <a
//               href={directionsLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-[#ff5722] hover:bg-[#ff7849] text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
//             >
//               <MapPin size={16} />
//               Get Directions
//             </a>

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default Location;


// import React, { useMemo } from "react";
// import { MapPin } from "lucide-react";

// const Location = () => {
//   const directionsLink =
//     "https://www.google.com/maps/dir//FUKO+-+Crystal+Palace,+64+Westow+Hill,+London+SE19+1RX,+United+Kingdom";

//   const embedUrl =
//     "https://www.google.com/maps?output=embed&q=" +
//     encodeURIComponent(
//       "FUKO - Crystal Palace, 64 Westow Hill, London SE19 1RX, United Kingdom"
//     );

//   // ✅ Lots of icons spread across the whole section (fills empty space like your Menu)
//   const bgIcons = useMemo(
//     () => [
//       // Top band
//       { id: "l1", type: "pin", top: "8%", left: "8%", size: 86, o: 0.18, anim: "floatA", dur: "22s", delay: "0s" },
//       { id: "l2", type: "map", top: "10%", left: "86%", size: 92, o: 0.14, anim: "floatB", dur: "26s", delay: "0.6s" },
//       { id: "l3", type: "compass", top: "16%", left: "46%", size: 76, o: 0.13, anim: "floatC", dur: "24s", delay: "0.2s" },
//       { id: "l4", type: "metro", top: "18%", left: "92%", size: 70, o: 0.12, anim: "floatD", dur: "28s", delay: "1.1s" },

//       // Mid band (around the big map area)
//       { id: "l5", type: "store", top: "38%", left: "6%", size: 92, o: 0.13, anim: "floatC", dur: "26s", delay: "0.7s" },
//       { id: "l6", type: "pin", top: "40%", left: "92%", size: 82, o: 0.14, anim: "floatA", dur: "25s", delay: "0.3s" },
//       { id: "l7", type: "taxi", top: "46%", left: "80%", size: 78, o: 0.11, anim: "floatB", dur: "27s", delay: "0.9s" },
//       { id: "l8", type: "walk", top: "50%", left: "16%", size: 78, o: 0.11, anim: "floatD", dur: "24s", delay: "0.4s" },
//       { id: "l9", type: "sign", top: "54%", left: "90%", size: 72, o: 0.1, anim: "floatC", dur: "29s", delay: "1.4s" },
//       { id: "l10", type: "parking", top: "58%", left: "6%", size: 74, o: 0.1, anim: "floatA", dur: "30s", delay: "1.2s" },

//       // Bottom band (fills empty space near footer + button)
//       { id: "l11", type: "clock", top: "76%", left: "10%", size: 72, o: 0.12, anim: "floatB", dur: "25s", delay: "0.5s" },
//       { id: "l12", type: "pin", top: "78%", left: "88%", size: 72, o: 0.12, anim: "floatD", dur: "22s", delay: "0.8s" },
//       { id: "l13", type: "map", top: "86%", left: "62%", size: 80, o: 0.1, anim: "floatC", dur: "28s", delay: "0.2s" },
//       { id: "l14", type: "compass", top: "88%", left: "28%", size: 70, o: 0.09, anim: "floatA", dur: "31s", delay: "1.6s" },
//       { id: "l15", type: "metro", top: "82%", left: "92%", size: 62, o: 0.08, anim: "floatB", dur: "33s", delay: "0.9s" },

//       // Extra fillers (very subtle)
//       { id: "l16", type: "pin", top: "26%", left: "3%", size: 64, o: 0.08, anim: "floatD", dur: "34s", delay: "0.1s" },
//       { id: "l17", type: "taxi", top: "30%", left: "96%", size: 62, o: 0.07, anim: "floatC", dur: "35s", delay: "1.3s" },
//     ],
//     []
//   );

//   // ✅ Inline SVG icons (same minimal “flat illustration” vibe as your Menu)
//   const BgIconSvg = ({ type }) => {
//     switch (type) {
//       case "pin":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M50 90 C50 90 76 64 76 44 C76 29 64 17 50 17 C36 17 24 29 24 44 C24 64 50 90 50 90 Z"
//               fill="rgba(255, 87, 34, 0.32)"
//               stroke="rgba(212,175,55,0.22)"
//               strokeWidth="1.2"
//             />
//             <circle cx="50" cy="44" r="8" fill="rgba(245,240,235,0.55)" />
//           </svg>
//         );

//       case "map":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M18 28 L38 22 L62 30 L82 22 V76 L62 84 L38 76 L18 84 V28 Z"
//               fill="rgba(245,240,235,0.10)"
//               stroke="rgba(255, 87, 34, 0.22)"
//               strokeWidth="1.4"
//             />
//             <path
//               d="M38 22 V76"
//               stroke="rgba(212,175,55,0.18)"
//               strokeWidth="1.2"
//             />
//             <path
//               d="M62 30 V84"
//               stroke="rgba(212,175,55,0.18)"
//               strokeWidth="1.2"
//             />
//             <circle cx="55" cy="52" r="3.2" fill="rgba(255,87,34,0.28)" />
//             <path
//               d="M30 60 C38 52 44 52 52 58"
//               stroke="rgba(245,240,235,0.20)"
//               strokeWidth="1.2"
//               strokeLinecap="round"
//             />
//           </svg>
//         );

//       case "compass":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle
//               cx="50"
//               cy="50"
//               r="28"
//               fill="rgba(245,240,235,0.10)"
//               stroke="rgba(212,175,55,0.22)"
//               strokeWidth="1.4"
//             />
//             <path
//               d="M50 30 L58 58 L50 70 L42 42 L50 30 Z"
//               fill="rgba(255,87,34,0.22)"
//             />
//             <circle cx="50" cy="50" r="3.5" fill="rgba(245,240,235,0.35)" />
//           </svg>
//         );

//       case "metro":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect
//               x="30"
//               y="20"
//               width="40"
//               height="55"
//               rx="10"
//               fill="rgba(245,240,235,0.10)"
//               stroke="rgba(255,87,34,0.18)"
//               strokeWidth="1.4"
//             />
//             <rect x="38" y="30" width="24" height="18" rx="4" fill="rgba(245,240,235,0.14)" />
//             <circle cx="40" cy="72" r="3" fill="rgba(212,175,55,0.20)" />
//             <circle cx="60" cy="72" r="3" fill="rgba(212,175,55,0.20)" />
//             <path
//               d="M42 78 L35 88"
//               stroke="rgba(245,240,235,0.18)"
//               strokeWidth="1.4"
//               strokeLinecap="round"
//             />
//             <path
//               d="M58 78 L65 88"
//               stroke="rgba(245,240,235,0.18)"
//               strokeWidth="1.4"
//               strokeLinecap="round"
//             />
//           </svg>
//         );

//       case "store":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M22 40 H78 V82 H22 V40 Z"
//               fill="rgba(245,240,235,0.08)"
//               stroke="rgba(212,175,55,0.22)"
//               strokeWidth="1.4"
//             />
//             <path
//               d="M18 40 L26 22 H74 L82 40"
//               fill="rgba(255,87,34,0.14)"
//               stroke="rgba(255,87,34,0.22)"
//               strokeWidth="1.4"
//             />
//             <rect x="34" y="52" width="32" height="30" rx="6" fill="rgba(245,240,235,0.10)" />
//             <path
//               d="M40 52 V82"
//               stroke="rgba(245,240,235,0.16)"
//               strokeWidth="1.2"
//             />
//           </svg>
//         );

//       case "walk":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="55" cy="22" r="6" fill="rgba(245,240,235,0.20)" />
//             <path
//               d="M52 32 L45 48 L58 55 L63 70"
//               stroke="rgba(255,87,34,0.22)"
//               strokeWidth="4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <path
//               d="M45 48 L34 62"
//               stroke="rgba(212,175,55,0.18)"
//               strokeWidth="4"
//               strokeLinecap="round"
//             />
//             <path
//               d="M58 55 L70 54"
//               stroke="rgba(212,175,55,0.18)"
//               strokeWidth="4"
//               strokeLinecap="round"
//             />
//             <path
//               d="M63 70 L58 86"
//               stroke="rgba(245,240,235,0.16)"
//               strokeWidth="4"
//               strokeLinecap="round"
//             />
//           </svg>
//         );

//       case "taxi":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect
//               x="26"
//               y="44"
//               width="48"
//               height="22"
//               rx="8"
//               fill="rgba(245,240,235,0.10)"
//               stroke="rgba(255,87,34,0.20)"
//               strokeWidth="1.4"
//             />
//             <path
//               d="M34 44 L42 34 H58 L66 44"
//               fill="rgba(255,87,34,0.14)"
//               stroke="rgba(212,175,55,0.18)"
//               strokeWidth="1.2"
//             />
//             <circle cx="36" cy="70" r="4" fill="rgba(212,175,55,0.22)" />
//             <circle cx="64" cy="70" r="4" fill="rgba(212,175,55,0.22)" />
//             <rect x="44" y="30" width="12" height="6" rx="2" fill="rgba(245,240,235,0.14)" />
//           </svg>
//         );

//       case "parking":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <rect
//               x="26"
//               y="22"
//               width="48"
//               height="56"
//               rx="10"
//               fill="rgba(245,240,235,0.08)"
//               stroke="rgba(212,175,55,0.22)"
//               strokeWidth="1.4"
//             />
//             <path
//               d="M44 62 V38 H55 C60 38 63 41 63 46 C63 51 60 54 55 54 H44"
//               stroke="rgba(255,87,34,0.22)"
//               strokeWidth="5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         );

//       case "sign":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path
//               d="M24 30 H76 L66 44 L76 58 H24 L34 44 L24 30 Z"
//               fill="rgba(245,240,235,0.08)"
//               stroke="rgba(255,87,34,0.18)"
//               strokeWidth="1.4"
//             />
//             <path
//               d="M50 58 V84"
//               stroke="rgba(212,175,55,0.20)"
//               strokeWidth="3"
//               strokeLinecap="round"
//             />
//           </svg>
//         );

//       case "clock":
//         return (
//           <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle
//               cx="50"
//               cy="50"
//               r="28"
//               fill="rgba(245,240,235,0.08)"
//               stroke="rgba(212,175,55,0.22)"
//               strokeWidth="1.4"
//             />
//             <path
//               d="M50 34 V52 L62 58"
//               stroke="rgba(255,87,34,0.22)"
//               strokeWidth="4"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//             <circle cx="50" cy="50" r="3.2" fill="rgba(245,240,235,0.16)" />
//           </svg>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <section
//       id="location"
//       className="relative py-16 md:py-20 overflow-hidden"
//       style={{
//         background: "linear-gradient(to bottom, #111827, #000000)", // same as your original but controlled
//       }}
//     >
//       {/* ========== BACKGROUND DEPTH ========== */}

//       {/* vignette */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.55) 100%)",
//         }}
//       />

//       {/* subtle moving glow */}
//       <div
//         className="absolute inset-0 opacity-25 pointer-events-none"
//         style={{
//           background:
//             "radial-gradient(circle at 30% 20%, rgba(255,87,34,0.10) 0%, transparent 55%)",
//           animation: "gradientShift 22s ease-in-out infinite",
//         }}
//       />

//       {/* floating location/city icons */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {bgIcons.map((ic) => (
//           <div
//             key={ic.id}
//             className="absolute icon-glow"
//             style={{
//               top: ic.top,
//               left: ic.left,
//               width: `${ic.size}px`,
//               height: `${ic.size}px`,
//               opacity: ic.o,
//               animation: `${ic.anim} ${ic.dur} ease-in-out infinite`,
//               animationDelay: ic.delay,
//               willChange: "transform",
//               filter:
//                 "drop-shadow(0 0 18px rgba(255, 87, 34, 0.16)) drop-shadow(0 0 40px rgba(255, 255, 255, 0.05))",
//             }}
//           >
//             <BgIconSvg type={ic.type} />
//           </div>
//         ))}
//       </div>

//       {/* ========== CONTENT ========== */}
//       <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
//             Visit <span className="text-[#ff5722]">Us</span>
//           </h2>

//           <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
//             Find us in the heart of the city, ready to serve you authentic Korean
//             fusion
//           </p>
//         </div>

//         {/* Map Card */}
//         <div className="rounded-2xl overflow-hidden border border-gray-700 hover:border-[#ff5722] transition-all duration-300 shadow-lg">
//           {/* Smaller map height */}
//           <div className="h-[300px] md:h-[380px]">
//             <iframe
//               src={embedUrl}
//               title="FUKO Location"
//               className="w-full h-full"
//               style={{ border: 0 }}
//               loading="lazy"
//             />
//           </div>

//           {/* Footer */}
//           <div className="bg-black/40 border-t border-white/10 px-5 py-3 flex items-center justify-between">
//             <div className="text-white/80 text-sm">
//               64 Westow Hill, London SE19 1RX
//             </div>

//             <a
//               href={directionsLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 bg-[#ff5722] hover:bg-[#ff7849] text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
//             >
//               <MapPin size={16} />
//               Get Directions
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* ========== ANIMATIONS ========== */}
//       <style jsx>{`
//         @keyframes gradientShift {
//           0%,
//           100% {
//             transform: translate(0, 0) scale(1);
//             opacity: 0.22;
//           }
//           33% {
//             transform: translate(10%, 5%) scale(1.06);
//             opacity: 0.28;
//           }
//           66% {
//             transform: translate(-6%, 10%) scale(0.98);
//             opacity: 0.18;
//           }
//         }

//         @keyframes floatA {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           35% {
//             transform: translate(22px, -16px) rotate(2.2deg) scale(1.05);
//           }
//           70% {
//             transform: translate(-16px, -10px) rotate(-2deg) scale(1.03);
//           }
//         }

//         @keyframes floatB {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           30% {
//             transform: translate(-18px, -18px) rotate(-2.5deg) scale(1.04);
//           }
//           60% {
//             transform: translate(16px, -22px) rotate(2deg) scale(1.05);
//           }
//         }

//         @keyframes floatC {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           40% {
//             transform: translate(-14px, -20px) rotate(-2deg) scale(1.04);
//           }
//           80% {
//             transform: translate(20px, -12px) rotate(3deg) scale(1.06);
//           }
//         }

//         @keyframes floatD {
//           0%,
//           100% {
//             transform: translate(0, 0) rotate(0deg) scale(1);
//           }
//           50% {
//             transform: translate(20px, -18px) rotate(3deg) scale(1.06);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           [style*="animation"] {
//             animation: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Location;



import React, { useMemo } from "react";
import { MapPin } from "lucide-react";

const Location = () => {
  const directionsLink =
    "https://www.google.com/maps/dir//FUKO+-+Crystal+Palace,+64+Westow+Hill,+London+SE19+1RX,+United+Kingdom";

  const embedUrl =
    "https://www.google.com/maps?output=embed&q=" +
    encodeURIComponent(
      "FUKO - Crystal Palace, 64 Westow Hill, London SE19 1RX, United Kingdom"
    );

  /* ✅ Only DARK map + pin icons */
  const bgIcons = useMemo(
    () => [
      { id: 1, type: "pin", top: "8%", left: "6%", size: 90, anim: "floatA", dur: "28s" },
      { id: 2, type: "map", top: "12%", left: "88%", size: 95, anim: "floatB", dur: "32s" },
      { id: 3, type: "pin", top: "38%", left: "4%", size: 80, anim: "floatC", dur: "30s" },
      { id: 4, type: "map", top: "40%", left: "92%", size: 85, anim: "floatD", dur: "34s" },
      { id: 5, type: "pin", top: "72%", left: "10%", size: 85, anim: "floatA", dur: "31s" },
      { id: 6, type: "map", top: "82%", left: "60%", size: 90, anim: "floatB", dur: "36s" },
      { id: 7, type: "pin", top: "86%", left: "90%", size: 70, anim: "floatC", dur: "33s" },
      { id: 8, type: "map", top: "65%", left: "78%", size: 75, anim: "floatD", dur: "29s" },
    ],
    []
  );

  /* ✅ DARK ICON SVGs */
  const BgIconSvg = ({ type }) => {
    if (type === "pin") {
      return (
        <svg viewBox="0 0 100 100">
          <path
            d="M50 90 C50 90 78 64 78 44 C78 28 65 16 50 16 C35 16 22 28 22 44 C22 64 50 90 50 90 Z"
            fill="rgba(10, 15, 25, 0.85)"
            stroke="rgba(40, 50, 70, 0.9)"
            strokeWidth="1.5"
          />
          <circle
            cx="50"
            cy="44"
            r="7"
            fill="rgba(25, 35, 55, 0.95)"
          />
        </svg>
      );
    }

    if (type === "map") {
      return (
        <svg viewBox="0 0 100 100">
          <path
            d="M18 28 L38 22 L62 30 L82 22 V76 L62 84 L38 76 L18 84 V28 Z"
            fill="rgba(8, 12, 20, 0.85)"
            stroke="rgba(40, 50, 70, 0.9)"
            strokeWidth="1.5"
          />
          <path
            d="M38 22 V76"
            stroke="rgba(25, 35, 55, 0.95)"
            strokeWidth="1.5"
          />
          <path
            d="M62 30 V84"
            stroke="rgba(25, 35, 55, 0.95)"
            strokeWidth="1.5"
          />
          <circle
            cx="52"
            cy="52"
            r="4"
            fill="rgba(25, 35, 55, 0.95)"
          />
        </svg>
      );
    }

    return null;
  };

  return (
    <section
      id="location"
      className="relative py-16 md:py-20 overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #111827, #000000)",
      }}
    >
      {/* background vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* DARK floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        {bgIcons.map((icon) => (
          <div
            key={icon.id}
            style={{
              position: "absolute",
              top: icon.top,
              left: icon.left,
              width: icon.size,
              height: icon.size,
              opacity: 0.9,
              animation: `${icon.anim} ${icon.dur} ease-in-out infinite`,
              filter: "drop-shadow(0 0 8px rgba(0,0,0,0.9))",
            }}
          >
            <BgIconSvg type={icon.type} />
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            Visit <span className="text-[#ff5722]">Us</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Find us in the heart of the city, ready to serve you authentic Korean fusion
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border border-gray-700 hover:border-[#ff5722] transition-all shadow-lg">
          <div className="h-[300px] md:h-[380px]">
            <iframe
              src={embedUrl}
              title="FUKO Location"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          <div className="bg-black/40 border-t border-white/10 px-5 py-3 flex justify-between">
            <div className="text-white/80 text-sm">
              64 Westow Hill, London SE19 1RX
            </div>

            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff5722] hover:bg-[#ff7849] text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              <MapPin size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* animations */}
      <style jsx>{`
        @keyframes floatA {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(20px,-20px); }
        }

        @keyframes floatB {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-18px,-18px); }
        }

        @keyframes floatC {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(16px,-24px); }
        }

        @keyframes floatD {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-20px,-16px); }
        }
      `}</style>
    </section>
  );
};

export default Location;
