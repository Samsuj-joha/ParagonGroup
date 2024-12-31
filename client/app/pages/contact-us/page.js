import Header from '@/layout/header/page';
import React from 'react';

const ContactUs = () => {
  return (
 <>
 <Header/>
 <div className="bg-gray-100 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Contact Us</h1>

        {/* Contact Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 mb-12">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-gray-700">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Write your message here"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">Our Office</h2>
            <p className="text-lg text-gray-600">
              <strong>Address:</strong> Paragon House, 5 Mohakhali C/A, Dhaka 1212, Bangladesh
            </p>
            <p className="text-lg text-gray-600">
              <strong>Email:</strong> info@paragongroup-bd.com
            </p>
            <p className="text-lg text-gray-600">
              <strong>Phone:</strong> +88 02 9882107-8
            </p>
          </div>

          {/* Embedded Map */}
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.752645974106!2d90.40281831543626!3d23.809232917471446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c72b13d446dd%3A0x24283916bcb9c46!2sParagon%20House%2C%205%20Mohakhali%20C%2FA%2C%20Dhaka%201212%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1628071397649!5m2!1sen!2sus"
              title="Google Maps"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
 </>
  );
};

export default ContactUs;
