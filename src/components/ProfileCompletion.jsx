// src/components/ProfileCompletion.jsx
import React from 'react';
import { FaUserCircle } from "react-icons/fa";
import actionImg from '../../public/action.svg'

const ProfileCompletion = () => {
  const completionPercentage = 70; // Assume 70% is completed

  return (
    <div className="p-4 bg-white shadow rounded font-inter">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2"><FaUserCircle /> Profile Completion</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#8cd836] h-2.5 rounded-full"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
      <p className="mt-2 text-gray-600">Complete your profile to increase visibility to employers!</p>
      <button className="mt-2 bg-[#8cd836] text-white p-2 rounded shadow-md">Complete Now</button>
      <div className='flex flex-col justify-center items-center'>
            <div className='w-48'>
                <img src={actionImg} alt="" className='w-full object-cover' />
            </div>
            <p className="mt-2 text-gray-600">You'll find more actions here!</p>
      </div>
    </div>
  );
};

export default ProfileCompletion;
