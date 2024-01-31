import React from 'react';
import EmploymentType from './EmploymentType';

const Experiences = ({radio}) => {
    return (
        <div>
        <h1 className='font-bold text-2xl mb-5 mt-3'>Experiences</h1>
        <div className="flex items-center mt-3">
        <div>
            
            
            <div className="flex flex-col items-start">
                <div className="flex items-center ">
                    <input onChange={radio} type='radio'  name='Rasel' value='Any experience'></input>
                    <span className="ml-2 text-xl font-semibold mb-1">Any experience</span>
                </div>
                <div className="flex items-center ">
                <input onChange={radio} type='radio'  name='Rasel' value='Internship'></input>
                <span className="ml-2 text-xl font-semibold mb-1">Internship</span>
            </div>
                <div className="flex items-center">
                    <input onChange={radio} type='radio' name='Rasel'  value='Work remotely'></input>
                    <span className="ml-2 text-xl font-semibold mb-1">Work remotely</span>
                </div>
                
                
            </div>
            
        </div>
        </div>
        <EmploymentType radio={radio}></EmploymentType>
        </div>
    );
};

export default Experiences;