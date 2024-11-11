import React from 'react';
import { FaRegCalendarAlt, FaRegEye, FaRegEdit } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; // Import Link for navigation

const UpcomingEvents = () => {
  const events = [
    { 
      name: 'Baking Workshop', 
      date: 'Oct 25, 2024',
      link: '/events/welding-workshop' // Link to event details
    },
    { 
      name: 'Graphic Design Materclass', 
      date: 'Nov 1, 2024',
      link: '/events/plumbing-course' // Link to event details
    },
  ];

  return (
    <div className="p-4 bg-white shadow rounded font-inter">
      <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <FaRegCalendarAlt className="mr-2" /> Upcoming Events
      </h3>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="flex justify-between items-center p-2 border-b">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-800 text-sm">{event.name}</span>
              <span className="text-gray-600 text-xs">{event.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Link 
                to={event.link} 
                className="text-[#8cd836] hover:underline flex items-center text-xs"
              >
                <FaRegEye className="mr-1" /> View Details
              </Link>
              <Link 
                to={`/register/${event.name.replace(/\s+/g, '-').toLowerCase()}`} 
                className="bg-[#8cd836] shadow-md text-white px-3 py-1 rounded  flex items-center"
              >
                <FaRegEdit className="mr-1" /> Register
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
