import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AccountSettings from '../components/AccountSettings';
import NotificationSettings from '../components/NotificationSettings';
import PrivacySettings from '../components/PrivacySettings';
import LanguageSettings from '../components/LanguageSettings';

const Settings = () => {
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

      {/* Main content */}
      <div className="flex-1 lg:ml-[200px] font-inter">
        <Navbar onToggleSidebar={toggleSidebar} />
        <div className="p-6">
          <h1 className="text-2xl font-semibold mb-6">Settings</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AccountSettings />
            <NotificationSettings />
            <PrivacySettings />
            <LanguageSettings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
