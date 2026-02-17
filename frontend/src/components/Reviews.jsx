


// import React from "react";
// import { customerReviews } from "../utils/mockData";
// import { Star } from "lucide-react";
// import { Card, CardContent } from "./ui/card";
// import { Avatar, AvatarFallback } from "./ui/avatar";

// const Reviews = () => {

//   const renderStars = (rating) => {
//     return [...Array(5)].map((_, index) => (
//       <Star
//         key={index}
//         size={14}
//         className={
//           index < rating
//             ? "fill-[#ff5722] text-[#ff5722]"
//             : "text-gray-600"
//         }
//       />
//     ));
//   };


//   return (
//     <section
//       id="reviews"
//       className="bg-black text-white px-6 py-6 flex items-center"
//       style={{ minHeight: "calc(100vh - 110px)" }}
//     >

//       <div className="max-w-6xl mx-auto w-full">


//         {/* Header (Reduced height) */}
//         <div className="text-center mb-6">

//           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">
//             Customer <span className="text-[#ff5722]">Reviews</span>
//           </h2>

//           <p className="text-gray-400 text-sm">
//             Hear what our guests are saying about their FUKO experience
//           </p>


//           {/* Rating summary compact */}
//           <div className="mt-3 inline-flex items-center gap-2 bg-gray-800/50 px-5 py-2 rounded-lg border border-[#ff5722]/30">

//             <div className="flex gap-1">
//               {renderStars(5)}
//             </div>

//             <span className="text-xl font-bold">
//               5.0
//             </span>

//             <span className="text-gray-400 text-sm">
//               based on 200+ reviews
//             </span>

//           </div>

//         </div>



//         {/* Reviews Grid (compact spacing) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

//           {customerReviews.slice(0, 6).map((review) => (

//             <Card
//               key={review.id}
//               className="
//                 bg-[#0d1420]
//                 border border-gray-800
//                 hover:border-[#ff5722]
//                 transition-all duration-300
//                 hover:shadow-lg hover:shadow-[#ff5722]/20
//               "
//             >

//               <CardContent className="p-4">


//                 {/* User */}
//                 <div className="flex items-center gap-3 mb-2">

//                   <Avatar className="bg-[#ff5722] text-white w-8 h-8">
//                     <AvatarFallback className="bg-[#ff5722] text-white text-xs">
//                       {review.avatar}
//                     </AvatarFallback>
//                   </Avatar>


//                   <div>
//                     <h4 className="text-sm font-semibold">
//                       {review.name}
//                     </h4>

//                     <p className="text-gray-500 text-xs">
//                       {review.date}
//                     </p>
//                   </div>

//                 </div>



//                 {/* Stars */}
//                 <div className="flex gap-1 mb-2">
//                   {renderStars(review.rating)}
//                 </div>



//                 {/* Review text compact */}
//                 <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
//                   {review.review}
//                 </p>


//               </CardContent>

//             </Card>

//           ))}

//         </div>



//         {/* CTA compact */}
//         <div className="text-center mt-5">

//           <button className="
//             bg-[#ff5722]
//             hover:bg-[#ff7849]
//             px-6 py-2.5
//             rounded-lg
//             font-semibold
//             text-sm
//             transition-all duration-200
//           ">
//             Leave a Review
//           </button>

//         </div>


//       </div>

//     </section>
//   );
// };

// export default Reviews;



import React, { useEffect, useMemo, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import maskBg from "../assets/mask.png"; // ✅ your existing mask background
//import reviewFood from "../assets/mask.png"; // ✅ add any food image

const Stars = ({ value = 5 }) => {
  const rating = Math.max(0, Math.min(5, Number(value) || 0));
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "fill-[#ffb400] text-[#ffb400]" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

const Reviews = () => {
  const [data, setData] = useState({
    place_name: "FUKO - Crystal Palace",
    place_rating: 4.9,
    user_ratings_total: 128,
    reviews: [],
  });

  const [active, setActive] = useState(0);
  const hoverRef = useRef(false);
  const intervalRef = useRef(null);

  const reviews = useMemo(() => data.reviews || [], [data.reviews]);

  useEffect(() => {
    const load = async () => {
      try {
        const r = await fetch("http://localhost:8000/api/google-reviews");
        const json = await r.json();
        setData(json);
        setActive(0);
      } catch (e) {
        console.log("reviews fetch failed", e);
      }
    };
    load();
  }, []);

  useEffect(() => {
    if (!reviews.length) return;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (!hoverRef.current) {
        setActive((i) => (i + 1) % reviews.length);
      }
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [reviews.length]);

  const current = reviews[active];

  const next = () => setActive((i) => (i + 1) % reviews.length);
  const prev = () => setActive((i) => (i - 1 + reviews.length) % reviews.length);

  return (
    <section
      id="reviews"
      className="relative bg-black text-white"
      style={{ minHeight: "calc(100vh - 110px)" }}
    >
      {/* Background mask */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${maskBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-12 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT white carousel card */}
          <div
            className="relative rounded-3xl bg-white text-black shadow-2xl overflow-hidden"
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
          >
            <div className="px-10 pt-10 pb-6">
              <div className="text-center">
                <div className="text-[54px] leading-none text-[#ff5722] select-none">
                  “
                </div>

                <span className="text-[#ff5722] font-semibold tracking-wide uppercase text-xs">
                  Testimonials
                </span>

                <h2 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
                  What Customers Says
                </h2>
              </div>

              {/* Review */}
              {current && (
                <div className="mt-9 flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-black/10 bg-gray-100">
                      {current.profile_photo_url ? (
                        <img
                          src={current.profile_photo_url}
                          alt={current.author_name}
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center font-bold text-gray-700">
                          {(current.author_name || "C").slice(0, 1).toUpperCase()}
                        </div>
                      )}
                    </div>

                    {/* Google badge */}
                    <div className="absolute -right-1 -bottom-1 h-6 w-6 rounded-full bg-white shadow flex items-center justify-center border border-black/10">
                      <span className="font-extrabold text-[12px] text-[#4285F4]">
                        G
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="font-semibold text-lg">{current.author_name}</div>
                    <div className="text-gray-500 text-sm">
                      {current.relative_time_description}
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <Stars value={current.rating} />
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-600 text-sm font-medium">
                      Verified Google Review
                    </span>
                  </div>

                  <p className="mt-5 max-w-xl text-[15px] md:text-[16px] leading-relaxed text-gray-800">
                    {current.text}
                  </p>

                  {/* Controls */}
                  <div className="mt-8 flex items-center gap-3">
                    <button
                      onClick={prev}
                      className="h-10 w-10 rounded-full border border-black/10 hover:border-[#ff5722]/60 hover:bg-[#ff5722]/10 transition flex items-center justify-center"
                      aria-label="Previous review"
                    >
                      <ChevronLeft size={18} />
                    </button>

                    <div className="flex items-center gap-2">
                      {reviews.slice(0, 7).map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActive(i)}
                          className={`h-2.5 rounded-full transition-all ${
                            i === active
                              ? "w-8 bg-[#ff5722]"
                              : "w-2.5 bg-black/15 hover:bg-black/25"
                          }`}
                          aria-label={`Go to review ${i + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={next}
                      className="h-10 w-10 rounded-full border border-black/10 hover:border-[#ff5722]/60 hover:bg-[#ff5722]/10 transition flex items-center justify-center"
                      aria-label="Next review"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom summary */}
            <div className="px-10 py-5 border-t border-black/10 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-semibold text-black">Google</span> rating score:{" "}
                <span className="font-semibold text-black">
                  {Number(data.place_rating || 4.9).toFixed(1)}
                </span>{" "}
                of 5, based on{" "}
                <span className="font-semibold text-black">
                  {data.user_ratings_total || 0} reviews
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT food image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={maskBg}
                alt="FUKO Dish"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            <div className="absolute -inset-4 rounded-[2rem] blur-3xl bg-[#ff5722]/10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

