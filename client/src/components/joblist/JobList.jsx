// src/components/JobList.jsx
import React from 'react';
import SearchBar from '../others/SearchBar';
import JobCard from './JobCard';

const JobList = () => {
  const jobs = [
    { company: 'Gojek', title: 'Senior - Product Designer', location: 'Jakarta - Indonesia', category: 'Design', daysAgo: 3 },
    { company: 'Tokopedia', title: 'Project Manager', location: 'Jakarta - Indonesia', category: 'Product', daysAgo: 4 },
    { company: 'Dropbox', title: 'Senior - Software Engineer', location: 'Anywhere - Remote', category: 'Engineer', daysAgo: 5 },
    { company: 'Gojek', title: 'Senior - Product Designer', location: 'Jakarta - Indonesia', category: 'Design', daysAgo: 3 },
    { company: 'Tokopedia', title: 'Project Manager', location: 'Jakarta - Indonesia', category: 'Product', daysAgo: 4 },
    { company: 'Dropbox', title: 'Senior - Software Engineer', location: 'Anywhere - Remote', category: 'Engineer', daysAgo: 5 },
    { company: 'Gojek', title: 'Senior - Product Designer', location: 'Jakarta - Indonesia', category: 'Design', daysAgo: 3 },
    { company: 'Tokopedia', title: 'Project Manager', location: 'Jakarta - Indonesia', category: 'Product', daysAgo: 4 },

  ];

  return (
    <div className='border-2 border-violet-500 rounded-t-3xl mx-10 px-5 py-10 md:p-10  bg-violet-200'>

      <div className="flex flex-col gap-4">

        <div className="flex font-display justify-between items-center">
          <h1 className='font-semibold text-xl flex flex-1 justify-center items-center md:justify-start'>Today's Trending Job</h1>

          <div className="hidden lg:flex rounded">
            <input type="text" placeholder="Web Design" className="px-4 py-2 border shadow-md border-gray-300 rounded-l" />
            <input type="text" placeholder="Mumbai" className="px-4 py-2 shadow-md border-t border border-gray-300" />
            <button className="bg-black text-white ms-2 px-6 py-2 rounded">Search</button>
          </div>


        </div>

        <div className='flex gap-4 overflow-scroll hide-scrollbar'>
          {jobs.map((job)=>(
            <JobCard company={job.company} location={job.location} type={job.type} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default JobList;
