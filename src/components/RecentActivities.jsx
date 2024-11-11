import React from 'react';
import { FaBook, FaBriefcase, FaWrench } from 'react-icons/fa'; // Icons for activities
import { Link } from 'react-router-dom';

const activities = [
  {
    id: 1,
    icon: <FaBook className="text-blue-500" />,
    activity: 'Started "Plumbing Basics" course',
    date: 'October 18, 2024',
    time: '10:30 AM',
    link: '/courses/plumbing-basics',
  },
  {
    id: 2,
    icon: <FaBriefcase className="text-green-500" />,
    activity: 'Applied for "Carpenter" job',
    date: 'October 17, 2024',
    time: '2:45 PM',
    link: '/jobs/carpenter',
  },
  {
    id: 3,
    icon: <FaWrench className="text-orange-500" />,
    activity: 'Registered for "Baking Workshop"',
    date: 'October 16, 2024',
    time: '1:00 PM',
    link: '/workshops/welding',
  },
];

const RecentActivities = () => {
  return (
    <div className="p-4 bg-white shadow rounded font-inter">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h3>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 relative">
            {/* Timeline Indicator */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gray-300"></div>
            <div className="z-10">
              <span className="block w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></span>
            </div>
            
            {/* Icon */}
            <div className="z-10">
              <div className="p-2 bg-gray-100 rounded-full">
                {activity.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <p className="text-gray-700">
                {activity.activity}
              </p>
              <span className="text-gray-400 text-sm">
                {activity.date} at {activity.time}
              </span>
            </div>
            
            {/* Action */}
            <div className="z-10">
              <Link
                to={activity.link}
                className="text-sm text-[#8cd836] hover:underline"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
