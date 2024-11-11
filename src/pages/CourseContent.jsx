import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { LuAlarmClock } from "react-icons/lu";

const CourseContent = () => {
  const [activeTopic, setActiveTopic] = useState(null);

  const course = {
    title: 'Graphic Design 101',
  };

  const courseTopics = [
    {
      week: 1,
      title: 'Introduction to Graphic Design',
      timeToComplete: '30 mins',
      materialType: 'Video',
      content: 'This video introduces the basics of graphic design, including fundamental concepts like layout, color, and typography. [Video Link]',
    },
    {
      week: 2,
      title: 'Color Theory and Typography',
      timeToComplete: '45 mins',
      materialType: 'Text',
      content: 'This text lesson covers the essential principles of color theory, typography, and how they apply to design.',
    },
    {
      week: 3,
      title: 'Advanced Design Techniques',
      timeToComplete: '1 hour',
      materialType: 'Video',
      content: 'Watch this advanced design techniques tutorial to deepen your knowledge of design tools and best practices. [Video Link]',
    },
  ];

  const toggleDropdown = (index) => {
    setActiveTopic(activeTopic === index ? null : index);
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex  min-h-screen">
      {/* Sidebar */}
      <div className={`fixed h-full bg-[#002266] z-40 lg:w-[200px] lg:block ${isSidebarOpen ? 'block' : 'hidden'} transition-transform lg:transform-none`}>
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="flex-1 lg:ml-[200px] font-inter">
        <Navbar />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {course.title} - Course Content
          </h2>

          <ul className="space-y-6">
            {courseTopics.map((topic, index) => (
              <li key={index} className="flex flex-col bg-white rounded  p-2 px-6">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleDropdown(index)}>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{topic.title}</h4>
                    <p className="text-sm text-gray-500">Week {topic.week}</p>
                  </div>
                  <span className="text-sm text-gray-500"><LuAlarmClock /> {topic.timeToComplete}</span>
                  <span className="text-sm text-gray-500">Material: {topic.materialType}</span>
                </div>

                {/* Dropdown content for the topic */}
                {activeTopic === index && (
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <h5 className="text-md font-semibold mb-2 text-gray-600">Course Material:</h5>
                    <p className='text-gray-400'>{topic.content}</p>
                  </div>
                )}

                {/* Button to open in detailed view on a new page (optional) */}
                {activeTopic === index && (
                  <button
                    className="mt-2 px-4 py-1 bg-[#8cd836] text-white rounded shadow-md hover:bg-green-700"
                    onClick={() => alert('Open detailed topic view (Implement navigation later)')}
                  >
                    View Detailed Material
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="mt-8">
            <button className="px-6 py-2 bg-[#8cd836] text-white font-semibold rounded shadow hover:bg-green-700">
              Complete Course
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
