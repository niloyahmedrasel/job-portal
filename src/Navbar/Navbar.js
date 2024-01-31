import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';

const Navbar = () => {
  const {user,logOut}=useContext(authContext)

  const buttonHandler=() => {
     logOut()
     .then(res=>{})
  }
    return (
        <div>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-blue-500 text-white">
            <li className='mr-10 text-2xl '><Link to='/'>Start a Search</Link></li>
            <li className='mr-10 text-2xl '><Link to='/myjob'>My Jobs</Link></li>
            <li className='mr-10 text-2xl '><Link to='/post-job'>Post a Job</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl tracking-tight">JobPortal</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 cursor-pointer">
          <li className='mr-10 text-2xl '><Link to='/'>Start a Search</Link></li>
          <li className='mr-10 text-2xl '><Link to='/myjob'>My Jobs</Link></li>
          <li className='mr-10 text-2xl '><Link to='/post-job'>Post a Job</Link></li>
          
          </ul>
        </div>
        <div className="navbar-end">
        {
          user?.email? <Link to='/login'><button onClick={buttonHandler}  className='btn bg-blue-500 text-white text-xl lg:w-40 w-full mt-5 hover:bg-slate-900'>Log Out</button></Link>:<Link to='/login'><button   className='btn bg-blue-500 text-white text-xl lg:w-40 w-full mt-5 hover:bg-slate-900'>Log in</button></Link>
        }
        </div>
      </div>
        </div>
    );
};

export default Navbar;