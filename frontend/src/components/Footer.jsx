// import React from 'react';
// import { externalLinks, locationInfo } from '../utils/mockData';
// import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   const socialLinks = [
//     { icon: <Instagram size={24} />, url: externalLinks.instagram, name: 'Instagram' },
//     { icon: <Facebook size={24} />, url: externalLinks.facebook, name: 'Facebook' },
//     { icon: <Twitter size={24} />, url: externalLinks.twitter, name: 'Twitter' }
//   ];

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
//           {/* Brand Column */}
//           <div>
//             <div className="border-4 border-[#ff5722] px-6 py-3 inline-block mb-4">
//               <h3 className="text-3xl font-bold text-[#ff5722] tracking-wider">FUKO</h3>
//             </div>
//             <p className="text-gray-400 leading-relaxed mb-4">
//               Redefining Korean cuisine with a bold, global twist. Fast, flavour-packed dining that never compromises on quality.
//             </p>
//             {/* Social Media */}
//             <div className="flex gap-3">
//               {socialLinks.map((social) => (
//                 <a
//                   key={social.name}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-gray-800 hover:bg-[#ff5722] text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-200 hover:scale-110"
//                   aria-label={social.name}
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {['Home', 'Menu', 'Location', 'Reviews', 'Gallery', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <button
//                     onClick={() => scrollToSection(item.toLowerCase())}
//                     className="text-gray-400 hover:text-[#ff5722] transition-colors"
//                   >
//                     {item}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="text-white font-bold text-lg mb-4">Services</h4>
//             <ul className="space-y-2">
//               <li>
//                 <a
//                   href={externalLinks.onlineOrdering}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-[#ff5722] transition-colors"
//                 >
//                   Online Delivery
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={externalLinks.storePickup}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-[#ff5722] transition-colors"
//                 >
//                   Store Pickup
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href={externalLinks.bookTable}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-[#ff5722] transition-colors"
//                 >
//                   Book a Table
//                 </a>
//               </li>
//               <li>
//                 <button className="text-gray-400 hover:text-[#ff5722] transition-colors">
//                 </button>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start gap-3 text-gray-400">
//                 <MapPin className="text-[#ff5722] flex-shrink-0 mt-1" size={20} />
//                 <span className="leading-relaxed">
//                   {locationInfo.address}<br />
//                   {locationInfo.city}
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone className="text-[#ff5722] flex-shrink-0" size={20} />
//                 <a
//                   href={`tel:${locationInfo.phone}`}
//                   className="text-gray-400 hover:text-[#ff5722] transition-colors"
//                 >
//                   {locationInfo.phone}
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail className="text-[#ff5722] flex-shrink-0" size={20} />
//                 <a
//                   href={`mailto:${locationInfo.email}`}
//                   className="text-gray-400 hover:text-[#ff5722] transition-colors"
//                 >
//                   {locationInfo.email}
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="border-t border-gray-800 pt-8 mt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
//             <p className="text-gray-500 text-sm">
//               © {currentYear} FUKO - Fusion'd Korea. All rights reserved.
//             </p>
//             <div className="flex gap-6 text-sm">
//               <button className="text-gray-500 hover:text-[#ff5722] transition-colors">
//                 Privacy Policy
//               </button>
//               <button className="text-gray-500 hover:text-[#ff5722] transition-colors">
//                 Terms of Service
//               </button>
//               <button className="text-gray-500 hover:text-[#ff5722] transition-colors">
//                 Accessibility
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { externalLinks, locationInfo } from '../utils/mockData';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import logo from '../assets/FUKO_LOGO_ORANGE_transparant.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Instagram size={24} />, url: externalLinks.instagram, name: 'Instagram' },
    { icon: <Facebook size={24} />, url: externalLinks.facebook, name: 'Facebook' },
    {
      icon: (
        /* Official TikTok SVG */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M19.589 6.686a4.793 4.793 0 01-3.77-1.879V15.3a5.32 5.32 0 11-4.63-5.27v2.682a2.64 2.64 0 102.64 2.64V0h2.682a4.793 4.793 0 003.078 4.492v2.194z"/>
        </svg>
      ),
      url: externalLinks.tiktok,
      name: 'TikTok'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">

          {/* Brand Column */}
          <div>
            {/* BIGGER LOGO */}
            <div className="mb-6">
              <img
                src={logo}
                alt="Fuko Logo"
                className="h-24 w-auto"   // 🔥 bigger logo
              />
            </div>

            <p className="text-gray-400 leading-relaxed mb-6">
              Redefining Korean cuisine with a bold, global twist. 
              Fast, flavour-packed dining that never compromises on quality.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-[#ff5722] text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-200 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'Location', 'Reviews', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-gray-400 hover:text-[#ff5722] transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={externalLinks.onlineOrdering}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff5722] transition-colors"
                >
                  Online Delivery
                </a>
              </li>
              <li>
                <a
                  href={externalLinks.storePickup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff5722] transition-colors"
                >
                  Store Pickup
                </a>
              </li>
              <li>
                <a
                  href={externalLinks.bookTable}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff5722] transition-colors"
                >
                  Book a Table
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-[#ff5722] mt-1" size={20} />
                <span>
                  {locationInfo.address}<br />
                  {locationInfo.city}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="text-[#ff5722]" size={20} />
                <a
                  href={`tel:${locationInfo.phone}`}
                  className="text-gray-400 hover:text-[#ff5722]"
                >
                  {locationInfo.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="text-[#ff5722]" size={20} />
                <a
                  href={`mailto:${locationInfo.email}`}
                  className="text-gray-400 hover:text-[#ff5722]"
                >
                  {locationInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} FUKO - Fusion'd Korea. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <button className="text-gray-500 hover:text-[#ff5722]">
              Privacy Policy
            </button>
            <button className="text-gray-500 hover:text-[#ff5722]">
              Terms of Service
            </button>
            <button className="text-gray-500 hover:text-[#ff5722]">
              Accessibility
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
