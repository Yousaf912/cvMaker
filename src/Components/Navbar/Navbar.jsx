import React from 'react'
import { HiOutlineNewspaper } from "react-icons/hi2";
import style from './navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();
    
    const open=(name)=>{
        navigate(`/${name}`)
    }
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className={` ${style.navbar} mt-1  d-flex justify-content-between align-items-center`}>
                        {/* --------------------------------- logo start ----------------------------- */}
                        <div className={`position-relative  col-2  p-1 mt-1 `}>
                            <div  onClick={()=>open('')} className={`d-flex align-items-center justify-content-evenly ${style.logodiv} `}>
                                <HiOutlineNewspaper className={`fs-1 ${style.icon}`} />
                                <h2 className={`${style.logo}`}>
                                    CvMaker</h2>
                            </div>

                        </div>
                        {/* ------------------------------------ buttons----------------------------- */}
                        <div className="col-6 mt-4">
                            <ul className='d-flex justify-content-evenly position-relative'>
                                <li onClick={()=>open('home')}>Home</li>
                                <li onClick={()=>open('templates')}>Templates</li>
                                <li >
                                    <a className='text-decoration-none' href="#about">About Us</a>
                                </li>
                                <li >
                                    <a className='text-decoration-none' href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-1">
                            <button className='btn px-4 '>
                                <NavLink className={style.nav}  to={'/login'}>Login</NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
