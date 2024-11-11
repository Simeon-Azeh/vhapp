import React from 'react';
import { Link } from 'react-router-dom';
import { FiUsers } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const CourseCard = ({ image, title, category, enrollments, authorImg, authorName, description, learningOutcomes }) => {
  const truncatedDescription = description.slice(0, 50); // Display first 100 characters

  return (
    <Link to={`/enroll/${title}`} state={{ image, title, category, enrollments, authorImg, authorName, description, learningOutcomes }}>
      <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer ">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover rounded-md"
        />
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-[#8cd836]">{category}</p>
          <p className="text-sm text-gray-700 flex items-center gap-2 my-2"> <FiUsers />{enrollments} enrolled </p>
          <p className="text-sm text-gray-600 mt-2">{truncatedDescription}...</p> {/* Slice of description */}
        </div>
        <div className="flex items-center mt-4">
        <CgProfile size={22} color='#444' />
          <p className="ml-3 text-gray-700 font-medium">{authorName}</p>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
