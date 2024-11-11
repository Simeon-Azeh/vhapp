import React, { useState, useEffect } from 'react';
import { MdWavingHand } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { FaRegCheckCircle } from "react-icons/fa";

const roles = ["Frontend Engineer", "Brand Manager", "Graphic Designer", "Web Developer"];

function Hero() {
  const { t } = useTranslation();
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const intervalId = setInterval(() => {
      setFade(false); // Trigger the fade-out animation
      setTimeout(() => {
        setCurrentRole((prevRole) => {
          const currentIndex = roles.indexOf(prevRole);
          return roles[(currentIndex + 1) % roles.length];
        });
        setFade(true); // Trigger the fade-in animation
      }, 500); // Wait for the fade-out animation to complete before changing the text
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='bg-light-body dark:bg-dark-body transition-colors h-auto md:h-[80vh] square-pattern overflow-x-hidden'>
      <div className='w-full md:w-4/5 mx-auto px-4 font-inter flex flex-col md:flex-row items-center justify-between py-8 md:py-0 md:px-0'>
        
        {/* Left Side: Hero Text */}
        <div className='text-section w-full md:w-1/2 mb-6 md:mb-0'>
          <h1 className='text-3xl md:text-3xl font-medium dark:text-slate-50 text-light-text mb-4 font-montserrat-alt'>
            {t('Home of vocational training and')} <br />
            <span className="text-[#D1EC79] dark:text-gray-300">{t('vocational jobs')}</span>
          </h1>
          <p className="text-lg text-[#f5f5f5] dark:text-gray-300 mb-6">
            {t('Build your career with the best vocational training programs and find relevant jobs that match your skills.')}
          </p>
          
          {/* Email Field */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0">
  <div className="relative w-full md:w-[70%]">
    <input 
      type="email" 
      placeholder={t('Enter your email')} 
      className="p-4 w-full rounded-full border dark:bg-[#222222] dark:border-gray-600 border-gray-300 focus:outline-none pr-20" // Added padding to the right for the button
    />
    <Link 
      to="/services" 
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#D1EC79] text-black px-4 py-2 rounded-full hover:bg-[#b8d865] flex items-center"
    >
      {t('Get Started')} <IoMdArrowForward className="ml-2" />
    </Link>
   
  </div>
 
</div>
<p className='mt-2 text-[#D1EC79] flex items-center gap-2 '><FaRegCheckCircle className='text-black' /> One month free trial, money back guarantee</p>
<div className=' mt-2 flex items-center flex-row cursor-pointer'>
<img 
            src="/reviewImg.png" 
            alt="Vocational training hero" 
            className="w-24  object-contain "
          />
          <p>Here what our customers are saying</p>
</div>

        </div>

        {/* Right Side: Hero Image */}
        <div className='image-section w-full md:w-1/2' data-aos="fade-left">
          <img 
            src="/HeroImg.png" 
            alt="Vocational training hero" 
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;
