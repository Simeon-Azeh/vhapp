import React, { useState, useEffect } from 'react';
import { Drawer, Select } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUser } from "react-icons/fa6";

// Option values for the Select dropdown
const { Option } = Select;

function Header() {
  const { t, i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <div className="transition-colors bg-light-body dark:bg-dark-body">
      <div className='sticky top-0 z-50 flex items-center justify-between w-full px-6 py-4 mx-auto md:w-4/5 md:px-0 font-inter'>
        <div className="text-lg font-semibold">
          <Link to="/">
            <h1 className='font-montserrat-alt text-[#] dark:text-slate-50 text-light-text'>
             Vocational <span className='dark:text-gray-300 text-[#D1EC79]'>Hub</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6 text-[#fff] dark:text-slate-50">
          <Link to="/">
            <a className="hover:border-b-2 border-[#D1EC79] dark:border-gray-400 dark:border-solid">{t('home')}</a>
          </Link>
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center hover:text-[#D1EC79] dark:hover:text-gray-400">
              {t('about')}
              {dropdownOpen ? <IoIosArrowUp className="ml-1" /> : <IoIosArrowDown className="ml-1" />}
            </button>
            {dropdownOpen && (
              <div className="absolute dark:bg-[#1a1818] dark:text-white py-2 mt-2 space-y-2 rounded border bg-white text-[#414760] dark:border-gray-600 dark:border-solid w-[150px]">
                <Link to="/resume">
                  <p className="block py-2 px-4 hover:text-[#D1EC79] dark:hover:text-slate-300">{t('resume')}</p>
                </Link>
                <Link to="/portfolio">
                  <p className="block py-2 px-4 hover:text-[#D1EC79] dark:hover:text-slate-300">{t('portfolio')}</p>
                </Link>
              </div>
            )}
          </div>
          <Link to="/services">
            <a className="hover:border-b-2 border-[#D1EC79] dark:border-gray-400 dark:border-solid">{t('services')}</a>
          </Link>
          <Link to="/contact">
            <a className="hover:border-b-2 border-[#D1EC79] dark:border-gray-400 dark:border-solid">{t('contact')}</a>
          </Link>
        </div>
        <div className="items-center hidden space-x-4 md:flex">
          {/* Ant Design Select for Language Change */}
          <Select 
            defaultValue={i18n.language} 
            onChange={handleLanguageChange} 
            className="font-semibold text-white dark:text-white custom-select font-Inter"
            dropdownClassName="bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            style={{ color: "white", width: 100 }}
          >
            <Option value="en">
              <img src="https://flagcdn.com/w20/us.png" alt="English" className="inline-block mr-2" />
              English
            </Option>
            <Option value="fr">
              <img src="https://flagcdn.com/w20/fr.png" alt="French" className="inline-block mr-2" />
              Français
            </Option>
          </Select>
          {isAuthenticated ? (
            <Link to='/dashboard' className='bg-[#1a1a1a] text-white flex items-center gap-2 px-4 py-2 rounded-full '>
              <FaUser size={21} className='bg-[#D1EC79] p-1 rounded-full text-black'/> Dashboard
            </Link>
          ) : (
            <Link to='/login' className='bg-[#1a1a1a] text-white flex items-center gap-2 px-4 py-2 rounded-full '>
              <FaUser size={21} className='bg-[#D1EC79] p-1 rounded-full text-black'/> Login
            </Link>
          )}
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          <Select 
            defaultValue={i18n.language} 
            onChange={handleLanguageChange} 
            className="text-white dark:text-white custom-select"
            dropdownClassName="bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            style={{ color: "white", width: 120 }}
          >
            <Option value="en">
              <img src="https://flagcdn.com/w20/us.png" alt="English" className="inline-block mr-2" />
              English
            </Option>
            <Option value="fr">
              <img src="https://flagcdn.com/w20/fr.png" alt="French" className="inline-block mr-2" />
              Français
            </Option>
          </Select>
          <button onClick={showDrawer} className="dark:text-slate-50 text-light-text">
            <MenuOutlined size={30} />
          </button>
        </div>
      </div>

      <Drawer title={t('menu')} placement="right" onClose={onClose} visible={visible} className='bg-[#f7f7f7] font-inter font-medium'>
        <Link to="/">
          <a className="block px-4 py-2 text-gray-500 hover:text-gray-700">{t('home')}</a>
        </Link>
        <Link to="/resume">
          <a className="block px-4 py-2 text-gray-500 hover:text-gray-700">{t('resume')}</a>
        </Link>
        <Link to="/services">
          <a className="block px-4 py-2 text-gray-500 hover:text-gray-700">{t('services')}</a>
        </Link>
        <Link to="/portfolio">
          <a className="block px-4 py-2 text-gray-500 hover:text-gray-700">{t('portfolio')}</a>
        </Link>
        <Link to="/contact">
          <a className="block px-4 py-2 text-gray-500 hover:text-gray-700">{t('contact')}</a>
        </Link>
        {isAuthenticated ? (
          <Link to='/dashboard' className='bg-[#1a1a1a] text-white flex items-center gap-2 px-4 py-2 rounded-full '>
            <FaUser size={21} className='bg-[#D1EC79] p-1 rounded-full text-black'/> Dashboard
          </Link>
        ) : (
          <Link to='/login' className='bg-[#1a1a1a] text-white flex items-center gap-2 px-4 py-2 rounded-full '>
            <FaUser size={21} className='bg-[#D1EC79] p-1 rounded-full text-black'/> Login
          </Link>
        )}
      </Drawer>
    </div>
  );
}

export default Header;