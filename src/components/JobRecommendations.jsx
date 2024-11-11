import React from 'react';

const jobRecommendations = [
  {
    id: 1,
    title: 'Electrician',
    description: 'Responsible for installing and maintaining electrical systems.',
    image: 'https://img.freepik.com/free-photo/worker-putting-back-together-hvac-system_482257-80058.jpg?t=st=1729488736~exp=1729492336~hmac=4a2229192a262322ad47408358e16c69fd1e21fac3d66d04b992861bc6ded1ee&w=360', // Replace with actual image URL
    link: '/jobs/electrician',
  },
  {
    id: 2,
    title: 'Carpenter',
    description: 'Skilled in woodwork, building structures, and furniture.',
    image: 'https://img.freepik.com/free-photo/medium-shot-man-working-with-hand-saw_23-2148931063.jpg?t=st=1729488789~exp=1729492389~hmac=9047715bd09c64dcfd7f523e594379d2fa65cad5d2767712a09112ce3f93d571&w=360', // Replace with actual image URL
    link: '/jobs/carpenter',
  },
  {
    id: 3,
    title: 'Welder',
    description: 'Specialized in welding metal parts together for various applications.',
    image: 'https://img.freepik.com/free-photo/carpenter-cutting-mdf-board-inside-workshop_23-2149451099.jpg?t=st=1729488827~exp=1729492427~hmac=1f00ddc155fa6cda0d2d64ff79ff6243ff3a9b43390f822cd1972944a98f67f5&w=740', // Replace with actual image URL
    link: '/jobs/welder',
  },
];

const JobRecommendations = () => {
  return (
    <div className="p-4 bg-white shadow rounded font-inter">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Job Recommendations</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {jobRecommendations.map((job) => (
          <div key={job.id} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer">
            <img src={job.image} alt={job.title} className="w-full h-36 object-cover" />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-gray-800">{job.title}</h4>
            
              <a 
                href={job.link} 
                className="inline-block px-4 py-2 text-white bg-[#8cd836] rounded hover:bg-green-900 transition duration-200"
              >
                Apply Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRecommendations;
