import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';

function Newsletter() {
  return (
    <div className="bg-[#f9f9f9] dark:bg-dark-body py-12 px-4">
      <div className="w-full md:w-3/5 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black font-montserrat-alt">
          {'Subscribe to Our Newsletter'}
        </h2>
        
        {/* Description */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          {'Stay updated with the latest news, offers, and insights on vocational training. Subscribe now and never miss an update!'}
        </p>
        
        {/* Email Input and Button */}
        <div className="relative flex items-center justify-center">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="p-4 w-full max-w-lg rounded-full border dark:bg-[#222222] dark:border-gray-600 border-gray-300 focus:outline-none pr-20" 
          />
          <button 
            className="absolute right-2 md:right-36 top-1/2 transform -translate-y-1/2 bg-[#D1EC79] text-black px-4 py-2 rounded-full hover:bg-[#b8d865] flex items-center"
          >
            {'Subscribe'} <IoMdArrowForward className="ml-2" />
          </button>
        </div>

        {/* Optional Note */}
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          {'We respect your privacy. Unsubscribe anytime.'}
        </p>
      </div>
    </div>
  );
}

export default Newsletter;
