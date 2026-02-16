


// import React, { useState } from "react";
// import { menuCategories } from "../utils/mockData";
// import { Flame, TrendingUp, FileText } from "lucide-react";
// import { Card, CardContent } from "./ui/card";
// import { Badge } from "./ui/badge";

// const Menu = () => {
//   const [selectedCategory, setSelectedCategory] = useState(menuCategories[0]?.id);
//   const currentCategory = menuCategories.find((cat) => cat.id === selectedCategory);

//   return (
//     <section id="menu" className="py-10 md:py-12 bg-gradient-to-b from-black to-gray-900">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-6 md:mb-8">
//           <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
//             Our <span className="text-[#ff5722]">Menu</span>
//           </h2>
//           <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
//             Discover our fusion masterpieces — where Korean tradition meets global innovation
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-7">
//           {menuCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${
//                 selectedCategory === category.id
//                   ? "bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/50"
//                   : "bg-gray-800 text-gray-300 hover:bg-gray-700"
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {currentCategory && (
//           <>
//             {/* Banner */}
//             <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden mb-6 group border border-white/10">
//               <img
//                 src={`${currentCategory.image}?w=1400&q=80`}
//                 alt={currentCategory.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
//                 <div className="p-5 md:p-6">
//                   <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
//                     {currentCategory.name}
//                   </h3>
//                   <p className="text-gray-300 text-sm md:text-base">
//                     {currentCategory.description}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Smaller cards */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {currentCategory.items.slice(0, 3).map((item) => (
//                 <Card
//                   key={item.id}
//                   className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff5722]/20 group"
//                 >
//                   <CardContent className="p-4">
//                     <div className="flex justify-between items-start gap-3 mb-2">
//                       <h4 className="text-lg font-semibold text-white group-hover:text-[#ff5722] transition-colors leading-snug">
//                         {item.name}
//                       </h4>

//                       <div className="flex flex-col items-end gap-2">
//                         {item.spicy && (
//                           <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
//                             <Flame size={14} className="mr-1" />
//                             Spicy
//                           </Badge>
//                         )}
//                         {item.popular && (
//                           <Badge className="bg-[#ff5722]/20 text-[#ff5722] border-[#ff5722]/50">
//                             <TrendingUp size={14} className="mr-1" />
//                             Popular
//                           </Badge>
//                         )}
//                       </div>
//                     </div>

//                     {/* ✅ tighter description */}
//                     <p className="text-gray-400 text-sm leading-relaxed line-clamp-1">
//                       {item.description}
//                     </p>

//                     {/* ✅ PRICE REMOVED */}
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </>
//         )}

//         <div className="text-center mt-6 md:mt-7">
//           <a
//             href="/menu.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center gap-2 bg-[#ff5722] hover:bg-[#ff7849] text-white px-7 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50"
//           >
//             <FileText size={18} />
//             View Full Menu PDF
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;

import React, { useState } from "react";
import { menuCategories } from "../utils/mockData";
import { Flame, TrendingUp, FileText } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0]?.id);
  const currentCategory = menuCategories.find((cat) => cat.id === selectedCategory);

  return (
    <section
      id="menu"
      className="pt-10 md:pt-12 pb-28 md:pb-32 bg-gradient-to-b from-black to-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            Our <span className="text-[#ff5722]">Menu</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Discover our fusion masterpieces — where Korean tradition meets global
            innovation
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-7">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${
                selectedCategory === category.id
                  ? "bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {currentCategory && (
          <>
            {/* Banner */}
            <div className="relative h-36 md:h-40 rounded-2xl overflow-hidden mb-6 group border border-white/10">
              <img
                src={`${currentCategory.image}?w=1400&q=80`}
                alt={currentCategory.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                <div className="p-5 md:p-6">
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-1">
                    {currentCategory.name}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {currentCategory.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Items (smaller cards, no price) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentCategory.items.slice(0, 3).map((item) => (
                <Card
                  key={item.id}
                  className="bg-gray-800/50 border border-gray-700 hover:border-[#ff5722] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff5722]/20 group"
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h4 className="text-lg font-semibold text-white group-hover:text-[#ff5722] transition-colors leading-snug">
                        {item.name}
                      </h4>

                      <div className="flex flex-col items-end gap-2">
                        {item.spicy && (
                          <Badge className="bg-red-500/20 text-red-400 border border-red-500/50">
                            <Flame size={14} className="mr-1" />
                            Spicy
                          </Badge>
                        )}
                        {item.popular && (
                          <Badge className="bg-[#ff5722]/20 text-[#ff5722] border border-[#ff5722]/50">
                            <TrendingUp size={14} className="mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-1">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* PDF Button */}
        <div className="text-center mt-6 md:mt-7">
          <a
            href="/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff5722] hover:bg-[#ff7849] text-white px-7 py-3 rounded-lg font-semibold text-base md:text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50"
          >
            <FileText size={18} />
            View Full Menu PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
