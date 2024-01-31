import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { authContext } from '../Context/AuthContext';


const MyJob = () => {

    const [jobs,setJobs]=useState([])
    const [search,setSearch]=useState('')
    const [loading,setLoading]=useState(true)
    const{user}=useContext(authContext)


    useEffect(()=>{
        setLoading(true)
        fetch(`https://job-portal-1.vercel.app/user/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setJobs(data))
        setLoading(false)
    },[user?.email])
    console.log(search)

    const buttonHandler =() => {
        const filter=jobs.filter(job=>
             search.toLowerCase()==='' ? job:job.jobTitle.toLowerCase().includes(search))
             setJobs(filter)
        }
        
        const deleteButton = (id) => {
            fetch(`https://job-portal-1.vercel.app/job/${id}`,{
                method: 'DELETE',
            })

            .then(res=>res.json())
            .then(data=>{
              if (data.acknowledged===true)
              {
                toast.success('Deleted successfully')
                
              }
                console.log(data)
            })
            
        }
        
                
           
        
    
    



    return (
        <div>
        <div>
           {
            user?.email? <h1 className='text-center my-10 font-bold text-xl'>All My Jobs</h1>:<h1 className="text-center my-10 font-bold text-xl text-warning">Login to see your posted jobs</h1>
           }

           <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder="Job Title" className='input flex mx-auto mt-2 text-xl input-bordered w-full lg:w-1/3'></input>
           <button onClick={buttonHandler} className='btn bg-blue-500 text-white flex m-auto text-xl lg:w-40 w-full mt-5'>Search</button>
           </div>
           <div>
           
<section className="py-1 bg-blueGray-50">
<div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-24">
  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 className="font-semibold text-base text-blueGray-700 mb-3">All Jobs</h3>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
         <Link to='/post-job'><button className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Post a new Job</button></Link> 
        </div>
      </div>
    </div>

    <div className="block w-full overflow-x-auto">
    <table className='items-center bg-transparent w-full border-collapse sm:table-auto'>

        <thead>
          <tr>
            <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          NO
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          TITLE
                        </th>
           <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          COMPANY NAME
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          SALARY
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          EDIT
                        </th>
          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          DELETE
                        </th>
          </tr>
        </thead>

        <tbody>
        {
            jobs.map((job,i)=>
                
                <tr key={i}>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                  {i+1}
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                  {job.jobTitle}
                </td>
                <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {job.companyName}
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  
                  ${job.minPrice}k-${job.maxPrice}k
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  
                <Link  to={`/editjob/${job._id}`}><button  className='btn btn-warning px-5 '>edit</button></Link>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  
                <button onClick={()=>deleteButton(job._id)} className='btn btn-error px-5 '>delete</button>
                </td>
              </tr>
            )
        }
         
          
        </tbody>

      </table>
    </div>
  </div>
</div>

</section>
           </div>

        </div>
    );
};

export default MyJob;