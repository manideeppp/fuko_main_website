import React, { useState } from 'react';
import { socialMediaPhotos } from '../utils/mockData';
import { Heart, Instagram } from 'lucide-react';

const Gallery = () => {
  const [likedPhotos, setLikedPhotos] = useState({});

  const handleLike = (photoId) => {
    setLikedPhotos((prev) => ({
      ...prev,
      [photoId]: !prev[photoId]
    }));
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="text-[#ff5722]" size={40} />
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-white">
              <span className="text-[#ff5722]">Instagram</span> Gallery
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
            Follow us @fukorestaurant for daily food inspiration
          </p>
          <a
            href="https://www.instagram.com/fukorestaurant"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
          >
            Follow Us on Instagram
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {socialMediaPhotos.map((photo) => (
            <div
              key={photo.id}
              className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              {/* Image */}
              <img
                src={`${photo.image}?w=600&q=80`}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleLike(photo.id)}
                      className="transition-transform hover:scale-110"
                    >
                      <Heart
                        size={24}
                        className={`${
                          likedPhotos[photo.id]
                            ? 'fill-red-500 text-red-500'
                            : 'text-white'
                        } transition-colors`}
                      />
                    </button>
                    <span className="text-white font-semibold">
                      {photo.likes + (likedPhotos[photo.id] ? 1 : 0)}
                    </span>
                  </div>
                  <Instagram className="text-white" size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Hashtag Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg mb-4">
            Share your FUKO moments with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['#FUKO', '#FusionDKorea', '#KoreanFusion', '#FoodieLife'].map((hashtag) => (
              <span
                key={hashtag}
                className="bg-gray-800/50 border border-[#ff5722]/30 text-[#ff5722] px-4 py-2 rounded-full font-semibold hover:bg-[#ff5722]/10 transition-colors cursor-pointer"
              >
                {hashtag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;