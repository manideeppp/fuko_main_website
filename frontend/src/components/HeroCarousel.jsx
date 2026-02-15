// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const HeroCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const carouselImages = [
//     {
//       id: 1,
//       url: 'https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=1920&q=80',
//       alt: 'Korean Fusion Cuisine Spread'
//     },
//     {
//       id: 2,
//       url: 'https://images.unsplash.com/photo-1743612828586-aeb6e7037b99?w=1920&q=80',
//       alt: 'Korean BBQ Dinner Setup'
//     },
//     {
//       id: 3,
//       url: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1920&q=80',
//       alt: 'Multiple Korean Dishes'
//     },
//     {
//       id: 4,
//       url: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=1920&q=80',
//       alt: 'Korean Stew in Black Bowl'
//     },
//     {
//       id: 5,
//       url: 'https://images.unsplash.com/photo-1661366394743-fe30fe478ef7?w=1920&q=80',
//       alt: 'Bibimbap Bowls'
//     }
//   ];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   // Auto-advance carousel
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(timer);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [currentSlide]);

//   return (
//     <section id="home" className="relative pt-[100px]">
//       <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
//         {/* Images */}
//         {carouselImages.map((image, index) => (
//           <div
//             key={image.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <img
//               src={image.url}
//               alt={image.alt}
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
//           </div>
//         ))}

//         {/* Previous Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-[#ff5722] hover:bg-[#ff7849] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-10"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-[#ff5722] hover:bg-[#ff7849] text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg z-10"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={24} />
//         </button>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//           {carouselImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`transition-all duration-300 rounded-full ${
//                 index === currentSlide
//                   ? 'w-8 h-3 bg-[#ff5722]'
//                   : 'w-3 h-3 bg-gray-400 hover:bg-gray-300'
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroCarousel;


// import React, { useState, useEffect, useMemo } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const HeroCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const carouselImages = useMemo(
//     () => [
//       {
//         id: 1,
//         url: "https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=1920&q=80",
//         alt: "Korean Fusion Cuisine Spread",
//       },
//       {
//         id: 2,
//         url: "https://images.unsplash.com/photo-1743612828586-aeb6e7037b99?w=1920&q=80",
//         alt: "Korean BBQ Dinner Setup",
//       },
//       {
//         id: 3,
//         url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1920&q=80",
//         alt: "Multiple Korean Dishes",
//       },
//       {
//         id: 4,
//         url: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=1920&q=80",
//         alt: "Korean Stew in Black Bowl",
//       },
//       {
//         id: 5,
//         url: "https://images.unsplash.com/photo-1661366394743-fe30fe478ef7?w=1920&q=80",
//         alt: "Bibimbap Bowls",
//       },
//     ],
//     []
//   );

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
//   };

//   const goToSlide = (index) => setCurrentSlide(index);

//   // Auto-advance carousel (stable interval; doesn't reset every slide)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [carouselImages.length]);

//   return (
//     // ✅ Removed pt-[100px] so header overlays + blends into the hero
//     <section id="home" className="relative">
//       <div className="relative w-full h-[520px] md:h-[650px] lg:h-[760px] overflow-hidden">
//         {/* Images */}
//         {carouselImages.map((image, index) => (
//           <div
//             key={image.id}
//             className={`absolute inset-0 transition-opacity duration-1000 ${
//               index === currentSlide ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />

//             {/* ✅ Make header/icons readable on any image (top gradient) */}
//             <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />

//             {/* ✅ Keep bottom readability for any hero text you add later */}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//           </div>
//         ))}

//         {/* Optional: Slight vignette for “cinematic” contrast (helps thick text pop) */}
//         <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.55)]" />

//         {/* Previous Button */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 sm:left-5 md:left-8 top-1/2 -translate-y-1/2
//                      bg-[#ff5722]/90 hover:bg-[#ff7849]
//                      text-white w-11 h-11 md:w-12 md:h-12 rounded-full
//                      flex items-center justify-center
//                      transition-all duration-200 hover:scale-110
//                      shadow-[0_10px_30px_rgba(0,0,0,0.35)]
//                      z-10"
//           aria-label="Previous slide"
//         >
//           <ChevronLeft size={22} />
//         </button>

//         {/* Next Button */}
//         <button
//           onClick={nextSlide}
//           className="absolute right-3 sm:right-5 md:right-8 top-1/2 -translate-y-1/2
//                      bg-[#ff5722]/90 hover:bg-[#ff7849]
//                      text-white w-11 h-11 md:w-12 md:h-12 rounded-full
//                      flex items-center justify-center
//                      transition-all duration-200 hover:scale-110
//                      shadow-[0_10px_30px_rgba(0,0,0,0.35)]
//                      z-10"
//           aria-label="Next slide"
//         >
//           <ChevronRight size={22} />
//         </button>

//         {/* Dots Indicator */}
//         <div className="absolute bottom-7 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
//           {carouselImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`transition-all duration-300 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] ${
//                 index === currentSlide
//                   ? "w-9 h-3 bg-[#ff5722]"
//                   : "w-3 h-3 bg-white/45 hover:bg-white/70"
//               }`}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroCarousel;


import React, { useState, useEffect, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = useMemo(
    () => [
      {
        id: 1,
        url: "https://images.unsplash.com/photo-1539755530862-00f623c00f52?w=1920&q=80",
        alt: "Korean Fusion Cuisine Spread",
      },
      {
        id: 2,
        url: "https://images.unsplash.com/photo-1743612828586-aeb6e7037b99?w=1920&q=80",
        alt: "Korean BBQ Dinner Setup",
      },
      {
        id: 3,
        url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=1920&q=80",
        alt: "Multiple Korean Dishes",
      },
      {
        id: 4,
        url: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=1920&q=80",
        alt: "Korean Stew in Black Bowl",
      },
      {
        id: 5,
        url: "https://images.unsplash.com/photo-1661366394743-fe30fe478ef7?w=1920&q=80",
        alt: "Bibimbap Bowls",
      },
    ],
    []
  );

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index) => setCurrentSlide(index);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <section id="home" className="relative">
      {/* ✅ Fill viewport height so there is no black gap at bottom */}
      <div className="relative w-full min-h-[100svh] overflow-hidden">
        {carouselImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/15 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
          </div>
        ))}

        {/* (Optional) reduce vignette strength to avoid “dark band” feel */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.45)]" />

        {/* Prev */}
        <button
          onClick={prevSlide}
          className="absolute left-3 sm:left-5 md:left-8 top-1/2 -translate-y-1/2
                     bg-[#ff5722]/90 hover:bg-[#ff7849]
                     text-white w-11 h-11 md:w-12 md:h-12 rounded-full
                     flex items-center justify-center
                     transition-all duration-200 hover:scale-110
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                     z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Next */}
        <button
          onClick={nextSlide}
          className="absolute right-3 sm:right-5 md:right-8 top-1/2 -translate-y-1/2
                     bg-[#ff5722]/90 hover:bg-[#ff7849]
                     text-white w-11 h-11 md:w-12 md:h-12 rounded-full
                     flex items-center justify-center
                     transition-all duration-200 hover:scale-110
                     shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                     z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-7 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.35)] ${
                index === currentSlide
                  ? "w-9 h-3 bg-[#ff5722]"
                  : "w-3 h-3 bg-white/45 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
