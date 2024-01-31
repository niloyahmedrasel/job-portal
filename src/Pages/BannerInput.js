import React from 'react';

import { useTypewriter } from "react-simple-typewriter";

const BannerInput = ({searchHandler,search,locationSearchHandler,locationSearch}) => {

    const [text]=useTypewriter(
        {
          words:['New Job'],
          loop:0
        }
      )

   
    
    return (
        <div>
            <h1 className='text-3xl font-semibold mb-2'>Find your <span className='font-bold text-blue-500'>{text} </span>
            
             today</h1>
            <h1 className='text-xl mb-10 text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam atque cupiditate officiis quos pariatur quod quo iste ipsum ullam?</h1>
            <div className='mb-20'>
            <input onChange={searchHandler} value={search} type='text' placeholder="Which job u r looking for??" className='input text-xl  input-info w-full lg:w-1/3 mr-10'></input>
            <input onChange={locationSearchHandler} value={locationSearch} type='text' placeholder="Location??" className='input mt-2 text-xl input-info w-full lg:w-1/3'></input>
            
            
            </div>
           
            
            
        </div>
    );
};

export default BannerInput;