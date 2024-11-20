import React, { useEffect, useState } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Greeting = () => {
  const [greeting, setGreeting] = useState('Hello');
  const [username, setUsername] = useState('');

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

  useEffect(() => {
    const fetchUsername = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUsername(userDoc.data().username);
        }
      }
    };

    setGreeting(getGreeting());
    fetchUsername();

    const timeout = setTimeout(() => {
      setGreeting('Hello');
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 font-inter">
        {greeting}! <span className="text-[#8cd836]">{username}</span>
      </h1>
     
      <button className="mt-2 bg-[#8cd836] text-white p-2 rounded shadow-md font-inter">
        Find Jobs?
      </button>
    </div>
  );
};

export default Greeting;