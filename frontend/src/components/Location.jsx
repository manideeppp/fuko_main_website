import React from 'react';
import { locationInfo } from '../utils/mockData';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
            Visit <span className="text-[#ff5722]">Us</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Find us in the heart of the city, ready to serve you authentic Korean fusion
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-auto border-2 border-gray-800 hover:border-[#ff5722] transition-colors duration-300">
            <iframe
              src={locationInfo.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="FUKO Restaurant Location"
            ></iframe>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
                    <MapPin className="text-[#ff5722] group-hover:text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {locationInfo.address}<br />
                      {locationInfo.city}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
                    <Phone className="text-[#ff5722] group-hover:text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                    <a
                      href={`tel:${locationInfo.phone}`}
                      className="text-gray-400 hover:text-[#ff5722] transition-colors"
                    >
                      {locationInfo.phone}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
                    <Mail className="text-[#ff5722] group-hover:text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                    <a
                      href={`mailto:${locationInfo.email}`}
                      className="text-gray-400 hover:text-[#ff5722] transition-colors"
                    >
                      {locationInfo.email}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-[#ff5722] transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#ff5722]/10 p-3 rounded-lg group-hover:bg-[#ff5722] transition-colors duration-300">
                    <Clock className="text-[#ff5722] group-hover:text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
                    <div className="space-y-1 text-gray-400">
                      <p>Monday - Friday: {locationInfo.hours.weekday}</p>
                      <p>Saturday - Sunday: {locationInfo.hours.weekend}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Get Directions Button */}
            <button className="w-full bg-[#ff5722] hover:bg-[#ff7849] text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;