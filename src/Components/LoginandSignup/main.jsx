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
                    <div className='d-md-flex '>
                        <div data-aos="zoom-in-up" data-aos-duration="1000" className={`${style.data} col-md-6 p-3 rounded-4 `}>
                            {element}
                        </div>
                        <div data-aos="zoom-in-left" data-aos-duration='2000' className="col-md-6 d-none d-md-block">
                            <img src={img} style={{width:'100%'}} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
