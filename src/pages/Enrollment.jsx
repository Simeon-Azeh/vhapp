import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";

const Enrollment = () => {
  const location = useLocation();
  
  // Destructure with default values to prevent undefined errors
  const { 
    image, 
    title, 
    category, 
    enrollments, 
    authorImg, 
    authorName, 
    description, 
    learningOutcomes = [] // Provide a default empty array
  } = location.state || {}; // Ensure location.state is defined

  return (
    <div className="p-6 min-h-screen bg-[#f9f9f9] font-inter">
        <Link className='flex items-center gap-2 mb-4 text-gray-800 top-0 sticky z-50' to='/courses'>
       <GoArrowLeft />
       Go back
       </Link>
      <div className="max-w-3xl mx-auto bg-white p-6 rounded font-inter">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-semibold mt-4 text-gray-800">{title}</h1>
        <p className="text-gray-600 mt-2">{category}</p>
        <p className="mt-2 text-gray-700">{enrollments} students enrolled</p>

        <div className="flex items-center mt-4">
          <img 
            src={authorImg} 
            alt={authorName} 
            className="w-12 h-12 rounded-full"
          />
          <p className="ml-3 text-gray-700">Instructor: {authorName}</p>
        </div>

        <h2 className="text-2xl font-semibold mt-6 text-gray-800">Course Description</h2>
        <p className="mt-2 text-gray-700">{description}</p>

        <h2 className="text-2xl font-semibold mt-6 text-gray-800">Learning Outcomes</h2>
        {/* Check if learningOutcomes is available and map it */}
        {learningOutcomes.length > 0 ? (
          <ul className="list-disc list-inside mt-2">
            {learningOutcomes.map((outcome, index) => (
              <li key={index} className="text-gray-700">{outcome}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-600">No learning outcomes available.</p>
        )}

        <button className="mt-6 bg-[#8cd836] text-white px-6 py-2 rounded-lg shadow hover:bg-[#001a4d]">
          Enroll Now
        </button>
      </div>
    </div>
  );
}

export default Enrollment;
