import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactSection = () => (
  <div className="container mx-auto my-10 px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input className="w-full px-4 h-12 mt-1 border border-gray-300 rounded-lg" type="text" id="name" placeholder="Your Name"/>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input className="w-full px-4 h-12 mt-1 border border-gray-300 rounded-lg" type="email" id="email" placeholder="Your Email"/>
          </div>
          <div className="mb-4">
            <label htmlFor="msg" className="block text-sm font-medium text-gray-700">Message</label>
            <input className="w-full px-4 h-12 mt-1 border border-gray-300 rounded-lg" type="text" id="msg" placeholder="Message Title"/>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 w-full rounded-lg font-bold">Submit</button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
        <p className="text-lg text-gray-700 mb-4"><strong>Email:</strong> ahad.shikder.anto@gmail.com</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Phone:</strong> 01615888102</p>
        <p className="text-lg text-gray-700 mb-4"><strong>Address:</strong> E-1, Zakir Hossain Road, Mohammadpur, Dhaka</p>
        <div className="flex space-x-4">
          <a href="#" className="text-blue-600 hover:underline" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="text-blue-600 hover:underline" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="text-blue-600 hover:underline" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;
