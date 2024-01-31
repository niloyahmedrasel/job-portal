import React from 'react';
import { FaEnvelopeOpen, FaRocket } from 'react-icons/fa';

const NewsLetter = () => {
    return (
        <div>
        <div className='shadow-xl'>
        <div className='flex font-bold text-2xl '>
        <FaEnvelopeOpen className='m-1'></FaEnvelopeOpen>
         <h1>Email For Jobs</h1>

            </div>
            <p className='text-base text-slate-500 mt-3 lg:mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, consequatur.</p>
            <input type="text" placeholder="Your Email Here" className="input input-bordered w-full mt-5 lg:mt-10" />
            <button className="btn btn-outline btn-info w-full mt-2 lg:mt-5">Subscribe</button>
            </div>
              
            <div className='shadow-xl'>
            <div className='flex font-bold text-2xl mt-10 '>
            <FaRocket className='m-1'></FaRocket>
            <h1>Get Noticed Faster</h1>

            </div>
            <p className='text-base text-slate-500 mt-3 lg:mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, consequatur.</p>
            <button className="btn btn-outline btn-info w-full mt-2 lg:mt-5"> Upload Your Resume</button>
            </div>
        </div>
    );
};

export default NewsLetter;