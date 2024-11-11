import React, { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaEllipsisV } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; // Import Link for navigation

const JobApplicationStatus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);

  const applications = [
    { 
      jobTitle: 'Electrician', 
      status: 'Under Review', 
      timeline: [
        { step: 'Application Submitted', date: '2024-10-01' },
        { step: 'Initial Screening', date: '2024-10-02' },
        { step: 'Interview Scheduled', date: '2024-10-05' },
      ]
    },
    { 
      jobTitle: 'Carpenter', 
      status: 'Accepted', 
      timeline: [
        { step: 'Application Submitted', date: '2024-09-15' },
        { step: 'Interview Conducted', date: '2024-09-20' },
        { step: 'Offer Made', date: '2024-09-25' },
      ]
    },
    { 
      jobTitle: 'Plumber', 
      status: 'Rejected', 
      timeline: [
        { step: 'Application Submitted', date: '2024-09-28' },
        { step: 'Interview Conducted', date: '2024-10-01' },
        { step: 'Application Rejected', date: '2024-10-03' },
      ]
    },
  ];

  const openModal = (application) => {
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedApplication(null);
  };

  return (
    <div className="p-4 bg-white shadow rounded font-inter">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Job Application Status</h3>
      <ul className="space-y-4">
        {applications.map((app, index) => (
          <li key={index} className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center">
              {/* Status Icons */}
              {app.status === 'Accepted' ? (
                <FaCheckCircle className="text-green-500 mr-2" />
              ) : app.status === 'Rejected' ? (
                <FaTimesCircle className="text-red-500 mr-2" />
              ) : (
                <FaHourglassHalf className="text-yellow-500 mr-2" />
              )}
              <span className="font-medium text-gray-800">{app.jobTitle}</span>
            </div>
            <div className="flex items-center">
              <span className={app.status === 'Accepted' ? 'text-green-500' : app.status === 'Rejected' ? 'text-red-500' : 'text-yellow-500'}>
                {app.status}
              </span>
              <button 
                onClick={() => openModal(app)} 
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                <FaEllipsisV />
              </button>
              {app.status === 'Accepted' && (
                <Link to="/take-action" className="ml-4 text-blue-500 hover:underline">
                  Take Action
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Application Timeline */}
      {isModalOpen && selectedApplication && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white w-80 p-4 rounded shadow-lg text-gray-800">
            <h3 className="text-lg font-semibold mb-2">{selectedApplication.jobTitle} Application Timeline</h3>
            <ul className="space-y-2">
              {selectedApplication.timeline.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.step}</span>
                  <span className="text-gray-600">{item.date}</span>
                </li>
              ))}
            </ul>
            <button 
              onClick={closeModal} 
              className="mt-4 w-full bg-[#8cd836] text-white py-2 rounded "
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobApplicationStatus;
