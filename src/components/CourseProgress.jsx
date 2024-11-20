import React, { useState, useEffect } from 'react';
import { FaEllipsisV } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs, or } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const CourseProgress = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const q = query(
          collection(db, 'enrollment'),
          or(
            where('username', '==', user.displayName),
            where('username', '==', user.email)
          )
        );
        const querySnapshot = await getDocs(q);
        const enrolledCourses = querySnapshot.docs.map(doc => doc.data());
        setCourses(enrolledCourses);
      }
    };

    fetchEnrolledCourses();
  }, []);

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
    <div className="p-4 bg-white rounded shadow font-inter">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Course Progress</h3>
      <ul className="space-y-4">
        {courses.map((course, index) => (
          <li key={index} className="relative">
            <div className="flex items-center justify-between">
              <span className="mb-2 font-medium text-gray-800">{course.title}</span>
              <span>{course.progress}%</span>
              {/* More Actions Button */}
              <button onClick={() => toggleDropdown(index)} className="text-gray-500">
                <FaEllipsisV />
              </button>
              {/* Dropdown Menu */}
              {isDropdownOpen && activeIndex === index && (
                <div className="absolute w-40 mt-2 bg-white border rounded shadow-md right-4">
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