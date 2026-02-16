// import React from 'react';
// import { externalLinks } from '../utils/mockData';
// import { ShoppingBag, Store, Calendar } from 'lucide-react';
// import { Card, CardContent } from './ui/card';

// const OrderSection = () => {
//   const orderOptions = [
//     {
//       icon: <ShoppingBag size={48} />,
//       title: 'Online Delivery',
//       description: 'Get FUKO delivered straight to your door',
//       buttonText: 'Order Delivery',
//       link: externalLinks.onlineOrdering,
//       color: 'orange'
//     },
//     {
//       icon: <Store size={48} />,
//       title: 'Store Pickup',
//       description: 'Order ahead and skip the wait',
//       buttonText: 'Order Pickup',
//       link: externalLinks.storePickup,
//       color: 'orange'
//     },
//     {
//       icon: <Calendar size={48} />,
//       title: 'Book a Table',
//       description: 'Reserve your spot for dine-in experience',
//       buttonText: 'Book Now',
//       link: externalLinks.bookTable,
//       color: 'orange'
//     }
//   ];

//   const handleOrderClick = (link) => {
//     window.open(link, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <section id="order" className="py-20 bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
//             Order <span className="text-[#ff5722]">Now</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Choose your preferred way to enjoy FUKO's fusion creations
//           </p>
//         </div>

//         {/* Order Options */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {orderOptions.map((option, index) => (
//             <Card
//               key={index}
//               className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-[#ff5722] transition-all duration-300 group hover:shadow-2xl hover:shadow-[#ff5722]/20"
//             >
//               <CardContent className="p-8 text-center">
//                 <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#ff5722]/10 text-[#ff5722] mb-6 group-hover:bg-[#ff5722] group-hover:text-white transition-all duration-300 group-hover:scale-110">
//                   {option.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff5722] transition-colors">
//                   {option.title}
//                 </h3>
//                 <p className="text-gray-400 mb-6 leading-relaxed">
//                   {option.description}
//                 </p>
//                 <button
//                   onClick={() => handleOrderClick(option.link)}
//                   className="w-full bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50"
//                 >
//                   {option.buttonText}
//                 </button>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Additional Info */}
//         <div className="mt-16 text-center">
//           <div className="inline-block bg-gray-800/50 border border-[#ff5722]/30 rounded-lg px-8 py-6">
//             <p className="text-gray-300 text-lg">
//               <span className="text-[#ff5722] font-semibold">Fast Service Guarantee:</span> 
//               {' '}Quick preparation without compromising on quality
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OrderSection;



import React from "react";
import { externalLinks } from "../utils/mockData";
import { ShoppingBag, Store, Calendar } from "lucide-react";
import { Card, CardContent } from "./ui/card";

import orderBg from "../assets/table.png";

const OrderSection = () => {
  const orderOptions = [
    {
      icon: <ShoppingBag size={48} />,
      title: "Online Delivery",
      description: "Get FUKO delivered straight to your door",
      buttonText: "Order Delivery",
      link: externalLinks.onlineOrdering,
    },
    {
      icon: <Store size={48} />,
      title: "Store Pickup",
      description: "Order ahead and skip the wait",
      buttonText: "Order Pickup",
      link: externalLinks.storePickup,
    },
    {
      icon: <Calendar size={48} />,
      title: "Book a Table",
      description: "Reserve your spot for dine-in experience",
      buttonText: "Book Now",
      link: externalLinks.bookTable,
    },
  ];

  const handleOrderClick = (link) => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="order" className="relative overflow-hidden bg-black">
      {/* ✅ Background image as its own layer (so we can tune visibility) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${orderBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // Make seating/table image more visible
          filter: "brightness(1.18) contrast(1.08) saturate(1.18)",
          transform: "scale(1.03)", // removes edges / looks richer
        }}
      />

      {/* ✅ Lighter overlay so tables are visible */}
      <div className="absolute inset-0 bg-black/35" />

      {/* ✅ Gentle gradient for readability (NOT too strong) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />

      {/* Optional tiny blur to blend (keep low so tables stay sharp) */}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Order <span className="text-[#ff5722]">Now</span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Choose your preferred way to enjoy FUKO&apos;s fusion creations
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {orderOptions.map((option, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700 hover:border-[#ff5722] transition-all duration-300 group hover:shadow-2xl hover:shadow-[#ff5722]/20"
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#ff5722]/10 text-[#ff5722] mb-6 group-hover:bg-[#ff5722] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {option.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff5722] transition-colors">
                  {option.title}
                </h3>

                <p className="text-white/65 mb-6 leading-relaxed">
                  {option.description}
                </p>

                <button
                  onClick={() => handleOrderClick(option.link)}
                  className="w-full bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50"
                >
                  {option.buttonText}
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
