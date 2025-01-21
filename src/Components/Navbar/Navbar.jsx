import React, { useEffect, useState } from 'react'
import { HiOutlineNewspaper } from "react-icons/hi2";
import style from './navbar.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSpinner } from '../ReduxStore/Spinner';
import { toast, ToastContainer } from 'react-toastify';


export default function Navbar() {
    const navigate = useNavigate();
    const [id,setid]=useState();
    const user = localStorage.getItem('token');
    const dispatch = useDispatch()

    useEffect(()=>{
        setid(user)
    },[user])

    const open = (name) => {
        navigate(`/${name}`)
    }

    const logout = () => {
        dispatch(setSpinner(true));
        setTimeout(() => {
            localStorage.removeItem('token');
            toast.success('LogOut successfully')
            dispatch(setSpinner(false));
        }, 1000);

    }

    return (
        <div className="container-fluid">
            <ToastContainer/>
            <div className="container">
                <div className="row">
                    <div className={` ${style.navbar} mt-1  d-flex justify-content-between align-items-center`}>
                        {/* --------------------------------- logo start ----------------------------- */}
                        <div className={`position-relative  col-md-2 col-5  p-1 mt-1 `}>
                            <div onClick={() => open('')} className={`d-flex align-items-center justify-content-evenly ${style.logodiv} `}>
                                <HiOutlineNewspaper className={`fs-1 ${style.icon}`} />
                                <h2 className={`${style.logo}`}>
                                    CvMaker</h2>
                            </div>

                        </div>
                        {/* ------------------------------------ buttons----------------------------- */}
                        <div className="col-6 mt-4 d-none d-md-block">
                            <ul className='d-flex justify-content-evenly position-relative'>
                                <li onClick={() => open('home')}>Home</li>
                                <li onClick={() => open('templates')}>Templates</li>
                                <li >
                                    <a className='text-decoration-none' href="#about">About Us</a>
                                </li>
                                <li >
                                    <a className='text-decoration-none' href="#contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-1 col-2">
                            {id ?
                                <button onClick={logout} className='btn px-4 '>
                                    <NavLink className={style.nav} >LogOut</NavLink>
                                </button> :
                                <button className='btn px-4 '>
                                    <NavLink className={style.nav} to={'/login'}>Login</NavLink>
                                </button>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
