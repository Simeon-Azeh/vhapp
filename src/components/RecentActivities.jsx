import React, { useState, useEffect } from 'react';
import { FaBook, FaBriefcase, FaWrench, FaRegSadTear } from 'react-icons/fa'; // Icons for activities and no activities
import { Link } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const RecentActivities = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const db = getFirestore();
        const q = query(collection(db, 'activities'), where('username', '==', user.email));
        const activitiesSnapshot = await getDocs(q);
        const activitiesList = activitiesSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setActivities(activitiesList);
      }
      setLoading(false);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-white rounded shadow font-inter">
      <h3 className="mb-4 text-xl font-semibold text-gray-800">Recent Activities</h3>
      {activities.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64">
          <FaRegSadTear className="mb-4 text-6xl text-gray-400" />
          <p className="text-gray-600">Nothing yet</p>
        </div>
      ) : (
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
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentActivities;