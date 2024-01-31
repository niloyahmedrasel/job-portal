import {  useContext, useState } from "react";
import { useForm} from "react-hook-form"
import toast from "react-hot-toast";
import Creatable from 'react-select/creatable';
import { authContext } from "../Context/AuthContext";


export default function App() {
  const [selected,setSelected] =useState(null)
  const {user}=useContext(authContext)


  const {
    register,
    handleSubmit,
    reset,
    
    
  } = useForm()


  const onSubmit = (data) =>{
    data.skills=selected
     console.log(data)

     fetch('https://job-portal-1.vercel.app/post-job',
     {
       method: 'POST',
       headers:{'content-type': 'application/json'},
       body: JSON.stringify(data)
     }
     )
     .then(res=>res.json())
     .then(data=>{
      if(data.acknowledged===true){
        toast.success('successfully submitted')
        reset();
        }
        if(!user?.email){
          toast.error('login to see your jobs')
        
         
        
        
       

        
        
      }
       console.log(data);
       
        
         
     })
     
  }
  

  const options= [
    {value:'javascript',label:'javascript'},
    {value:'react.js',label:'react.js'},
    {value:'node.js',label:'node.js'},
    {value:'express.js',label:'express.js'},
    {value:'c++',label:'c++'},
    {value:'firebase',label:'firebase'},
    {value:'mongoDB',label:'mongoDB'},
  ]
  
  
  

 


  return (
        <div className="lg:mt-20 lg:ml-40">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between flex-col lg:flex-row ">
     <div className="w-full lg:w-1/2 ">
         <label className="block mb-5 text-xl text-gray-500">Job Title</label>
         <input type="text" placeholder="Web Developer" {...register('jobTitle')}  className="input input-bordered w-3/4 mb-5 placeholder:text-gray-400" />
     </div>
     <div className="w-full lg:w-1/2 ">
         <label className="block mb-5 text-xl text-gray-500">Company Name</label>
         <input type="text" placeholder="Ex: Brain Station" {...register('companyName')}  className="input mb-5 input-bordered w-3/4 placeholder:text-gray-400" />
     </div>
     </div>

     <div className="flex justify-between flex-col lg:flex-row ">
     <div className="w-full lg:w-1/2 ">
         <label className="block mb-5 text-xl text-gray-500">Minimum Salary</label>
         <input type="text" placeholder="$20k" {...register('minPrice')}  className="input input-bordered mb-5 w-3/4 placeholder:text-gray-400" />
     </div>
     <div className="w-full lg:w-1/2 ">
         <label className="block mb-5 text-xl text-gray-500">Maximum Salary</label>
         <input type="text" placeholder="$100k" {...register('maxPrice')}  className="input input-bordered mb-5 w-3/4 placeholder:text-gray-400" />
     </div>
     </div>


     <div className="flex justify-between flex-col lg:flex-row ">
     <div className="w-full lg:w-1/2 "> 
     <label className="block mb-5 text-xl text-gray-500">Salary Type</label>
     <select className="input input-bordered mb-5 w-3/4 " {...register("salaryType")}>
     <option value="Hourly">Hourly</option>
     <option value="Monthly">Monthly</option>
     <option value="Yearly">Yearly</option>
   </select>
     </div>
     <div className="w-full lg:w-1/2 ">
         <label className="block mb-5 text-xl text-gray-500">Location</label>
         <input type="text" placeholder="London" {...register('jobLocation')}  className="input mb-5 input-bordered w-3/4 placeholder:text-gray-400" />
     </div>
     </div>

     <div className="flex justify-between flex-col lg:flex-row ">
     <div className="w-full lg:w-1/2 ">
         <label className="block mb-5 text-xl text-gray-500">Date of Posting</label>
         <input type="date" placeholder="2023-11-03" {...register('postingDate')}  className="input mb-5 input-bordered w-3/4 placeholder:text-gray-400" />
     </div>
     <div className="w-full lg:w-1/2 ">
         <label className="block mb-5 text-xl text-gray-500">Employment Type</label>
         <select className="input input-bordered w-3/4 mb-5" {...register("employmentType")}>
     <option value="Part-time">Part-time</option>
     <option value="Temporary">Temporary</option>
     <option value="Full-time">Full-time</option>
   </select>
     </div>
     </div>


     <div className="flex justify-between flex-col lg:flex-row ">
     <div className="w-full lg:w-1/3 ">
     <label className="block mb-5 text-xl text-gray-500">Require Skills</label>
     <Creatable
     className="mb-5 w-full"
     defaultValue={selected}
     {...register('skills')}
     onChange={setSelected}
     isMulti
     options={options}
     ></Creatable>
     </div>
     <div className="w-full lg:w-1/2 "> 
     <label className="block mb-5 text-xl text-gray-500">Experience Level</label>
     <select className="input input-bordered mb-5 w-3/4 " {...register("experienceLevel")}>
     <option value="Internship">Internship</option>
     <option value="Any experience">Any experience</option>
     <option value="Work remotely">Work remotely</option>
      </select>
     </div>
     </div>
     <div>
     <div className="flex justify-between flex-col lg:flex-row ">
     <div className="w-full lg:w-1/2 ">
     <label className="block mb-5 text-xl text-gray-500">Description</label>
     <textarea type="text" rows="4" cols="50" placeholder="description" {...register('description')}  className="input mb-5 input-bordered w-full  placeholder:text-gray-400" />
     </div>
     </div>
     <div className="w-full lg:w-1/2 ">
     <label className="block mb-5 text-xl text-gray-500">Posted By</label>
     <input type="text"  defaultValue={user?.email} placeholder="Email" {...register('email')}  className="input input-bordered w-3/4 mb-5 placeholder:text-gray-400" />
     </div>
     </div>



      <input type="submit" className="w- 40 text-white text-xl btn btn-primary" />
    </form>
    </div>
  )
}