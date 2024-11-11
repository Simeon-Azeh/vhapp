import React from 'react';
import { FaUser } from 'react-icons/fa';
import { GiArchiveRegister } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const isAuthenticated = !!localStorage.getItem('token');


  return (
    <footer className="py-8 bg-light-body dark:bg-dark-body text-light-text dark:text-slate-50">
      <div className="flex flex-col items-center justify-between w-full px-4 mx-auto space-y-6 md:w-4/5 md:px-0 md:flex-row md:space-y-0">

        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <h1 className="font-montserrat-alt text-lg font-semibold mb-2 text-[#] dark:text-slate-50 text-light-text">
            Vocational <span className="text-[#D1EC79] dark:text-gray-300">Hub</span>
          </h1>
          <p className="text-sm text-gray-50 dark:text-gray-400 font-inter">
            {t('Empowering people with vocational skills for a brighter future.')}
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 text-center md:flex-row md:space-y-0 md:space-x-8 md:text-left font-inter">
          <Link to="/" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('home')}</Link>
          <Link to="/services" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('services')}</Link>
          <Link to="/portfolio" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('portfolio')}</Link>
          <Link to="/contact" className="hover:text-[#D1EC79] dark:hover:text-gray-400">{t('contact')}</Link>
        </div>

        {/* Social Media Icons */}
        <div className='flex items-center gap-4'>
        {isAuthenticated ? (
            <Link to='/dashboard' className='bg-[#1a1a1a] text-white flex items-center gap-2 px-4 py-2 rounded-full '>
              <FaUser size={21} className='bg-[#D1EC79] p-1 rounded-full text-black'/> Dashboard
            </Link>
          ) : (
            <>
              <Link to='/login' className='bg-[#1a1a1a] text-white flex items-center gap-2 px-4 py-2 rounded-full '>
                <FaUser size={21} className='bg-[#D1EC79] p-1 rounded-full text-black'/> Login
              </Link>
              <Link to='/register' className='flex items-center gap-2 px-4 py-2 text-white border rounded-full '>
                <GiArchiveRegister size={21} className='bg-[#D1EC79] p-1 rounded-full text-black'/> Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-sm text-center text-gray-600 dark:text-gray-400">
        <p className='text-white font-inter'>© {new Date().getFullYear()} Vocational Hub. {t('All rights reserved.')}</p>
      </div>
    </footer>
  );
}

export default Footer;
