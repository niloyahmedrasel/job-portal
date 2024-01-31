import React from 'react';

const EmploymentType = ({radio}) => {
    return (
        <div>
        <h1 className='font-bold text-2xl mb-5 mt-2'>Employment Type</h1>
        <div className="flex flex-col items-start">
        <div className="flex items-center ">
        <input onChange={radio} type='radio'  name='Rasel' value='Temporary'></input>
        <span className="ml-2 text-xl font-semibold mb-1">Temporary</span>
    </div>
        <div className="flex items-center">
            <input onChange={radio} type='radio' name='Rasel'  value='Part-time'></input>
            <span className="ml-2 text-xl font-semibold mb-1">Part-time</span>
        </div>
        <div className="flex items-center">
            <input onChange={radio} type='radio' name='Rasel'  value='Full-time'></input>
            <span className="ml-2 text-xl font-semibold mb-1">Full-time</span>
        </div>
       
    </div>
        </div>
    );
};

export default EmploymentType;