import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function JobApplicationForm() {
  const { jobId } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    resume: null,
    linkedin: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const db = getFirestore();
      await addDoc(collection(db, 'applications'), {
        jobId,
        fullName: formData.fullName,
        email: formData.email,
        resume: formData.resume.name, // Assuming you handle file upload separately
        linkedin: formData.linkedin,
        appliedAt: new Date()
      });

      // Add activity to the activities collection
      await addDoc(collection(db, 'activities'), {
        type: 'job',
        activity: `Applied for job ID: ${jobId}`,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        link: `/jobs/${jobId}`
      });

      setSuccess('Application submitted successfully.');
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl p-6 mx-auto mt-8 bg-white rounded font-inter">
      <Link className='flex items-center gap-2 mb-4 text-gray-800' to='/jobs'>
        <GoArrowLeft />
        Go back
      </Link>
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">Apply for Job ID: {jobId}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Full Name</label>
          <input 
            type="text" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            className="w-full p-2 bg-white border border-gray-300 rounded"
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
            className="w-full p-2 bg-white border border-gray-300 rounded"
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
            className="w-full p-2 bg-white border border-gray-300 rounded"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-[#8cd836] text-white p-2 rounded font-semibold"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Application'}
        </button>
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
        {success && <p className="mt-2 text-xs text-green-500">{success}</p>}
      </form>
    </div>
  );
}

export default JobApplicationForm;