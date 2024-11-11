import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";

function JobApplicationForm() {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resume: null,
    linkedin: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job applied:', formData);
    // Handle form submission (e.g., send data to API)
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 font-inter mt-8 rounded">
        <Link className='flex items-center gap-2 mb-4 text-gray-800' to='/jobs'>
       <GoArrowLeft />
       Go back
       </Link>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">Apply for Job ID: {jobId}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded bg-white"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Resume</label>
          <input 
            type="file" 
            name="resume" 
            onChange={handleFileChange} 
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">LinkedIn Profile (optional)</label>
          <input 
            type="text" 
            name="linkedin" 
            value={formData.linkedin} 
            onChange={handleChange} 
            className="w-full p-2 border border-gray-300 rounded bg-white"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-[#8cd836] text-white p-2 rounded font-semibold"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

export default JobApplicationForm;
