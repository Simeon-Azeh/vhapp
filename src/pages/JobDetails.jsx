import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
const jobs = [
  { jobId: 1, title: 'Graphic Designer', company: 'Creative Inc', location: 'Remote', type: 'Full-Time', postedDate: 'Oct 20, 2024', description: 'Create stunning visual content for our clients...', requirements: '3+ years of experience, Adobe Photoshop, Illustrator' },
  { jobId: 2, title: 'Tailoring Expert', company: 'Fashion Hub', location: 'Lagos', type: 'Part-Time', postedDate: 'Oct 18, 2024', description: 'Sew and design various types of clothing...', requirements: '5+ years of tailoring experience, skilled in pattern making' },
  // Add more jobs...
];

function JobDetails() {
  const { jobId } = useParams();
  const job = jobs.find(job => job.jobId === parseInt(jobId));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto bg-white p-6  rounded mt-8 font-inter">
       <Link className='flex items-center gap-2 mb-4 text-gray-800' to='/jobs'>
       <GoArrowLeft />
       Go back
       </Link>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{job.title}</h2>
      <p className="text-xl text-gray-600 mb-2">{job.company}</p>
      <p className="text-sm text-gray-500 mb-6">{job.location} - {job.type} | Posted on: {job.postedDate}</p>
      <p className="text-gray-700 mb-6">{job.description}</p>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">Requirements</h3>
      <p className="text-gray-700 mb-6">{job.requirements}</p>
      <a 
        href={`/jobs/${jobId}/apply`} 
        className="bg-[#8cd836] text-white px-4 py-2 rounded shadow-md"
      >
        Apply Now
      </a>
    </div>
  );
}

export default JobDetails;
