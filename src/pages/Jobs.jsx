import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const fetchJobs = async () => {
      const db = getFirestore();
      const jobsCollection = collection(db, 'jobs');
      const jobsSnapshot = await getDocs(jobsCollection);
      const jobsList = jobsSnapshot.docs.map(doc => ({ ...doc.data(), jobId: doc.id }));
      setJobs(jobsList);
    };

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex bg-[#f9f9f9] min-h-screen">
      <div className={`fixed h-full bg-[#002266] z-40 lg:w-[200px] lg:block ${isSidebarOpen ? 'block' : 'hidden'} transition-transform lg:transform-none`}>
        <Sidebar />
      </div>
      <div className="flex-1 lg:ml-[200px] font-inter">
        <Navbar />
        <div className="p-6">
          <h1 className="mb-6 text-2xl font-semibold">Job Opportunities</h1>
          <SearchBar onSearch={setSearchTerm} />
          <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map(job => (
              <JobCard 
                key={job.jobId} 
                title={job.title} 
                company={job.company}
                location={job.location}
                type={job.type}
                postedDate={job.postedDate}
                description={job.description}
                jobId={job.jobId}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;