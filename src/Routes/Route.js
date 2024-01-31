import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import PostJob from "../PostJob/PostJob";
import MyJob from "../MyJob/MyJob";
import EditJob from "../EditJob/EditJob";
import Login from "../Login/Login";
import Register from "../Login/Register";

export const router=createBrowserRouter([{
    path:'/',
    element:<Main></Main>,
    children:[
        {
         path: '/',
         element:<Home></Home>
        },
        {
            path:'/post-job',
            element:<PostJob></PostJob>
        },
        {
            path: '/myjob',
            element:<MyJob></MyJob>
        },
        {
            path: '/editjob/:id',
            element:<EditJob></EditJob>,
            loader:({params})=>fetch(`https://job-portal-1.vercel.app/post-job/${params.id}`)
            

        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Register></Register>
        }

    ]
}])
