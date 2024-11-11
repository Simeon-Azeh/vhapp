import React from 'react';
import { MdArrowOutward } from "react-icons/md";

function ParallaxSection() {
  return (
    <div className="relative bg-fixed bg-cover bg-center " 
         style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/youth-engineering-students-working-electronics-aig41_31965-586760.jpg?w=900)', height: '70vh' }}>
      
      {/* Overlay to Darken the Background */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Information Content */}
      <div className="relative flex flex-col justify-center  h-full  text-center w-full px-6 md:px-0 md:w-4/5 mx-auto">
        <h2 className="text-xl md:text-2xl font-semibold text-white z-10 mb-4 font-montserrat-alt">
          {'Empowering Your Career Through Vocational Training'}
        </h2>
        <p className="text-sm md:text-xl text-gray-200 z-10  mb-8 text-center font-inter">
          {'Learn from industry professionals and gain hands-on experience to kickstart your career. Our programs are designed to give you real-world skills that employers value.'}
        </p>
        <a href="/courses" 
           className="z-10  bg-[#D1EC79] text-black px-6 py-3 rounded-full hover:bg-[#b8d865] w-3/5 md:w-2/5 justify-center flex items-center mx-auto font-inter font-semibold gap-2 shadow-lg">
          {'Explore Courses'} <MdArrowOutward />
        </a>
      </div>
    </div>
  );
}

export default ParallaxSection;
