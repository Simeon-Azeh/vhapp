// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Greeting from '../components/Greetings';
import RecentActivities from '../components/RecentActivities';
import JobRecommendations from '../components/JobRecommendations';
import CourseProgress from '../components/CourseProgress';
import ProfileCompletion from '../components/ProfileCompletion';
import UpcomingEvents from '../components/UpcomingEvents';
import JobApplicationStatus from '../components/JobApplicationStatus';
import Certifications from '../components/Certifications';

function Dashboard() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex bg-[#f9f9f9] min-h-screen">
      {/* Sidebar */}
      <div className={`fixed h-full bg-[#002266] z-40 lg:w-[200px] lg:block ${isSidebarOpen ? 'block' : 'hidden'} transition-transform lg:transform-none`}>
        <Sidebar />
      </div>

      {/* Overlay for sidebar on smaller screens */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-[200px]">
        <div className="top-0 sticky z-50">
          <Navbar toggleSidebar={toggleSidebar} />
        </div>

        <div className="p-6 overflow-auto">
          <div>
            <Greeting />
          </div>

          {/* Dashboard Components */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <RecentActivities />
            <JobRecommendations />
            <CourseProgress />
            <ProfileCompletion />
            <UpcomingEvents />
            <JobApplicationStatus />
            <Certifications />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
