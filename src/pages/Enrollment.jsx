import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Enrollment = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');

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

  useEffect(() => {
    const fetchUserData = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        setUsername(user.email); // Use email as username
        setName(user.displayName || user.email); // Use displayName or email as name
      }
    };

    fetchUserData();
  }, []);

  const handleEnroll = async () => {
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const db = getFirestore();
      await addDoc(collection(db, 'enrollment'), {
        username,
        name,
        image,
        title,
        category,
        enrollments,
        authorImg,
        authorName,
        description,
        learningOutcomes,
        enrolledAt: new Date()
      });

      // Add activity to the activities collection
      await addDoc(collection(db, 'activities'), {
        type: 'course',
        activity: `Enrolled in course: ${title}`,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        link: `/courses/${title}`,
        username,
        name
      });

      setSuccess('Enrolled successfully.');
    } catch (err) {
      setError('Failed to enroll. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 min-h-screen bg-[#f9f9f9] font-inter">
      <Link className='sticky top-0 z-50 flex items-center gap-2 mb-4 text-gray-800' to='/courses'>
        <GoArrowLeft />
        Go back
      </Link>
      <div className="max-w-3xl p-6 mx-auto bg-white rounded font-inter">
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full h-64 rounded-lg"
        />
        <h1 className="mt-4 text-3xl font-semibold text-gray-800">{title}</h1>
        <p className="mt-2 text-gray-600">{category}</p>
        <p className="mt-2 text-gray-700">{enrollments} students enrolled</p>

        <div className="flex items-center mt-4">
          <img 
            src={authorImg} 
            alt={authorName} 
            className="w-12 h-12 rounded-full"
          />
          <p className="ml-3 text-gray-700">Instructor: {authorName}</p>
        </div>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Course Description</h2>
        <p className="mt-2 text-gray-700">{description}</p>

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">Learning Outcomes</h2>
        {/* Check if learningOutcomes is available and map it */}
        {learningOutcomes.length > 0 ? (
          <ul className="mt-2 list-disc list-inside">
            {learningOutcomes.map((outcome, index) => (
              <li key={index} className="text-gray-700">{outcome}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-600">No learning outcomes available.</p>
        )}

        <button 
          className="mt-6 bg-[#8cd836] text-white px-6 py-2 rounded-lg shadow hover:bg-[#001a4d]"
          onClick={handleEnroll}
          disabled={loading}
        >
          {loading ? 'Enrolling...' : 'Enroll Now'}
        </button>
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
        {success && <p className="mt-2 text-xs text-green-500">{success}</p>}
      </div>
    </div>
  );
}

export default Enrollment;