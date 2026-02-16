// import React from "react";
// import { Send } from "lucide-react";

// const Contact = () => {
//   return (
//     <section id="contact" className="bg-black text-white py-20 px-6 lg:px-20">
//       <div className="max-w-7xl mx-auto">

//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-4">
//             Get in <span className="text-[#ff5722]">Touch</span>
//           </h2>
//           <p className="text-gray-400">
//             Have questions or feedback? We'd love to hear from you
//           </p>
//         </div>

//         {/* Two Columns */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

//           {/* LEFT SIDE */}
//           <div className="flex flex-col gap-8 h-full">

//             {/* Stay Updated */}
//             <div className="bg-[#0d1420] p-8 rounded-xl border border-gray-800">
//               <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
//               <p className="text-gray-400 mb-6">
//                 Subscribe to our newsletter for special offers and updates
//               </p>

//               <div className="flex gap-4">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="flex-1 bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none"
//                 />
//                 <button className="bg-[#ff5722] hover:bg-[#ff7849] px-6 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105">
//                   Subscribe
//                 </button>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="bg-[#0d1420] p-8 rounded-xl border border-gray-800 flex flex-col flex-1">
//               <h3 className="text-2xl font-bold mb-6">Send us a message</h3>

//               <div className="space-y-5 flex-1">

//                 <div>
//                   <label className="block mb-2 text-gray-300">Name *</label>
//                   <input
//                     type="text"
//                     className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2 text-gray-300">Email *</label>
//                   <input
//                     type="email"
//                     className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none"
//                   />
//                 </div>

//                 <div>
//                   <label className="block mb-2 text-gray-300">Phone</label>
//                   <input
//                     type="text"
//                     className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none"
//                   />
//                 </div>

//                 <div className="flex-1">
//                   <label className="block mb-2 text-gray-300">Message *</label>
//                   <textarea
//                     rows="4"
//                     className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-[#ff5722] outline-none resize-none"
//                   ></textarea>
//                 </div>

//               </div>

//               {/* Updated Send Button */}
//               <button className="mt-6 w-full bg-[#ff5722] hover:bg-[#ff7849] py-4 rounded-lg text-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#ff5722]/50 group flex items-center justify-center">
//                 Send Message
//                 <Send
//                   className="ml-2 group-hover:translate-x-1 transition-transform"
//                   size={20}
//                 />
//               </button>

//             </div>

//           </div>

//           {/* RIGHT SIDE */}
//           <div className="flex flex-col gap-8 h-full">

//             {/* Quick Contact */}
//             <div className="bg-gradient-to-br from-[#ff5722] to-[#ff7849] p-8 rounded-xl text-white">
//               <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>

//               <div className="space-y-5">
//                 <div>
//                   <p className="font-semibold">Phone</p>
//                   <p>+1 (555) 123-4567</p>
//                 </div>

//                 <div>
//                   <p className="font-semibold">Email</p>
//                   <p>hello@fukorestaurant.com</p>
//                 </div>

//                 <div>
//                   <p className="font-semibold">Address</p>
//                   <p>123 Fusion Street, Downtown District</p>
//                   <p>New York, NY 10001</p>
//                 </div>
//               </div>
//             </div>

//             {/* Business Hours */}
//             <div className="bg-[#0d1420] p-8 rounded-xl border border-gray-800 ">
//               <h3 className="text-2xl font-bold mb-6">Business Hours</h3>

//               <div className="space-y-4 text-gray-300">

//                 <div className="flex justify-between border-b border-gray-700 pb-2">
//                   <span>Sunday - Monday</span>
//                   <span className="text-[#ff5722] font-semibold">
//                     12:00 PM – 9:00 PM
//                   </span>
//                 </div>

//                 <div className="flex justify-between border-b border-gray-700 pb-2">
//                   <span>Tuesday - Thursday</span>
//                   <span className="text-[#ff5722] font-semibold">
//                     12:00 PM – 10:00 PM
//                   </span>
//                 </div>

//                 <div className="flex justify-between">
//                   <span>Friday - Saturday</span>
//                   <span className="text-[#ff5722] font-semibold">
//                     12:00 PM – 10:30 PM
//                   </span>
//                 </div>

//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-6"
      style={{ minHeight: "calc(100vh - 110px)" }}
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading (reduced) */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-1">
            Get in <span className="text-[#ff5722]">Touch</span>
          </h2>

          <p className="text-gray-400 text-sm">
            Have questions or feedback? we'd love to hear from you
          </p>
        </div>


        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="flex flex-col gap-3">

            {/* Stay Updated */}
            <div className="bg-[#0d1420] p-3.5 rounded-xl border border-gray-800">
              <h3 className="text-base font-bold mb-1">Stay Updated</h3>

              <p className="text-gray-400 text-xs mb-2">
                Subscribe to our newsletter for special offers and updates
              </p>

              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-[#0f1b2d] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#ff5722] outline-none"
                />

                <button className="bg-[#ff5722] hover:bg-[#ff7849] px-4 py-2 rounded-lg text-sm font-semibold">
                  Subscribe
                </button>
              </div>
            </div>


            {/* Form */}
            <div className="bg-[#0d1420] p-3.5 rounded-xl border border-gray-800 flex flex-col">

              <h3 className="text-base font-bold mb-2">
                Send us a message
              </h3>

              <div className="space-y-2.5">

                <div>
                  <label className="text-xs text-gray-400">
                    Name *
                  </label>

                  <input
                    type="text"
                    className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#ff5722] outline-none"
                  />
                </div>


                <div>
                  <label className="text-xs text-gray-400">
                    Email *
                  </label>

                  <input
                    type="email"
                    className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#ff5722] outline-none"
                  />
                </div>


                <div>
                  <label className="text-xs text-gray-400">
                    Phone
                  </label>

                  <input
                    type="text"
                    className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#ff5722] outline-none"
                  />
                </div>


                {/* smaller textarea */}
                <div>
                  <label className="text-xs text-gray-400">
                    Message *
                  </label>

                  <textarea
                    rows="3"
                    className="w-full bg-[#0f1b2d] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:border-[#ff5722] outline-none resize-none"
                  />
                </div>

              </div>


              <button className="mt-3 w-full bg-[#ff5722] hover:bg-[#ff7849] py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                Send Message
                <Send size={16} />
              </button>

            </div>

          </div>


          {/* RIGHT */}
          <div className="flex flex-col gap-3">

            <h3 className="text-base font-bold mb-1">
              Quick Contact
            </h3>


            {/* Phone */}
            <div className="bg-[#0d1420] px-3.5 py-3 rounded-xl border border-gray-800 flex items-center gap-3">

              <div className="bg-[#ff5722]/10 p-2 rounded-lg">
                <Phone className="text-[#ff5722]" size={16}/>
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Phone
                </p>

                <p className="text-xs text-gray-400">
                  +1 (555) 123-4567
                </p>
              </div>

            </div>


            {/* Email */}
            <div className="bg-[#0d1420] px-3.5 py-3 rounded-xl border border-gray-800 flex items-center gap-3">

              <div className="bg-[#ff5722]/10 p-2 rounded-lg">
                <Mail className="text-[#ff5722]" size={16}/>
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Email
                </p>

                <p className="text-xs text-gray-400">
                  hello@fukorestaurant.com
                </p>
              </div>

            </div>


            {/* Address */}
            <div className="bg-[#0d1420] px-3.5 py-3 rounded-xl border border-gray-800 flex items-start gap-3">

              <div className="bg-[#ff5722]/10 p-2 rounded-lg">
                <MapPin className="text-[#ff5722]" size={16}/>
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Address
                </p>

                <p className="text-xs text-gray-400">
                  123 Fusion Street, Downtown District
                </p>

                <p className="text-xs text-gray-400">
                  New York, NY 10001
                </p>
              </div>

            </div>


            {/* Business Hours */}
            <div className="bg-[#0d1420] p-3.5 rounded-xl border border-gray-800">

              <h3 className="text-base font-bold mb-2">
                Business Hours
              </h3>


              <div className="space-y-2 text-xs">

                <div className="flex justify-between border-b border-gray-700 pb-1">
                  <span>Sunday - Monday</span>
                  <span className="text-[#ff5722] font-semibold">
                    12:00 PM – 9:00 PM
                  </span>
                </div>

                <div className="flex justify-between border-b border-gray-700 pb-1">
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
