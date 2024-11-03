import React from 'react';

const ContactSection = () => (
  <div class="container mx-auto my-10 px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
     
      <div class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Contact Us</h2>
        <form>
          <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input class="w-full px-4 h-12 mt-1 border border-gray-300 rounded-lg" type="text" id="name" placeholder="Your Name"/>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
            <input class="w-full px-4 h-12 mt-1 border border-gray-300 rounded-lg" type="email" id="email" placeholder="Your Email"/>
          </div>
          <div class="mb-4">
            <label for="msg" class="block text-sm font-medium text-gray-700">Message</label>
            <input class="w-full px-4 h-12 mt-1 border border-gray-300 rounded-lg" type="text" id="msg" placeholder="Message Title"/>
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-white py-3 w-full rounded-lg font-bold">Submit</button>
        </form>
      </div>

      
      <div class="bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
        <p class="text-lg text-gray-700 mb-4"><strong>Email:</strong>ahad.shikder.anto@gmail.com</p>
        <p class="text-lg text-gray-700 mb-4"><strong>Phone:</strong> 01615888102</p>
        <p class="text-lg text-gray-700 mb-4"><strong>Address:</strong> E-1,Zakir Hossain Road, Mohammadpur, Dhaka</p>
        <div class="flex flex-col space-y-2">
          <a href="#" class="text-blue-600 hover:underline">Facebook</a>
          <a href="#" class="text-blue-600 hover:underline">Twitter</a>
          <a href="#" class="text-blue-600 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
);

export default ContactSection;