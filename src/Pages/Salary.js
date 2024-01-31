import React from 'react';
import Experiences from './Experiences';


const Salary = ({radio}) => {
    return (
        <div>
        <div className="flex items-center mt-3 mb-5">
        <div>
            
            
            <div className="flex flex-col items-start">
                <div className="flex items-center ">
                    <input onChange={radio} type='radio'  name='Rasel' value='20'></input>
                    <span className="ml-2 text-xl font-semibold mb-1">20000</span>
                </div>
                <div className="flex items-center ">
                <input onChange={radio} type='radio'  name='Rasel' value='40'></input>
                <span className="ml-2 text-xl font-semibold mb-1">40000</span>
            </div>
                <div className="flex items-center">
                    <input onChange={radio} type='radio' name='Rasel'  value='50'></input>
                    <span className="ml-2 text-xl font-semibold mb-1">50000</span>
                </div>
                <div className="flex items-center">
                    <input onChange={radio} type='radio' name='Rasel'  value='80'></input>
                    <span className="ml-2 text-xl font-semibold mb-1">80000</span>
                </div>
                
            </div>
        </div>
        </div>
        <Experiences radio={radio}></Experiences>
        </div>
    );
};

export default Salary;