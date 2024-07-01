// JobCard.js
import React from 'react';

const JobCard = ({ title, company, location, type, description }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="p-8 w-44">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{type}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{title}</a>
          <p className="mt-2 text-gray-500">{company}</p>
          <p className="mt-2 text-gray-500">{location}</p>
          <p className="mt-4 text-gray-700 text-sm">{description}</p>
          <div className="mt-4">
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
