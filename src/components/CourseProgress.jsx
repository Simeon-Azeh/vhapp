// src/components/CourseProgress.jsx
import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const CourseProgress = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const courses = [
    { id: 1, title: 'Graphic design 101', progress: 80 },
    { id: 2, title: 'Electrician Basics', progress: 45 },
    { id: 3, title: 'Baking', progress: 20 },
  ];

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
    setIsDropdownOpen(activeIndex !== index);
  };

  const handleAction = (action, course) => {
    if (action === 'Resume' || action === 'Continue') {
      navigate(`/course-content/${course.id}`, { state: { course } });
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded font-inter">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Progress</h3>
      <ul className="space-y-4">
        {courses.map((course, index) => (
          <li key={index} className="relative">
            <div className="flex justify-between items-center">
              <span className="font-medium text-gray-800 mb-2">{course.title}</span>
              <span>{course.progress}%</span>
              {/* More Actions Button */}
              <button onClick={() => toggleDropdown(index)} className="text-gray-500">
                <FaEllipsisV />
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && activeIndex === index && (
                <div className="absolute right-4 mt-2 w-40 bg-white border rounded shadow-md">
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleAction('Resume', course)}
                  >
                    Resume
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleAction('View', course)}
                  >
                    View
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                    onClick={() => handleAction('Delete', course)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-[#8cd836] h-2.5 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            {/* Continue Button */}
            {course.progress < 100 && (
              <button
                className="mt-2 px-4 py-1 text-white bg-[#8cd836] shadow-md rounded hover:bg-green-700"
                onClick={() => handleAction('Continue', course)}
              >
                Continue
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseProgress;
