import  {createBrowserRouter, Navigate} from 'react-router-dom';
import App from '../../App.jsx';
import Main from '../LoginandSignup/main.jsx';
import Template from '../Templates/template.jsx';
import Firstpage from '../BuildingResumeSession/MakeResumeFirstPage/firstpage.jsx'
import MainPart from '../BuildingResumeSession/MainPart.jsx';
import { SelectTemplate } from '../BuildingResumeSession/Selecttemplate/SelectTemplate.jsx';
const id = localStorage.getItem('userid');


export const AllRoutes = createBrowserRouter([
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/home',
        element:<App/>
    },
    {
        path:'/aboutus',
        element:<App/>
    },
    {
        path:'/templates',
        element:<Template/>
    },
    {
        path:'/contactus',
        element:<App/>
    },
    {
        path:'/login',
        element:<Main/>
    },
    {
        path:'/signup',
        element:<Main/>
    },
    {
        path:'/makeResume',
        element: <Firstpage/>
    },
    { 
        path:'/makeResume/personalinfo',
        element:id?<MainPart/>: <Navigate to={'/login'}></Navigate>
    },
    {
        path:'/makeResume/education',
        element:id?<MainPart/>: <Navigate to={'/login'}></Navigate>
    },
    {
        path:'/makeResume/experience',
        element:id?<MainPart/>: <Navigate to={'/login'}></Navigate>
    },
    {
        path:'/makeResume/skills',
        element:id?<MainPart/>: <Navigate to={'/login'}></Navigate>
    },
    {
        path:'/makeResume/finalize',
        element:id?<MainPart/>: <Navigate to={'/login'}></Navigate>
    },
    {
        path:'/makeResume/selectTemplate',
        element:<SelectTemplate/>
    },
])