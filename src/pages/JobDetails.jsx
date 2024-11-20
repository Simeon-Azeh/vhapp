import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const JobDetails = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const db = getFirestore();
        const jobDoc = await getDoc(doc(db, 'jobs', jobId));
        if (jobDoc.exists()) {
          setJob(jobDoc.data());
        } else {
          setError('Job not found');
        }
      } catch (err) {
        setError('Failed to fetch job details');
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="max-w-4xl p-6 mx-auto mt-8 bg-white rounded font-inter">
      <Link className='flex items-center gap-2 mb-4 text-gray-800' to='/jobs'>
        <GoArrowLeft />
        Go back
      </Link>
      <h2 className="mb-4 text-xl font-semibold text-gray-800">{job.title}</h2>
      <p className="mb-2 text-xl text-gray-600">{job.company}</p>
      <p className="mb-6 text-sm text-gray-500">{job.location} - {job.type} | Posted on: {job.postedDate}</p>
      <p className="mb-6 text-gray-700">{job.description}</p>
      <h3 className="mb-2 text-xl font-semibold text-gray-800">Requirements</h3>
      <p className="mb-6 text-gray-700">{job.requirements}</p>
      <a 
        href={`/jobs/${jobId}/apply`} 
        className="bg-[#8cd836] text-white px-4 py-2 rounded shadow-md"
      >
        Apply Now
      </a>
    </div>
  );
};

export default JobDetails;