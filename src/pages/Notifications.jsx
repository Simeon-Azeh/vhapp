// src/pages/Notifications.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { FaCheckCircle, FaTrashAlt, FaBellSlash } from 'react-icons/fa';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'You have a new message from Jane.', isRead: false, details: 'Message details from Jane', actionRequired: false },
    { id: 2, text: 'Your course "Plumbing Basics" has been updated.', isRead: false, details: 'The course has new sections on advanced plumbing techniques.', actionRequired: true },
    { id: 3, text: 'You have been assigned a new project.', isRead: true, details: 'Project description and deadlines for the new project.', actionRequired: true },
  ]);

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  const openModal = (notification) => {
    setSelectedNotification(notification);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNotification(null);
    setIsModalOpen(false);
  };

  return (
    <div className="flex  min-h-screen">
      {/* Sidebar */}
      <div className={`fixed h-full bg-[#002266] z-40 lg:w-[200px] lg:block ${isSidebarOpen ? 'block' : 'hidden'} transition-transform lg:transform-none`}>
        <Sidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 lg:ml-[200px] font-inter">
        <Navbar onToggleSidebar={toggleSidebar} />

        <div className="p-6">
        
          {notifications.length === 0 ? (
            <div className="text-center">
              <FaBellSlash size={50} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No new notifications</p>
            </div>
          ) : (
            <ul className="space-y-4">
              {notifications.map((notification) => (
                <li
                  key={notification.id}
                  className={`p-4 bg-white text-gray-500  rounded-md flex justify-between items-center cursor-pointer text-sm md:text-lg ${
                    notification.isRead ? 'opacity-50' : ''
                  }`}
                  onClick={() => openModal(notification)}
                >
                  <span>{notification.text}</span>
                  <div className="flex items-center space-x-4">
                    {!notification.isRead && (
                      <button
                        className="text-[#8cd836] hover:text-[#6ca424] flex items-center gap-1 text-xs md:text-lg"
                        onClick={(e) => {
                          e.stopPropagation();
                          markAsRead(notification.id);
                        }}
                      >
                        <FaCheckCircle size={18} /> Mark as Read
                      </button>
                    )}
                    <button
                      className="text-red-500 hover:text-red-700 flex items-center gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteNotification(notification.id);
                      }}
                    >
                      <FaTrashAlt size={18} /> 
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* Notification Modal */}
          {isModalOpen && selectedNotification && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white rounded-lg p-6 max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Details</h2>
                <p className='text-gray-500'>{selectedNotification.details}</p>

                {/* Action Buttons */}
                {selectedNotification.actionRequired && (
                  <div className="mt-6">
                    <button className="px-4 py-2 bg-[#8cd836] text-white rounded-md hover:bg-[#6ca424] mr-4">
                      Take Action
                    </button>
                    <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                )}
                {!selectedNotification.actionRequired && (
                  <div className="mt-6">
                    <button className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600" onClick={closeModal}>
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
