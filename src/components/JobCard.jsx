import React from 'react';
import { FaLinkedin, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function JobCard({ title, company, location, type, postedDate, description, jobId }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 font-inter hover:shadow-xl duration-150 transition-shadow cursor-pointer">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{postedDate}</p>
      </div>
      <p className="text-gray-700 mt-2">{company}</p>
      <p className="text-sm text-gray-500">{location} - {type}</p>
      <p className="mt-4 text-gray-700">{description.slice(0, 100)}...</p>
      <div className="flex justify-between mt-4">
        <Link 
          to={`/jobs/${jobId}`} 
          className="text-[#002266] font-semibold hover:underline text-sm"
        >
          View Details
        </Link>
        <a 
          href="https://linkedin.com" 
          className="flex items-center text-[#0077b5] hover:underline text-xs"
        >
          <FaLinkedin size={18} className="mr-2" /> Apply via LinkedIn
        </a>
      </div>
    </div>
  );
}

export default JobCard;
