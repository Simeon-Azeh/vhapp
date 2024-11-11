import React from 'react';
import { FaDownload } from 'react-icons/fa'; // Import download icon

const Certifications = () => {
  const certifications = [
    { 
      title: 'Certified Tailor', 
      date: 'Oct 15, 2024',
      file: 'certified-welder.pdf' // Mock file name for download
    },
    { 
      title: 'Resin Craft Level 1', 
      date: 'Sep 10, 2024',
      file: 'plumbing-level-1.pdf' // Mock file name for download
    },
  ];

  return (
    <div className="p-4 bg-white shadow rounded font-inter">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Certifications Earned</h3>
      <ul className="space-y-4">
        {certifications.map((cert, index) => (
          <li key={index} className="flex justify-between items-center border-b pb-2">
            <div className="flex-1">
              <span className="font-medium text-gray-800">{cert.title}</span>
              <span className="text-gray-600 text-sm block">{cert.date}</span>
            </div>
            <a 
              href={`path/to/certificates/${cert.file}`} // Update with actual path
              download 
              className="bg-[#8cd836] text-white px-3 py-1 rounded flex items-center "
            >
              <FaDownload className="mr-1" /> Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
