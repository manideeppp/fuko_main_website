// import React, { useState } from 'react';
// import { socialMediaPhotos } from '../utils/mockData';
// import { Heart, Instagram } from 'lucide-react';

// const Gallery = () => {
//   const [likedPhotos, setLikedPhotos] = useState({});

//   const handleLike = (photoId) => {
//     setLikedPhotos((prev) => ({
//       ...prev,
//       [photoId]: !prev[photoId]
//     }));
//   };

//   return (
//     <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Instagram className="text-[#ff5722]" size={40} />
//             <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">
//               <span className="text-[#ff5722]">Instagram</span> Gallery
//             </h2>
//           </div>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
//             Follow us @fukorestaurant for daily food inspiration
//           </p>
//           <a
//             href="https://www.instagram.com/fukorestaurant"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
//           >
//             Follow Us on Instagram
//           </a>
//         </div>

//         {/* Gallery Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {socialMediaPhotos.map((photo) => (
//             <div
//               key={photo.id}
//               className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
//             >
//               {/* Image */}
//               <img
//                 src={`${photo.image}?w=600&q=80`}
//                 alt={photo.alt}
//                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                 <div className="w-full flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <button
//                       onClick={() => handleLike(photo.id)}
//                       className="transition-transform hover:scale-110"
//                     >
//                       <Heart
//                         size={24}
//                         className={`${
//                           likedPhotos[photo.id]
//                             ? 'fill-red-500 text-red-500'
//                             : 'text-white'
//                         } transition-colors`}
//                       />
//                     </button>
//                     <span className="text-white font-semibold">
//                       {photo.likes + (likedPhotos[photo.id] ? 1 : 0)}
//                     </span>
//                   </div>
//                   <Instagram className="text-white" size={24} />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Hashtag Section */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-400 text-lg mb-4">
//             Share your FUKO moments with
//           </p>
//           <div className="flex flex-wrap justify-center gap-3">
//             {['#FUKO', '#FusionDKorea', '#KoreanFusion', '#FoodieLife'].map((hashtag) => (
//               <span
//                 key={hashtag}
//                 className="bg-gray-800/50 border border-[#ff5722]/30 text-[#ff5722] px-4 py-2 rounded-full font-semibold hover:bg-[#ff5722]/10 transition-colors cursor-pointer"
//               >
//                 {hashtag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;


// import React, { useMemo, useState } from "react";
// import { socialMediaPhotos } from "../utils/mockData";
// import { Heart, Instagram } from "lucide-react";

// const TikTokIcon = ({ size = 40, className = "" }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 48 48"
//     fill="none"
//     className={className}
//     aria-hidden="true"
//   >
//     {/* Simple TikTok-style note (not official) */}
//     <path
//       d="M29.5 8c1 6.3 5.4 9.8 10.6 10.2v6.4c-2.9.2-6-1-8.3-2.6v12.2c0 7.6-6.2 13.8-13.8 13.8S4.2 41.8 4.2 34.2 10.4 20.4 18 20.4c.7 0 1.4.1 2.1.2v7.1c-.7-.3-1.4-.5-2.1-.5-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7 6.7-3 6.7-6.7V8h4.8Z"
//       fill="currentColor"
//       opacity="0.92"
//     />
//     <path
//       d="M29.5 8c1 6.3 5.4 9.8 10.6 10.2v3.1c-3.5-.5-7.7-2.8-9.7-5.9v18.8c0 7.6-6.2 13.8-13.8 13.8-3.1 0-6-1-8.3-2.8 2.4 1.6 5.3 2.5 8.3 2.5 7.6 0 13.8-6.2 13.8-13.8V8h-.9Z"
//       fill="currentColor"
//       opacity="0.35"
//     />
//   </svg>
// );

// const Gallery = () => {
//   const [likedPhotos, setLikedPhotos] = useState({});

//   const handleLike = (photoId) => {
//     setLikedPhotos((prev) => ({
//       ...prev,
//       [photoId]: !prev[photoId],
//     }));
//   };

//   // Duplicate for seamless marquee loop
//   const marqueePhotos = useMemo(
//     () => [...socialMediaPhotos, ...socialMediaPhotos],
//     []
//   );

//   return (
//     <section
//       id="gallery"
//       className="py-20 bg-gradient-to-b from-gray-900 to-black"
//     >
//       {/* Local styles for marquee animation (CRA-safe) */}
//       <style>{`
//         @keyframes fuko-marquee {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .fuko-marquee {
//           animation: fuko-marquee 32s linear infinite;
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .fuko-marquee { animation: none; }
//         }
//       `}</style>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <Instagram className="text-[#ff5722]" size={40} />
//             <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">
//               <span className="text-[#ff5722]">Social</span> Gallery
//             </h2>
//           </div>

//           <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
//             Follow us for daily food inspiration
//           </p>

//           <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
//             <a
//               href="https://www.instagram.com/fukorestaurant"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
//             >
//               <Instagram size={20} />
//               Follow on Instagram
//             </a>

//             <a
//               href="https://www.tiktok.com/@fukorestaurant"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center gap-2 bg-gray-800/60 border border-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800/80 hover:scale-105 transition-all duration-200"
//             >
//               <TikTokIcon size={18} className="text-white" />
//               Follow on TikTok
//             </a>
//           </div>
//         </div>

//         {/* Auto-scrolling single-row gallery */}
//         <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
//           {/* Soft edge fades */}
//           <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/70 to-transparent z-10" />
//           <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/70 to-transparent z-10" />

//           <div
//             className={[
//               "fuko-marquee flex w-max gap-4 p-5",
//               // pause on hover (Tailwind arbitrary)
//               "group-hover:[animation-play-state:paused]",
//             ].join(" ")}
//           >
//             {marqueePhotos.map((photo, idx) => (
//               <div
//                 // idx is fine here because we intentionally duplicate
//                 key={`${photo.id}-${idx}`}
//                 className="relative flex-shrink-0 w-[260px] h-[180px] sm:w-[320px] sm:h-[210px] md:w-[360px] md:h-[240px] overflow-hidden rounded-xl cursor-pointer"
//               >
//                 <img
//                   src={`${photo.image}?w=900&q=80`}
//                   alt={photo.alt}
//                   className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   loading="lazy"
//                 />

//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                   <div className="w-full flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <button
//                         type="button"
//                         onClick={() => handleLike(photo.id)}
//                         className="transition-transform hover:scale-110"
//                         aria-label="Like photo"
//                       >
//                         <Heart
//                           size={24}
//                           className={`${
//                             likedPhotos[photo.id]
//                               ? "fill-red-500 text-red-500"
//                               : "text-white"
//                           } transition-colors`}
//                         />
//                       </button>
//                       <span className="text-white font-semibold">
//                         {photo.likes + (likedPhotos[photo.id] ? 1 : 0)}
//                       </span>
//                     </div>
//                     <Instagram className="text-white" size={22} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Hashtag Section */}
//         <div className="mt-12 text-center">
//           <p className="text-gray-400 text-lg mb-4">
//             Share your FUKO moments with
//           </p>
//           <div className="flex flex-wrap justify-center gap-3">
//             {["#FUKO", "#FusionDKorea", "#KoreanFusion", "#FoodieLife"].map(
//               (hashtag) => (
//                 <span
//                   key={hashtag}
//                   className="bg-gray-800/50 border border-[#ff5722]/30 text-[#ff5722] px-4 py-2 rounded-full font-semibold hover:bg-[#ff5722]/10 transition-colors cursor-pointer"
//                 >
//                   {hashtag}
//                 </span>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;


import React, { useState } from "react";
import { socialMediaPhotos } from "../utils/mockData";
import { Heart, Instagram, Music2 } from "lucide-react";

const Gallery = () => {
  const [likedPhotos, setLikedPhotos] = useState({});

  const handleLike = (photoId) => {
    setLikedPhotos((prev) => ({
      ...prev,
      [photoId]: !prev[photoId],
    }));
  };

  // duplicate photos for infinite scroll
  const scrollingPhotos = [...socialMediaPhotos, ...socialMediaPhotos];

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-gray-900 via-black to-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-14">
          
          {/* TITLE */}
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            <span className="text-[#ff5722]">Social</span> Gallery
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-400 text-lg mb-6">
            Follow us for daily food inspiration
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/fukorestaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition duration-300 shadow-lg"
            >
              <Instagram size={20} />
              Follow on Instagram
            </a>

            {/* TikTok */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 border border-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 hover:scale-105 transition duration-300 shadow-lg"
            >
              <Music2 size={20} />
              Follow on TikTok
            </a>

          </div>
        </div>

        {/* ================= SCROLL CONTAINER ================= */}
        <div className="relative">

          {/* gradient edges */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

          {/* scroll row */}
          <div className="overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-b from-gray-900/40 to-black/40 backdrop-blur-sm">

            <div className="flex gap-6 py-6 animate-scroll hover:[animation-play-state:paused]">

              {scrollingPhotos.map((photo, index) => (
                <div
                  key={`${photo.id}-${index}`}
                  className="relative min-w-[300px] md:min-w-[380px] h-[250px] rounded-xl overflow-hidden group cursor-pointer"
                >
                  
                  {/* IMAGE */}
                  <img
                    src={`${photo.image}?w=800&q=80`}
                    alt={photo.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">

                    <div className="w-full flex items-center justify-between">

                      {/* LIKE */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleLike(photo.id)}
                          className="hover:scale-110 transition"
                        >
                          <Heart
                            size={22}
                            className={
                              likedPhotos[photo.id]
                                ? "fill-red-500 text-red-500"
                                : "text-white"
                            }
                          />
                        </button>

                        <span className="text-white font-semibold">
                          {photo.likes +
                            (likedPhotos[photo.id] ? 1 : 0)}
                        </span>
                      </div>

                      {/* Instagram icon overlay */}
                      <Instagram size={20} className="text-white" />

                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* ================= HASHTAGS ================= */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-4">
            Share your FUKO moments with
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "#FUKO",
              "#FusionDKorea",
              "#KoreanFusion",
              "#FoodieLife",
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 border border-[#ff5722]/40 text-[#ff5722] rounded-full font-semibold bg-gray-900 hover:bg-[#ff5722]/10 transition cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* ================= SCROLL ANIMATION ================= */}
      <style jsx>{`
        .animate-scroll {
          animation: scroll 5s linear infinite;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

    </section>
  );
};

export default Gallery;

