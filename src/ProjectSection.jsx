import React from 'react';

const ProjectSection = () => (
  <div class="container mx-auto py-10 px-4">
    <h1 class="text-4xl font-bold text-center mb-10">My Research Projects</h1>

   
    <div class="flex flex-col space-y-8">

     
      <div class="max-w-xl mx-auto rounded overflow-hidden shadow-lg bg-white p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-gray-800">Analyzing Public Sentiment on Social Media during FIFA World Cup 2022</h2>
          <span class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">Research Paper</span>
        </div>
        <p class="text-gray-600 mb-4">
          This research analyzes public sentiment during the FIFA World Cup 2022 using Deep Learning and Explainable AI techniques. The study uses social media data to evaluate public reactions to major events.
        </p>
        <p class="text-gray-700 mb-4"><strong>Technologies:</strong> Python, Deep Learning, Explainable AI</p>
        <div class="flex justify-between items-center">
          <p class="text-gray-500">Project No: 001</p>
          <a href="https://www.researchgate.net/publication/378537776_Analyzing_Public_Sentiment_on_Social_Media_during_FIFA_World_Cup_2022_using_Deep_Learning_and_Explainable_AI?_sg%5B0%5D=7flWxpiOrST9Lbp78GYSQxsqdkWRk_evVufSeQ7YdTs7N0UhPgvAqbE-meE6Q8v3cs6cdSBd-doIo0dVioesybEd9nMfULswyhYtbrtk._WDEn6t8Nq8oYvvOj4G7lpb3tXQ7F_ci4sD04hzyNVhDKB4YWY1g-8RlCeJZyrK217fTqku7GfwrieVSmRiWMg&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6InByb2ZpbGUiLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19" 
             target="_blank" 
             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Paper
          </a>
        </div>
      </div>

      
      <div class="max-w-xl mx-auto rounded overflow-hidden shadow-lg bg-white p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-gray-800">Bengali Misogyny Identification with Deep Learning and LIME</h2>
          <span class="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">Research Paper</span>
        </div>
        <p class="text-gray-600 mb-4">
          This research project identifies misogynistic content in Bengali using Deep Learning models combined with LIME for explainability. The goal is to detect and explain instances of hate speech.
        </p>
        <p class="text-gray-700 mb-4"><strong>Technologies:</strong> Python, Deep Learning, LIME</p>
        <div class="flex justify-between items-center">
          <p class="text-gray-500">Project No: 002</p>
          <a href="https://www.researchgate.net/publication/378046644_Bengali_Misogyny_Identification_with_Deep_Learning_and_LIME?_sg%5B0%5D=7flWxpiOrST9Lbp78GYSQxsqdkWRk_evVufSeQ7YdTs7N0UhPgvAqbE-meE6Q8v3cs6cdSBd-doIo0dVioesybEd9nMfULswyhYtbrtk._WDEn6t8Nq8oYvvOj4G7lpb3tXQ7F_ci4sD04hzyNVhDKB4YWY1g-8RlCeJZyrK217fTqku7GfwrieVSmRiWMg&_tp=eyJjb250ZXh0Ijp7ImZpcnN0UGFnZSI6ImhvbWUiLCJwYWdlIjoicHJvZmlsZSIsInByZXZpb3VzUGFnZSI6InByb2ZpbGUiLCJwb3NpdGlvbiI6InBhZ2VDb250ZW50In19" 
             target="_blank" 
             class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View Paper
          </a>
        </div>
      </div>

    </div>
  </div>
);

export default ProjectSection;