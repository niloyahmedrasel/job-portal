import React from 'react';

const JobCard = ({job}) => {
    return (
        <div>
        
        <div
          className="block mt-10 rounded-lg bg-slate-900 text-center shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-gray-900">
          <div
            className="border-b-2 text-white border-neutral-100 px-6 py-3 dark:border-neutral-600 ">
            {job.companyName}
          </div>
          <div className="p-6">
            <h5
              className="mb-2 text-xl font-medium leading-tight text-neutral-800 text-white">
              {job.jobTitle}
            </h5>
            <div className='flex justify-center items-center '>
            <h1 className='mx-2 text-warning font-semibold text-base '>{job.jobLocation}</h1>
            <h1 className='mx-2 text-warning font-semibold text-base '>{job.employmentType}</h1>
            <h1 className='mx-2 text-warning font-semibold text-base '>{job.minPrice}k-<span>{job.maxPrice}k</span></h1>
            <h1 className='mx-2 text-warning font-semibold text-base '>{job.postingDate}</h1>
            
            </div>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {job.description}
            </p>
            
          </div>
          
        </div>
       
        </div>
    );
};

export default JobCard;