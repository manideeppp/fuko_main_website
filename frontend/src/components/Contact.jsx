// import React, { useState } from 'react';
// import { locationInfo, externalLinks } from '../utils/mockData';
// import { Send } from 'lucide-react';
// import { Card, CardContent } from './ui/card';
// import { Input } from './ui/input';
// import { Textarea } from './ui/textarea';
// import { Button } from './ui/button';
// import { toast } from 'sonner';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Mock submission
//     toast.success('Thank you! We\'ll get back to you soon.');
//     setFormData({ name: '', email: '', phone: '', message: '' });
//   };

//   return (
//     <section id="contact" className="py-20 bg-black">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
//             Get in <span className="text-[#ff5722]">Touch</span>
//           </h2>
//           <p className="text-gray-400 text-lg max-w-2xl mx-auto">
//             Have questions or feedback? We'd love to hear from you
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <Card className="bg-gray-800/50 border-gray-700">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
//                     Name *
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     type="text"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="bg-gray-900 border-gray-700 text-white focus:border-[#ff5722] focus:ring-[#ff5722]"
//                     placeholder="Your name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
//                     Email *
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="bg-gray-900 border-gray-700 text-white focus:border-[#ff5722] focus:ring-[#ff5722]"
//                     placeholder="your@email.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="phone" className="block text-gray-300 mb-2 font-medium">
//                     Phone
//                   </label>
//                   <Input
//                     id="phone"
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="bg-gray-900 border-gray-700 text-white focus:border-[#ff5722] focus:ring-[#ff5722]"
//                     placeholder="+1 (555) 123-4567"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
//                     Message *
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     required
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={5}
//                     className="bg-gray-900 border-gray-700 text-white focus:border-[#ff5722] focus:ring-[#ff5722] resize-none"
//                     placeholder="Tell us what's on your mind..."
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-[#ff5722] hover:bg-[#ff7849] text-white py-6 text-lg font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50 group"
//                 >
//                   Send Message
//                   <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Quick Info & Social */}
//           <div className="space-y-6">
//             {/* Quick Contact Info */}
//             <Card className="bg-gradient-to-br from-[#ff5722] to-[#ff7849] border-none">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
//                 <div className="space-y-4 text-white">
//                   <div>
//                     <p className="font-semibold mb-1">Phone</p>
//                     <a href={`tel:${locationInfo.phone}`} className="hover:underline">
//                       {locationInfo.phone}
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-semibold mb-1">Email</p>
//                     <a href={`mailto:${locationInfo.email}`} className="hover:underline">
//                       {locationInfo.email}
//                     </a>
//                   </div>
//                   <div>
//                     <p className="font-semibold mb-1">Address</p>
//                     <p>{locationInfo.address}</p>
//                     <p>{locationInfo.city}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Business Hours */}
//             <Card className="bg-gray-800/50 border-gray-700">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-bold text-white mb-6">Business Hours</h3>
//                 <div className="space-y-3 text-gray-300">
//                   <div className="flex justify-between">
//                     <span className="font-medium">Monday - Friday</span>
//                     <span className="text-[#ff5722] font-semibold">{locationInfo.hours.weekday}</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="font-medium">Saturday - Sunday</span>
//                     <span className="text-[#ff5722] font-semibold">{locationInfo.hours.weekend}</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Newsletter */}
//             <Card className="bg-gray-800/50 border-gray-700">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
//                 <p className="text-gray-400 mb-6">Subscribe to our newsletter for special offers and updates</p>
//                 <div className="flex gap-2">
//                   <Input
//                     type="email"
//                     placeholder="Enter your email"
//                     className="bg-gray-900 border-gray-700 text-white focus:border-[#ff5722]"
//                   />
//                   <Button className="bg-[#ff5722] hover:bg-[#ff7849] px-6">
//                     Subscribe
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React from "react";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Get in <span className="text-[#ff5722]">Touch</span>
          </h2>
          <p className="text-gray-400">
            Have questions or feedback? We'd love to hear from you
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-8 h-full">

            {/* Stay Updated */}
            <div className="bg-[#0d1420] p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter for special offers and updates
              </p>

              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none"
                />
                <button className="bg-[#ff5722] hover:bg-[#ff7849] px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#0d1420] p-8 rounded-xl border border-gray-800 flex flex-col flex-1">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

              <div className="space-y-5 flex-1">

                <div>
                  <label className="block mb-2 text-gray-300">Name *</label>
                  <input
                    type="text"
                    className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">Email *</label>
                  <input
                    type="email"
                    className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-gray-300">Phone</label>
                  <input
                    type="text"
                    className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none"
                  />
                </div>

                <div className="flex-1">
                  <label className="block mb-2 text-gray-300">Message *</label>
                  <textarea
                    rows="4"
                    className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none resize-none"
                  ></textarea>
                </div>

              </div>

              {/* Updated Send Button */}
              <button className="mt-6 w-full bg-[#ff5722] hover:bg-[#ff7849] py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50 group flex items-center justify-center">
                Send Message
                <Send
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-8 h-full">

            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-[#ff5722] to-[#ff7849] p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>

              <div className="space-y-5">
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p>hello@fukorestaurant.com</p>
                </div>

                <div>
                  <p className="font-semibold">Address</p>
                  <p>123 Fusion Street, Downtown District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-[#0d1420] p-8 rounded-xl border border-gray-800 ">
              <h3 className="text-2xl font-bold mb-6">Business Hours</h3>

              <div className="space-y-4 text-gray-300">

                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Sunday - Monday</span>
                  <span className="text-[#ff5722] font-semibold">
                    12:00 PM – 9:00 PM
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-700 pb-2">
                  <span>Tuesday - Thursday</span>
                  <span className="text-[#ff5722] font-semibold">
                    12:00 PM – 10:00 PM
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span className="text-[#ff5722] font-semibold">
                    12:00 PM – 10:30 PM
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

