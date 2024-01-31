import React, { useEffect, useState } from 'react';
import BannerInput from './BannerInput';

import JobCard from './JobCard';
import LeftBanner from './LeftBanner';
import NewsLetter from './NewsLetter';

const Banner = () => {
    const [jobs,setJobs]=useState([])
    const [search,setSearch] = useState('')
    const [locationSearch,setLocationSearch] = useState('')
    const [selected,setSelected] = useState(null)
    const [loadings,setLoadings] = useState(true)
    
    const searchHandler=(e) => {
        setSearch(e.target.value)
        
    }
    const locationSearchHandler=(e) => {
        setLocationSearch(e.target.value)
        
    }
    //console.log(search)

    useEffect(()=>{
        fetch('https://job-portal-1.vercel.app/post-job')
        .then(res=>res.json())
        .then(data=>{
           
            setJobs(data)
            setLoadings(false)
        })
        
    },[])
    
    
   const jobFilter= jobs.filter((job,i)=>{
        return  search.toLowerCase()===''? job:job.jobTitle.toLowerCase().includes(search)
    })
   const locationFilter= jobs.filter((job,i)=>{
        return  locationSearch.toLowerCase()===''? job:job.jobLocation.toLowerCase().includes(locationSearch)
    })
   

   
   // console.log(jobFilter)

   const radio=(e)=>{
    setSelected(e.target.value)
    
    

   }
   const button=(e)=>{
       setSelected(e.target.value)
   }

   const filterCategory=(jobs,selected,search)=>{
    let filterjobs=jobs
    if(search)
    {
        filterjobs=jobFilter
        
    }
    if(locationSearch)
    {
        filterjobs=locationFilter
        
    }
   

    if(selected){
        filterjobs=filterjobs.filter(({jobLocation,experienceLevel,employmentType,salaryType,minPrice})=>{
            return jobLocation.toLowerCase()===selected.toLowerCase() ||
            
            experienceLevel.toLowerCase()===selected.toLowerCase() ||
            employmentType.toLowerCase()===selected.toLowerCase() ||
            salaryType.toLowerCase()===selected.toLowerCase() ||
            parseInt(minPrice)===parseInt(selected)
            

            
            

        })
    }
    return  filterjobs.map(job => <JobCard job={job}></JobCard>)
   }



   const result=filterCategory(jobs,selected,search)

    return (
        <div>
            <BannerInput searchHandler={searchHandler} locationSearchHandler={locationSearchHandler} locationSearch={locationSearch}  search={search}></BannerInput>
            <div className='lg:flex lg:w-3/4 '>
            <div className=' lg:w-1/2 '>
           <LeftBanner radio={radio} button={button} jobs={jobs}></LeftBanner>
            </div>
            <div>
            {
              result.length===1? <h1 className='mb-2 mt-10  font-bold text-2xl'>{result.length} Job</h1>:<h1 className='mb-5 mt-10 ml-20 font-bold text-2xl'>{result.length} Jobs</h1>
            }
            
            {
                loadings? <h1>loading....</h1>:<div>{result}</div>
            }
                </div>
            <div className='mt-10 lg:ml-40 '><NewsLetter></NewsLetter></div>
            </div>
        </div>
    );
};

export default Banner;