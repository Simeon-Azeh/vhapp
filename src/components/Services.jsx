import React, {useState, useEffect} from 'react';
import { MdWavingHand } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaChalkboardTeacher, FaTools, FaBusinessTime, FaGraduationCap } from "react-icons/fa"; // Example icons

const roles = ["Frontend Engineer", "Brand Manager", "Graphic Designer", "Web Developer"];

function Services() {
  const { t } = useTranslation();
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const intervalId = setInterval(() => {
      setFade(false); 
      setTimeout(() => {
        setCurrentRole((prevRole) => {
          const currentIndex = roles.indexOf(prevRole);
          return roles[(currentIndex + 1) % roles.length];
        });
        setFade(true); 
      }, 500); 
    }, 3000); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className=''>
    

      {/* Services Section */}
      <div className=' bg-[#f9f9f9] py-12'>
        <h2 className='text-3xl font-medium text-black mb-8 w-full md:w-4/5 mx-auto font-montserrat-alt  px-6 md:px-0'>{t('Our Services')}</h2>
        <div className='w-full md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-0'>
          {/* Service Card 1 */}
          <div className='service-card bg-white dark:bg-gray-800 p-6 rounded-lg  font-inter' data-aos="fade-up">
            <FaChalkboardTeacher className='text-5xl text-light-body mb-4' />
            <h3 className='text-xl font-medium text-black mb-2 font-montserrat-alt'>{t('Professional Training')}</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              {t('Learn from industry experts through hands-on vocational training programs designed to prepare you for real-world challenges.')}
            </p>
          </div>

          {/* Service Card 2 */}
          <div className='service-card  dark:bg-gray-800 p-6 rounded-lg   bg-light-body shadow-lg font-inter' data-aos="fade-up">
            <FaTools className='text-5xl text-[#D1EC79] mb-4' />
            <h3 className='text-xl font-medium text-[#D1EC79] mb-2 font-montserrat-alt'>{t('Skilled Labor Jobs')}</h3>
            <p className='text-[#fff] dark:text-gray-300'>
              {t('We connect you to job opportunities that match your vocational skills, making sure you land the right job.')}
            </p>
          </div>

          {/* Service Card 3 */}
          <div className='service-card bg-white dark:bg-gray-800 p-6 rounded-lg  font-inter' data-aos="fade-up">
            <FaBusinessTime className='text-5xl text-light-body mb-4' />
            <h3 className='text-xl font-medium text-black mb-2 font-montserrat-alt'>{t('Business Development')}</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              {t('Get access to resources and mentorship to help you grow your vocational business and succeed in your industry.')}
            </p>
          </div>

          {/* Service Card 4 */}
          <div className='service-card bg-white dark:bg-gray-800 p-6 rounded-lg font-inter' data-aos="fade-up">
            <FaGraduationCap className='text-5xl text-light-body mb-4' />
            <h3 className='text-xl font-medium text-black mb-2 font-montserrat-alt'>{t('Certification Programs')}</h3>
            <p className='text-gray-600 dark:text-gray-300'>
              {t('Earn certifications in various vocational fields, boosting your credentials and employability.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
