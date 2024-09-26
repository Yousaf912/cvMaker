import React from 'react'
import style from "./sidebar.module.css"
import { HiOutlineNewspaper } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';


export default function Sidebar() {
  const navigate = useNavigate();
  const open=()=>{
    navigate('/')
  }
    
    return (
        <div className={`${style.main} col-2`}>
            <div onClick={open} className={`d-flex pt-3 text-white align-items-center justify-content-evenly ${style.logodiv} `}>
                <HiOutlineNewspaper className={`fs-1 ${style.icon}`} />
                <h2 className={`${style.logo}`}>
                    CvMaker</h2>
            </div>

            <div className=' text-white mt-5'>
                <div className='d-flex col-10 mx-auto text-center'>
                    <div className={`${style.dot} text-center fs-4 fw-bold rounded-circle`}>1</div>
                    <h6 className='mt-2 ms-3'>PersonalInfo</h6>
                </div>
                <div className={`${style.hiphen} `}>
                </div>
                <div className='d-flex col-10 mx-auto text-center'>
                    <div className={`${style.dot} text-center fs-4 fw-bold rounded-circle`}>2</div>
                    <h6 className='mt-2 ms-3'>Education</h6>
                </div>
                <div className={`${style.hiphen} `}>
                </div>
                <div className='d-flex col-10 mx-auto text-center'>
                    <div className={`${style.dot} text-center fs-4 fw-bold rounded-circle`}>3</div>
                    <h6 className='mt-2 ms-3'>Experience</h6>
                </div>
                <div className={`${style.hiphen} `}>
                </div>
                <div className='d-flex col-10 mx-auto text-center'>
                    <div className={`${style.dot} text-center fs-4 fw-bold rounded-circle`}>4</div>
                    <h6 className='mt-2 ms-3'>Skills</h6>
                </div>
                <div className={`${style.hiphen} `}>
                </div>
                <div className='d-flex col-10 mx-auto text-center'>
                    <div className={`${style.dot} text-center fs-4 fw-bold rounded-circle`}>5</div>
                    <h6 className='mt-2 ms-3'>Finalize</h6>
                </div>
            </div>
        </div>
    )
}
