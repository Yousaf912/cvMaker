import React from 'react'
import { useLocation } from 'react-router-dom'
import Login from './login/login';
import Signup from './Signup/Signup';
import style from './main.module.css'
import img from '../pics/signup.png'
import Navbar from '../Navbar/Navbar';


export default function Main() {
    const location = useLocation().pathname.split("/")[1];

    const obj = {
        'login': <Login />,
        'signup': <Signup />,
    }
    let element = obj[location]
    return (
        <div>
            <Navbar/>
       
        <div className={`${style.maindiv} mt-5 pt-4`}>
            <div className="container">
                <div className="row">
                    <div className='d-flex '>
                        <div className={`${style.data} col-6 p-3 rounded-4`}>
                            {element}
                        </div>
                        <div className="col-6">
                            <img src={img} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
