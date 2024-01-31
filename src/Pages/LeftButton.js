import React from 'react';
import Salary from './Salary';

const LeftButton = ({button,radio}) => {
    return (
        <div>
        <h1 className='font-bold text-2xl mt-3 mb-5 '>Salary</h1>
        <div className='mt-5'>
        <button onClick={button} value=''  className="btn btn-outline  btn-info">Hourly</button>
        <button onClick={button} value='Monthly'  className="btn btn-outline  btn-info">Monthly</button>
        <button onClick={button} value='Yearly'  className="btn btn-outline  btn-info">Yearly</button>
        </div>
        <Salary radio={radio}></Salary>
        </div>
    );
};

export default LeftButton;