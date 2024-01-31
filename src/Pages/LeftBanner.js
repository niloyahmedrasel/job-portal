import React from 'react';
import LeftButton from './LeftButton';

const LeftBanner = ({ radio,button,jobs }) => {
    
    return (
        <div>
        <div className="flex items-center">
            <div>
                <h1 className='font-bold text-2xl mb-2'>Filter</h1>
                <h1 className='font-bold text-2xl mb-5'>Location</h1>
                <div className="flex flex-col items-start">
                    <div className="flex items-center ">
                        <input onChange={radio} type='radio' title='london' name='Rasel' value=''></input>
                        <span className="ml-2 text-xl font-semibold mb-1">All</span>
                    </div>
                    <div className="flex items-center ">
                    <input onChange={radio} type='radio' title='london' name='Rasel' value='london'></input>
                    <span className="ml-2 text-xl font-semibold mb-1">London</span>
                </div>
                    <div className="flex items-center">
                        <input onChange={radio} type='radio' name='Rasel' title='Brussels' value='Brussels'></input>
                        <span className="ml-2 text-xl font-semibold mb-1">Brussels</span>
                    </div>
                    <div className="flex items-center">
                        <input onChange={radio} type='radio' name='Rasel' title='San Francisco' value='San Francisco'></input>
                        <span className="ml-2 text-xl font-semibold mb-1">San Francisco</span>
                    </div>
                    <div className="flex items-center">
                        <input onChange={radio} type='radio' name='Rasel' title='Boston' value='Boston'></input>
                        <span className="ml-2 text-xl font-semibold mb-1">Boston</span>
                    </div>
                </div>
            </div>
            
        </div>
        <LeftButton radio={radio}  button={button} jobs={jobs}></LeftButton>
        </div>
    );
};

export default LeftBanner;
