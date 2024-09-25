import  {createBrowserRouter} from 'react-router-dom';
import App from '../../App.jsx';
import Main from '../LoginandSignup/main.jsx';
import Template from '../Templates/template.jsx';

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
])