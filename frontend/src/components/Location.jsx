// import React from 'react';
// import { locationInfo } from '../utils/mockData';
// import { MapPin, Phone, Mail, Clock } from 'lucide-react';
// import { Card, CardContent } from './ui/card';

// const Location = () => {
//   return (
//     <section id="location" className="py-20 bg-gradient-to-b from-gray-900 to-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
//             Visit <span className="text-[#ff5722]">Us</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Find us in the heart of the city, ready to serve you authentic Korean fusion
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Map */}
//           <div className="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-auto border-2 border-gray-800 hover:border-[#ff5722] transition-colors duration-300">
//             <iframe
//               src={locationInfo.mapUrl}
//               width="100%"
//               height="100%"
//               style={{ border: 0, minHeight: '400px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="FUKO Restaurant Location"
//             ></iframe>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-6">
//             <Card className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
//               <CardContent className="p-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
//                     <MapPin className="text-[#ff5722] group-hover:text-white" size={28} />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Address</h3>
//                     <p className="text-gray-400 leading-relaxed">
//                       {locationInfo.address}<br />
//                       {locationInfo.city}
//                     </p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
//               <CardContent className="p-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
//                     <Phone className="text-[#ff5722] group-hover:text-white" size={28} />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
//                     <a
//                       href={`tel:${locationInfo.phone}`}
//                       className="text-gray-400 hover:text-[#ff5722] transition-colors"
//                     >
//                       {locationInfo.phone}
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
//               <CardContent className="p-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
//                     <Mail className="text-[#ff5722] group-hover:text-white" size={28} />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-white mb-2">Email</h3>
//                     <a
//                       href={`mailto:${locationInfo.email}`}
//                       className="text-gray-400 hover:text-[#ff5722] transition-colors"
//                     >
//                       {locationInfo.email}
//                     </a>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
//               <CardContent className="p-6">
//                 <div className="flex items-start space-x-4">
//                   <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
//                     <Clock className="text-[#ff5722] group-hover:text-white" size={28} />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
//                     <div className="space-y-1 text-gray-400">
//                       <p>Monday - Friday: {locationInfo.hours.weekday}</p>
//                       <p>Saturday - Sunday: {locationInfo.hours.weekend}</p>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Get Directions Button */}
//             <button className="w-full bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50">
//               Get Directions
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Location;

// 



// import React from "react";
// import { locationInfo } from "../utils/mockData";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import { Card, CardContent } from "./ui/card";

// const Location = () => {
//   return (
//     <section
//       id="location"
//       className="pt-12 md:pt-14 pb-24 md:pb-28 bg-gradient-to-b from-gray-900 to-black"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-8 md:mb-10">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3">
//             Visit <span className="text-[#ff5722]">Us</span>
//           </h2>
//           <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
//             Find us in the heart of the city, ready to serve you authentic Korean fusion
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//           {/* ✅ Map: controlled height (not too tall) */}
//           <div className="rounded-2xl overflow-hidden border border-gray-700 hover:border-[#ff5722] transition-all duration-300 shadow-lg h-[360px] md:h-[420px] lg:h-[520px]">
//             <iframe
//               src={locationInfo.mapUrl}
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="FUKO Restaurant Location"
//               className="w-full h-full"
//             />
//           </div>

//           {/* Right column */}
//           <div className="flex flex-col">
//             <div className="space-y-4">
//               {/* Address */}
//               <Card className="bg-gray-800/50 border border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
//                 <CardContent className="p-5 flex items-start gap-4">
//                   <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
//                     <MapPin className="text-[#ff5722] group-hover:text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
//                     <p className="text-gray-400 text-sm leading-relaxed">
//                       {locationInfo.address}
//                       <br />
//                       {locationInfo.city}
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Phone */}
//               <Card className="bg-gray-800/50 border border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
//                 <CardContent className="p-5 flex items-start gap-4">
//                   <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
//                     <Phone className="text-[#ff5722] group-hover:text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
//                     <a
//                       href={`tel:${locationInfo.phone}`}
//                       className="text-gray-400 text-sm hover:text-[#ff5722] transition-colors"
//                     >
//                       {locationInfo.phone}
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Email */}
//               <Card className="bg-gray-800/50 border border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
//                 <CardContent className="p-5 flex items-start gap-4">
//                   <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
//                     <Mail className="text-[#ff5722] group-hover:text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
//                     <a
//                       href={`mailto:${locationInfo.email}`}
//                       className="text-gray-400 text-sm hover:text-[#ff5722] transition-colors"
//                     >
//                       {locationInfo.email}
//                     </a>
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Hours */}
//               <Card className="bg-gray-800/50 border border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
//                 <CardContent className="p-5 flex items-start gap-4">
//                   <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
//                     <Clock className="text-[#ff5722] group-hover:text-white" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="text-lg font-semibold text-white mb-1">Hours</h3>
//                     <div className="text-gray-400 text-sm space-y-1">
//                       <p>Mon – Fri: {locationInfo.hours.weekday}</p>
//                       <p>Sat – Sun: {locationInfo.hours.weekend}</p>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>

//             {/* ✅ Button: add breathing space */}
//             <button className="w-full mt-5 bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50">
//               Get Directions
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Location;


import React from "react";
import { MapPin } from "lucide-react";

const Location = () => {
  const directionsLink =
    "https://www.google.com/maps/dir//FUKO+-+Crystal+Palace,+64+Westow+Hill,+London+SE19+1RX,+United+Kingdom";

  const embedUrl =
    "https://www.google.com/maps?output=embed&q=" +
    encodeURIComponent(
      "FUKO - Crystal Palace, 64 Westow Hill, London SE19 1RX, United Kingdom"
    );

  return (
    <section
      id="location"
      className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            Visit <span className="text-[#ff5722]">Us</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Find us in the heart of the city, ready to serve you authentic Korean fusion
          </p>
        </div>

        {/* Map Card */}
        <div className="rounded-2xl overflow-hidden border border-gray-700 hover:border-[#ff5722] transition-all duration-300 shadow-lg">

          {/* Smaller map height */}
          <div className="h-[300px] md:h-[380px]">
            <iframe
              src={embedUrl}
              title="FUKO Location"
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>

          {/* Footer */}
          <div className="bg-black/40 border-t border-white/10 px-5 py-3 flex items-center justify-between">

            <div className="text-white/80 text-sm">
              64 Westow Hill, London SE19 1RX
            </div>

            <a
              href={directionsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ff5722] hover:bg-[#ff7849] text-white px-5 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              <MapPin size={16} />
              Get Directions
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Location;
