// HomeSection.js
import React from 'react';
import photo from './assets/photo.jpeg';


const HomeSection = () => (
  <div class="main-content px-14">
      <div class="container mt-16 flex flex-wrap justify-center md:flex-nowrap">
        <div class="left w-full md:w-1/3 mx-6">
          <img class="w-full rounded-2xl" src={photo} alt=""/>
        </div>
        <div class="right w-full md:w-2/3 mx-6">
          <p class="text-lg text-black font-bold">"The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself..."</p>
          <blockquote class="text-lg text-black mt-4">
            <p>-M.A. Ahad Shikder</p>
          </blockquote>
        </div>
      </div>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

      <div class="container mt-10 flex flex-wrap justify-center md:flex-nowrap">
        <div class="left bg-gray-100 flex items-center justify-center mx-6 rounded-md w-full md:w-1/3">
          <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
            <div class="mb-4">
              <h1 class="text-2xl font-bold text-gray-800">M.A. Ahad Shikder</h1>
              <p class="text-gray-600">ID: 123456</p>
            </div>
            <div class="mb-4">
              <p class="text-gray-700"><strong>Email:</strong> ahad.shikder.anto@gmail.com</p>
              <p class="text-gray-700"><strong>Phone:</strong> 01615888102</p>
            </div>
            <div class="mb-4">
              <p class="text-gray-700"><strong>Address:</strong> E-1, Zakir Hossain Road, Dhaka</p>
            </div>
            <div class="flex justify-end">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Contact</button>
            </div>
          </div>
        </div>
        <div class="right w-full md:w-2/3 mx-6 mt-6 md:mt-0">
          <p class="text-lg text-black font-bold">"M.A. Ahad Shikder is a 24-year-old software engineer intern from Springfield, Illinois..."</p>
        </div>
      </div>

      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>

      <div class="container mx-auto text-center mb-4">
        <h1 class="text-3xl font-bold mb-6 text-black">Tech Stacks</h1>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 justify-items-center">
          <div class="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" class="h-16 w-16 md:h-20 md:w-20"/>
            <p class="text-black mt-2">JavaScript</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" class="h-16 w-16 md:h-20 md:w-20"/>
            <p class="text-black mt-2">HTML</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" class="h-16 w-16 md:h-20 md:w-20"/>
            <p class="text-black mt-2">CSS</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="C" class="h-16 w-16 md:h-20 md:w-20"/>
            <p class="text-black mt-2">C</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C++" class="h-16 w-16 md:h-20 md:w-20"/>
            <p class="text-black mt-2">C++</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" class="h-16 w-16 md:h-20 md:w-20"/>
            <p class="text-black mt-2">Python</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" class="h-16 w-16 md:h-20 md:w-20"/>
            <p class="text-black mt-2">Java</p>
          </div>
          <div class="flex flex-col items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" class="h-16 w-16 md:h-20 md:w-20"/>
            <p class="text-black mt-2">Bootstrap</p>
          </div>
        </div>
      </div>
    </div> 

);

export default HomeSection;
