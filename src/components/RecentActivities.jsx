import React, { useState, useEffect } from 'react';
import { FaBook, FaBriefcase, FaWrench } from 'react-icons/fa'; // Icons for activities
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      const db = getFirestore();
      const activitiesCollection = collection(db, 'activities');
      const activitiesSnapshot = await getDocs(activitiesCollection);
      const activitiesList = activitiesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setActivities(activitiesList);
    };

    fetchActivities();
  }, []);

  const getIcon = (type) => {
    switch (type) {
      case 'course':
        return <FaBook className="text-blue-500" />;
      case 'job':
        return <FaBriefcase className="text-green-500" />;
      case 'workshop':
        return <FaWrench className="text-orange-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow font-inter">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Recent Activities</h3>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="relative flex items-start space-x-4">
            {/* Timeline Indicator */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gray-300"></div>
            <div className="z-10">
              <span className="block w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></span>
            </div>
            
            {/* Icon */}
            <div className="z-10">
              <div className="p-2 bg-gray-100 rounded-full">
                {getIcon(activity.type)}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <p className="text-gray-700">
                {activity.activity}
              </p>
              <span className="text-sm text-gray-400">
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