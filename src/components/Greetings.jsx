// src/components/Greeting.js
import React, { useEffect, useState } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('Hello');

  // Function to get the appropriate greeting based on local time
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return 'Good Morning';
    } else if (hour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  // Effect to set the greeting based on local time
  useEffect(() => {
    setGreeting(getGreeting());

    // Set a timeout to change greeting to "Hello" after 10 seconds
    const timeout = setTimeout(() => {
      setGreeting('Hello');
    }, 10000); // Change to "Hello" after 10 seconds

    return () => clearTimeout(timeout); // Clean up timeout on unmount
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 font-inter">
        {greeting}! <span className="text-[#8cd836]">Junior</span>
      </h1>
     
      <button className="mt-2 bg-[#8cd836] text-white p-2 rounded shadow-md font-inter">
        Find Jobs?
      </button>
    </div>
  );
};

export default Greeting;
