import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar';

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  const jobs = [
    { title: 'Graphic Designer', company: 'Creative Inc', location: 'Remote', type: 'Full-Time', postedDate: 'Oct 20, 2024', description: 'Create stunning visual content', jobId: 1 },
    { title: 'Tailoring Expert', company: 'Fashion Hub', location: 'Lagos', type: 'Part-Time', postedDate: 'Oct 18, 2024', description: 'Sew and design clothing', jobId: 2 },
    // Add more jobs here...
  ];

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
          <h1 className="text-2xl font-semibold mb-6">Job Opportunities</h1>
          <SearchBar onSearch={setSearchTerm} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
