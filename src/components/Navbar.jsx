import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdOutlineLanguage } from 'react-icons/md';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSearch, FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { logout } from '../services/apiService'; // Import the logout function

function Navbar() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false); // For drawer menu

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/login'; // Redirect to login page
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white top-0 sticky z-50">
      {/* Left: Hamburger menu (only on smaller screens) */}
      <div className="lg:hidden">
        <button onClick={toggleDrawer} className="text-gray-700 focus:outline-none">
          {isDrawerOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Drawer Menu */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={toggleDrawer}>
          <div
            className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">{t('Menu')}</h2>
              <nav className="mt-4 space-y-2">
                <Link to="/dashboard" className="block text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={toggleDrawer}>
                  {t('Dashboard')}
                </Link>
                <Link to="/courses" className="block text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={toggleDrawer}>
                  {t('Courses')}
                </Link>
                <Link to="/jobs" className="block text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={toggleDrawer}>
                  {t('Jobs')}
                </Link>
                <Link to="/settings" className="block text-gray-700 hover:bg-gray-100 p-2 rounded" onClick={toggleDrawer}>
                  {t('Settings')}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Search Input */}
      <div className="relative flex items-center w-full space-x-2 md:w-auto lg:ml-4">
        <FiSearch size={18} className="absolute ml-4 text-gray-400" />
        <input
          type="text"
          placeholder={t('Search...')}
          className="w-full md:w-64 px-8 py-1 font-inter  border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-[#D1EC79] bg-white "
        />
      </div>

      {/* Right: Icons and Profile */}
      <div className="relative flex items-center ml-4 space-x-4 md:ml-0">
        {/* Language Toggle */}
        <button onClick={toggleLanguage} className="flex items-center space-x-2 text-gray-400">
          <MdOutlineLanguage size={20} />
          <span>{i18n.language === 'en' ? 'FR' : 'EN'}</span>
        </button>

        {/* Notification Icon with Badge */}
        <div className="relative">
          <Link to='/notifications' className="relative flex items-center space-x-2 text-gray-400">
            <IoIosNotificationsOutline size={32} />
            {/* Notification Badge */}
            <span className="absolute top-0 right-0 h-4 w-4 bg-[#D1EC79] rounded-full flex items-center justify-center text-xs text-gray-700 font-inter">
              3
            </span>
          </Link>
        </div>

        {/* Profile Picture with Dropdown */}
        <div className="relative">
          <FaUserCircle 
            size={30} 
            className="text-gray-700 cursor-pointer" 
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 w-48 py-2 mt-2 bg-white border rounded-md">
              <Link 
                to="/profile" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('View Profile')}
              </Link>
              <Link 
                to="/settings" 
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsDropdownOpen(false)}
              >
                {t('Settings')}
              </Link>
              <div 
                className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                onClick={handleLogout}
              >
                {t('Logout')}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
