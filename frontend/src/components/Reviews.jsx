import React from 'react';
import { customerReviews } from '../utils/mockData';
import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';

const Reviews = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={18}
        className={index < rating ? 'fill-[#ff5722] text-[#ff5722]' : 'text-gray-600'}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Customer <span className="text-[#ff5722]">Reviews</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear what our guests are saying about their FUKO experience
          </p>
          
          {/* Rating Summary */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gray-800/50 px-8 py-4 rounded-lg border border-[#ff5722]/30">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span className="text-3xl font-bold text-white">5.0</span>
            <span className="text-gray-400">based on 200+ reviews</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customerReviews.map((review) => (
            <Card
              key={review.id}
              className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff5722]/20 hover:transform hover:scale-105"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="bg-[#ff5722] text-white font-bold">
                      <AvatarFallback className="bg-[#ff5722] text-white">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-white font-semibold">{review.name}</h4>
                      <p className="text-gray-500 text-sm">{review.date}</p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <p className="text-gray-400 leading-relaxed">
                  {review.review}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leave Review CTA */}
        <div className="text-center mt-12">
          <button className="bg-[#ff5722] hover:bg-[#ff7849] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50">
            Leave a Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;