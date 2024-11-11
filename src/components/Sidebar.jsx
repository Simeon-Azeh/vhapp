import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory
import { FaHome, FaUserGraduate, FaBook, FaCog, FaBars, FaBriefcase, FaSignOutAlt } from 'react-icons/fa';
import { RiMenuFold4Line } from "react-icons/ri";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate for navigation

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Add any logout logic if necessary (e.g., clearing tokens)
    navigate('/login'); // Redirect to login page
  };

  return (
    <div>
      {/* Toggle Button for Mobile */}
      <button 
        onClick={toggleSidebar} 
        className="block lg:hidden p-4 text-white bg-white"
      >
        <RiMenuFold4Line size={34} className='text-gray-700' />
      </button>

      {/* Sidebar */}
      <div
        className={`border bg-white text-gray-700 h-full min-h-screen w-[200px] flex flex-col justify-between lg:flex ${isOpen ? 'flex' : 'hidden'} lg:flex`}
      >
        {/* Sidebar Links */}
        <div>
          <div className="p-4 text-2xl font-semibold">
            <Link to="/" className="font-montserrat-alt text-gray-700 text-[16px]">Vocational <span className="text-[#D1EC79]">Hub</span></Link>
          </div>
          <nav className="mt-10 font-inter">
            <ul>
              <li className="p-4 hover:bg-gray-50">
                <Link to="/dashboard" className="flex items-center">
                  <FaHome className="mr-3" />
                  Dashboard
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-50">
                <Link to="/courses" className="flex items-center">
                  <FaBook className="mr-3" />
                  Courses
                </Link>
              </li>
              <li className="p-4 hover:bg-gray-50">
              <Link to="/jobs" className="flex items-center">
                <FaBriefcase className="mr-3" />
                Jobs
              </Link>
              </li>
              <li className="p-4 hover:bg-gray-50">
                <Link to="/settings" className="flex items-center">
                  <FaCog className="mr-3" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Logout Button at the Bottom */}
        <div className="p-4 hover:bg-gray-100">
          <button 
            onClick={handleLogout} 
            className="flex items-center w-full text-left text-red-400 font-inter"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
