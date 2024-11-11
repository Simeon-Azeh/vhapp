import React from 'react';
import { Carousel } from 'antd';
import { FaQuoteLeft } from 'react-icons/fa';
import 'antd/dist/reset.css'; // Ant Design styles

function Testimonial() {
  const testimonials = [
    {
      name: 'John Doe',
      position: 'Web Developer',
      feedback:
        'The vocational training program was amazing. The instructors are very knowledgeable, and I was able to land a job right after completing the course!',
      image: 'https://img.freepik.com/free-photo/portrait-young-happy-man_23-2149309266.jpg?t=st=1728048321~exp=1728051921~hmac=b2aa870ccd868ca3041f2d0f8021fbd7f2840bb075f6f5f747185875d7104a3d&w=740', // Replace with actual image paths
    },
    {
      name: 'Jane Smith',
      position: 'Graphic Designer',
      feedback:
        'Thanks to the practical training, I gained hands-on experience that prepared me for real-world challenges. Highly recommend!',
      image: 'https://img.freepik.com/free-photo/african-teenage-girl-portrait-happy-smiling-face_53876-146757.jpg?t=st=1728048407~exp=1728052007~hmac=2ecedb45c58aeec205248462cc50e077703fb51147fdeb5c756d44dc73c1d3de&w=740',
    },
    {
      name: 'Edgar Fred',
      position: 'Brand Manager',
      feedback:
        'The support and job placement assistance I received were top-notch. I now work for a leading company in my field!',
      image: 'https://img.freepik.com/free-photo/portrait-upset-american-black-person_23-2148749581.jpg?t=st=1728048363~exp=1728051963~hmac=f26d770e279855d8be5a620dcccd27a324b1f326455ada9078d5b8c197e9ec93&w=360',
    },
  ];

  return (
    <div className='bg-light-body dark:bg-dark-body py-12 px-4'>
      <div className='w-full md:w-3/5 mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-8 text-white font-montserrat-alt'>
          {'What Our Students Say'}
        </h2>

        <Carousel autoplay dotPosition="bottom">
          {testimonials.map((testimonial, index) => (
            <div key={index} className='p-4'>
              <div className='flex flex-col md:flex-row items-center justify-center gap-6 font-inter'>
                {/* Testimonial Image */}
                <div className='w-16 h-16  overflow-hidden'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-full h-full rounded-[100px] object-cover'
                  />
                </div>

                {/* Testimonial Content */}
                <div className='text-center md:text-left'>
                  <FaQuoteLeft className='text-3xl text-[#D1EC79] mb-4' />
                  <p className='text-gray-50 dark:text-gray-300 mb-4'>
                    {testimonial.feedback}
                  </p>
                  <h3 className='text-lg font-medium text-white'>
                    {testimonial.name}
                  </h3>
                  <p className='text-sm text-gray-50 dark:text-gray-400'>
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial;
