import React from 'react';
import { FaChalkboardTeacher, FaTools, FaBriefcase, FaCertificate } from 'react-icons/fa'; // Example icons
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyChooseUs() {
  return (
    <div className='bg-light-body dark:bg-dark-body transition-colors py-12 px-4 overflow-x-hidden'>
      <div className='w-full md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between gap-8'>
        
        {/* Left Side: Reasons List */}
        <div className='w-full md:w-1/2'>
          <h2 className='text-2xl md:text-4xl font-semibold text-white mb-6 text-center md:text-left font-montserrat-alt'>{'Why Choose Us?'}</h2>
          <ul className='space-y-6 font-inter'>
            {/* Reason 1 */}
            <li className='flex items-start space-x-4'>
              <FaChalkboardTeacher className='text-3xl text-[#D1EC79] shrink-0' />
              <div>
                <h3 className='text-lg md:text-xl font-medium text-white'>{'Expert Instructors'}</h3>
                <p className='text-gray-100 dark:text-gray-300'>
                  {'Learn from industry professionals with years of hands-on experience in their respective fields.'}
                </p>
              </div>
            </li>

            {/* Reason 2 */}
            <li className='flex items-start space-x-4'>
              <FaTools className='text-3xl text-[#D1EC79] shrink-0' />
              <div>
                <h3 className='text-lg md:text-xl font-medium text-white'>{'Practical Training'}</h3>
                <p className='text-gray-100'>
                  {'Our courses focus on real-world skills that will prepare you for immediate employment.'}
                </p>
              </div>
            </li>

            {/* Reason 3 */}
            <li className='flex items-start space-x-4'>
              <FaBriefcase className='text-3xl text-[#D1EC79] shrink-0' />
              <div>
                <h3 className='text-lg md:text-xl font-medium text-white'>{'Job Placement Assistance'}</h3>
                <p className='text-gray-100'>
                  {'We help connect our graduates with companies looking for skilled vocational workers.'}
                </p>
              </div>
            </li>

            {/* Reason 4 */}
            <li className='flex items-start space-x-4'>
              <FaCertificate className='text-3xl text-[#D1EC79] shrink-0' />
              <div>
                <h3 className='text-lg md:text-xl font-medium text-white'>{'Certified Programs'}</h3>
                <p className='text-gray-100 dark:text-gray-300'>
                  {'Earn recognized certifications that add value to your resume and career.'}
                </p>
              </div>
            </li>
          </ul>
          <button className='mt-4 bg-white px-6 py-2 rounded-full text-black font-inter font-medium shadow-md'>Learn More</button>
        </div>

        {/* Right Side: Image */}
        <div className='w-full md:w-1/2' data-aos="fade-left">
          <img 
            src="/why-choose-us.png" // Replace with your actual image path
            alt="Why choose us"
            className='w-full h-auto object-cover rounded-lg'
          />
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
