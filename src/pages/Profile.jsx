// src/pages/Profile.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { FaCamera, FaMedal, FaFileAlt, FaSignInAlt } from 'react-icons/fa';

const Profile = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const [userInfo] = useState({
    id: '12345678',
    name: 'Junior Foryoung',
    email: 'junior@gmail.com',
    phone: '+1234567890',
    profilePic: 'https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1729669485~exp=1729673085~hmac=256bf1263f0afebdea40a17214bf66f07345e615f4de7e37901716ceb1887bf3&w=740',
    badges: ['Top Learner', 'Completionist'],
    certificates: [
      { title: 'Certified Baker', date: 'Sep 15, 2024' },
      { title: 'Resin Craft Mastery', date: 'Aug 22, 2024' },
    ],
    loginHistory: [
      { date: 'Oct 20, 2024', device: 'Chrome on Windows 10' },
      { date: 'Oct 18, 2024', device: 'Firefox on Android' },
    ],
  });

  const handleProfilePicUpdate = (event) => {
    console.log('Profile pic updated');
  };

  return (
    <div className="flex bg-[#f9f9f9] min-h-screen font-inter">
      {/* Sidebar */}
      <div className={`fixed h-full bg-[#002266] z-40 lg:w-[200px] lg:block ${isSidebarOpen ? 'block' : 'hidden'} transition-transform lg:transform-none`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-[200px]">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Profile</h1>

          {/* Profile Info Section */}
          <div className="bg-white p-6 shadow rounded-lg">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={userInfo.profilePic}
                  alt="Profile Pic"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <label className="absolute bottom-0 right-0 bg-[#8cd836] p-2 rounded-full cursor-pointer">
                  <FaCamera className="text-white" />
                  <input 
                    type="file" 
                    className="hidden" 
                    onChange={handleProfilePicUpdate} 
                  />
                </label>
              </div>
              <div className="ml-6 font-inter">
                <h2 className="text-lg font-semibold text-gray-800">{userInfo.name}</h2>
                <p className="text-gray-500">{userInfo.email}</p>
                <p className="text-gray-500">{userInfo.phone}</p>
              </div>
            </div>
          </div>

          {/* Badges Section */}
          <div className="mt-6 bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Badges</h3>
            <div className="flex space-x-4">
              {userInfo.badges.map((badge, index) => (
                <div key={index} className="flex items-center space-x-2 bg-[#8cd836] text-white px-4 py-2 rounded-lg shadow">
                  <FaMedal />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates Section */}
          <div className="mt-6 bg-white p-6 shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Certificates</h3>
            <ul className="space-y-2">
              {userInfo.certificates.map((cert, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <FaFileAlt className="text-gray-500" />
                    <span>{cert.title}</span>
                  </div>
                  <span className="text-gray-500">{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Login History Section */}
          <div className="mt-6 bg-white p-6 shadow rounded-lg text-gray-800">
            <h3 className="text-xl font-semibold mb-4">Login History</h3>
            <ul className="space-y-2">
              {userInfo.loginHistory.map((login, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <FaSignInAlt className="text-gray-500" />
                    <span>{login.device}</span>
                  </div>
                  <span className="text-gray-500">{login.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
