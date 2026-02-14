import React from 'react';
import { Utensils, Clock, Globe } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Utensils size={40} />,
      title: 'Authentic Fusion',
      description: 'Blending traditional Korean flavors with global culinary innovation'
    },
    {
      icon: <Clock size={40} />,
      title: 'Fast Service',
      description: 'Quick preparation without ever compromising on quality or taste'
    },
    {
      icon: <Globe size={40} />,
      title: 'Global Inspiration',
      description: 'Drawing from worldwide cuisines to create unique Korean fusion dishes'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            What is <span className="text-[#ff5722]">FUKO?</span>
          </h2>
          <div className="w-24 h-1 bg-[#ff5722] mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6">
            At <span className="text-[#ff5722] font-semibold">FUKO</span>, we're redefining Korean cuisine with a bold, global twist. 
            Our mission is simple: to deliver a fast, flavour-packed dining experience that never compromises on quality.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
            As a quick-service restaurant, we blend the rich traditions of Korean cooking with innovative 
            flavours from around the world. Each dish on our menu is a celebration of culinary creativity – 
            a fusion of classic Korean taste and global inspiration.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            But FUKO isn't just about great food. It's a journey into the exciting world of Korean fusion, 
            served with <span className="text-[#ff5722] font-semibold">speed, style, and a smile</span>.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-gray-700 hover:border-[#ff5722] p-8 rounded-lg transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-[#ff5722] mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl text-white mb-6 font-serif italic">
            "Join us for a meal and taste the essence of Korea – reimagined."
          </p>
          <div className="inline-block bg-[#ff5722]/10 border-2 border-[#ff5722] px-8 py-4 rounded-lg">
            <p className="text-[#ff5722] font-bold text-xl">
              Experience Korean Fusion Like Never Before
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
