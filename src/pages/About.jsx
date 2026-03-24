import React from 'react';

const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#141414] text-white pt-28 pb-12 px-4 md:px-8">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
          About Filmygpt
        </h1>
        <div className="w-24 h-1 bg-red-600 mb-10"></div>
        
        <div className="bg-black/50 p-8 md:p-12 rounded-2xl border border-gray-800 shadow-2xl backdrop-blur-sm max-w-4xl text-center">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
            Filmygpt is your ultimate destination for discovering incredible movies and TV shows. 
            Powered by advanced AI matching through GPT, we take the hassle out of deciding what to watch next.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
            Whether you are in the mood for a spine-tingling thriller, a heartwarming romance, or an 
            action-packed blockbuster, just search for it and let our intelligent engine provide personalized recommendations tailored exactly to your taste.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-3">AI Powered</h3>
              <p className="text-gray-400">Discover hidden gems faster using state-of-the-art GPT integrated search capabilities.</p>
            </div>
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Curated Lists</h3>
              <p className="text-gray-400">Save your favorite titles to your personalized My List and browse them anytime.</p>
            </div>
            <div className="bg-gray-900/60 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors duration-300">
              <h3 className="text-xl font-bold text-white mb-3">Cinematic UI</h3>
              <p className="text-gray-400">Enjoy a sleek, beautiful, and fluid user interface designed for movie lovers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
