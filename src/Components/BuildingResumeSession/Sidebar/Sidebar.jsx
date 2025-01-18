import React from 'react'
import style from "./sidebar.module.css"
import { HiOutlineNewspaper } from "react-icons/hi2";
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation().pathname.split('/')[2];
   
    const open = () => {
        navigate('/')
    };

    const data = [
        {
            name: 'PersonalInfo',
            link: '/makeResume/personalinfo'
        },
        {
            name: 'Education',
            link: "/makeResume/education"
        },
        {
            name: 'Experience',
            link: "/makeResume/experience"
        },
        {
            name: 'Skills',
            link: "/makeResume/skills"
        },
        {
            name: 'Finalize',
            link: "/makeResume/finalize"
        },
    ];



    return (
        <div className={`${style.main} col-2`}>
            <div onClick={open} className={`d-flex pt-3 text-white align-items-center justify-content-evenly ${style.logodiv} `}>
                <HiOutlineNewspaper className={`fs-1 ${style.icon}`} />
                <h2 className={`${style.logo}`}>
                    CvMaker</h2>
            </div>

            <div className=' text-white mt-5'>
                {data.map((val, i) => {
                    return (
                        <div key={i}>
                            <div onClick={()=>navigate(val.link)} className='d-flex col-10 mx-auto text-center' style={{cursor:'pointer'}} >
                                <div className={`${val.name.toLowerCase() == location  && style.active }  ${style.dot} text-center fs-4 fw-bold rounded-circle`}>{i + 1}</div>
                                <h6 className='mt-2 ms-3'>{val.name}</h6>
                            </div>
                            <div className={`${style.hiphen} `}>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
