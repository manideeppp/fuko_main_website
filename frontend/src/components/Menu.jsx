// import React, { useState } from 'react';
// import { menuCategories } from '../utils/mockData';
// import { Flame, TrendingUp } from 'lucide-react';
// import { Card, CardContent } from './ui/card';
// import { Badge } from './ui/badge';

// const Menu = () => {
//   const [selectedCategory, setSelectedCategory] = useState(menuCategories[0].id);

//   const currentCategory = menuCategories.find(cat => cat.id === selectedCategory);

//   return (
//     <section id="menu" className="py-20 bg-gradient-to-b from-black to-gray-900">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
//             Our <span className="text-[#ff5722]">Menu</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Discover our fusion masterpieces - where Korean tradition meets global innovation
//           </p>
//         </div>

//         {/* Category Navigation */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {menuCategories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setSelectedCategory(category.id)}
//               className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
//                 selectedCategory === category.id
//                   ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/50'
//                   : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
//               }`}
//             >
//               {category.name}
//             </button>
//           ))}
//         </div>

//         {/* Category Details */}
//         {currentCategory && (
//           <div className="mb-12">
//             <div className="relative h-64 rounded-2xl overflow-hidden mb-8 group">
//               <img
//                 src={`${currentCategory.image}?w=1200&q=80`}
//                 alt={currentCategory.name}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
//                 <div className="p-8">
//                   <h3 className="text-4xl font-serif font-bold text-white mb-2">
//                     {currentCategory.name}
//                   </h3>
//                   <p className="text-gray-300 text-lg">{currentCategory.description}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Menu Items */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {currentCategory.items.map((item) => (
//                 <Card
//                   key={item.id}
//                   className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff5722]/20 hover:transform hover:scale-105 group"
//                 >
//                   <CardContent className="p-6">
//                     <div className="flex justify-between items-start mb-3">
//                       <h4 className="text-xl font-semibold text-white group-hover:text-[#ff5722] transition-colors">
//                         {item.name}
//                       </h4>
//                       <div className="flex gap-2">
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
//                     <p className="text-gray-400 text-sm mb-4 leading-relaxed">
//                       {item.description}
//                     </p>
//                     <div className="flex justify-between items-center">
//                       <span className="text-2xl font-bold text-[#ff5722]">{item.price}</span>
//                       <button className="bg-[#ff5722]/10 hover:bg-[#ff5722] text-[#ff5722] hover:text-white px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium">
//                         Add to Order
//                       </button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* View Full Menu CTA */}
//         <div className="text-center mt-12">
//           <button className="bg-[#ff5722] hover:bg-[#ff7849] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50">
//             View Full Menu PDF
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;


import React, { useState } from 'react';
import { menuCategories } from '../utils/mockData';
import { Flame, TrendingUp, FileText } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(menuCategories[0]?.id);
  const currentCategory = menuCategories.find((cat) => cat.id === selectedCategory);

  return (
    <section id="menu" className="py-10 md:py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (tighter) */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
            Our <span className="text-[#ff5722]">Menu</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Discover our fusion masterpieces — where Korean tradition meets global innovation
          </p>
        </div>

        {/* Category Tabs (tighter) */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-7">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${
                selectedCategory === category.id
                  ? 'bg-[#ff5722] text-white shadow-lg shadow-[#ff5722]/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {currentCategory && (
          <>
            {/* Banner (shorter height) */}
            <div className="relative h-40 md:h-44 rounded-2xl overflow-hidden mb-6 group border border-white/10">
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

            {/* Items (tighter cards + gaps) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {currentCategory.items.slice(0, 3).map((item) => (
                <Card
                  key={item.id}
                  className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff5722]/20 hover:transform hover:scale-105 group"
                >
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start gap-3 mb-2">
                      <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#ff5722] transition-colors leading-snug">
                        {item.name}
                      </h4>

                      <div className="flex flex-col items-end gap-2">
                        {item.spicy && (
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/50">
                            <Flame size={14} className="mr-1" />
                            Spicy
                          </Badge>
                        )}
                        {item.popular && (
                          <Badge className="bg-[#ff5722]/20 text-[#ff5722] border-[#ff5722]/50">
                            <TrendingUp size={14} className="mr-1" />
                            Popular
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-3">
                      {item.description}
                    </p>

                    <span className="text-xl md:text-2xl font-bold text-[#ff5722]">
                      {item.price}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {/* PDF Button (tighter spacing) */}
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
