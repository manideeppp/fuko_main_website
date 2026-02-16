import React from "react";
import { Utensils, Clock, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Utensils size={34} />,
      title: "Authentic Fusion",
      description:
        "Blending traditional Korean flavors with global culinary innovation",
    },
    {
      icon: <Clock size={34} />,
      title: "Fast Service",
      description:
        "Quick preparation without ever compromising on quality or taste",
    },
    {
      icon: <Globe size={34} />,
      title: "Global Inspiration",
      description:
        "Drawing from worldwide cuisines to create unique Korean fusion dishes",
    },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black to-[#1a1a1a] reveal"
      // ✅ full-screen feel only on desktop, not forced on mobile
      style={{ minHeight: "auto" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-14 lg:min-h-[calc(100vh-90px)] lg:flex lg:flex-col lg:justify-center">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            What is <span className="text-[#ff5722]">FUKO?</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff5722] mx-auto" />
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
            At <span className="text-[#ff5722] font-semibold">FUKO</span>, we're
            redefining Korean cuisine with a bold, global twist. Our mission is
            simple: to deliver a fast, flavour-packed dining experience that
            never compromises on quality.
          </p>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-4">
            As a quick-service restaurant, we blend the rich traditions of
            Korean cooking with innovative flavours from around the world. Each
            dish on our menu is a celebration of culinary creativity – a fusion
            of classic Korean taste and global inspiration.
          </p>

          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            But FUKO isn't just about great food. It's a journey into the
            exciting world of Korean fusion, served with{" "}
            <span className="text-[#ff5722] font-semibold">
              speed, style, and a smile
            </span>
            .
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-[#ff5722]
                         p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-[1.02] group"
            >
              <div className="text-[#ff5722] mb-3 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

