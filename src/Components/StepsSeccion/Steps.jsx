import React from 'react';
import style from "./steps.module.css";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSpinner } from '../ReduxStore/Spinner';

export default function Steps() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = localStorage.getItem('userid')

    const openlink = () => {

        if (id) {
            navigate('/makeResume')

        } else {
            navigate('/login')

        }


    }
    return (
        <div className='px-3 '>
            <div className={`${style.main} mt-3 p-2 mb-5 pb-5 col-12`}>
                <div className="container">
                    <div className="row">
                        <div className='col-md-5 col-8 text-white text-md-center  mt-5 mx-auto'>
                            <p>HOW IT WORK</p>
                            <h2>Build your job-winning resume in three simple steps</h2>
                        </div>
                        <div className='mt-4 d-flex justify-content-around flex-wrap'>
                            <div data-aos="flip-left" data-aos-duration="1000" className={`col-5 col-md-3 ${style.card} border p-2 text-center text-white rounded-4  py-3 shadow-lg`}>
                                <div className={`${style.crdicon}  mx-auto rounded-circle text-white`}>
                                    <HiOutlineNewspaper className={` ${style.icon} fs-1 mt-2 `} />
                                </div>
                                <h5 className='mt-2 mb-3'>Step 1</h5>
                                <p>Choose one of our professionally designed resumes.</p>
                            </div>
                            <div data-aos='flip-left' data-aos-duration='2000' className={`col-5 col-md-3 ${style.card} border p-2 text-center text-white rounded-4  py-3 shadow-lg`}>
                                <div className={`${style.crdicon}  mx-auto rounded-circle text-white`}>
                                    <HiOutlineNewspaper className={` ${style.icon} fs-1 mt-2 `} />
                                </div>
                                <h5 className='mt-2 mb-3'>Step 2</h5>
                                <p>Fill in your details using our simple prompts.</p>
                            </div>
                            <div  data-aos='flip-left' data-aos-duration='3000' className={`col-5 col-md-3 mt-4 mt-md-0 ${style.card} border p-2 text-center text-white rounded-4  py-3 shadow-lg`}>
                                <div className={`${style.crdicon}  mx-auto rounded-circle text-white`}>
                                    <HiOutlineNewspaper className={` ${style.icon} fs-1 mt-2 `} />
                                </div>
                                <h5 className='mt-2 mb-3'>Step 3</h5>
                                <p>Download & start applying for jobs today</p>
                            </div>

                        </div>
                        <button onClick={openlink} className='btn text-white  px-3  col-md-2 col-4 mx-auto mt-5 mb-2  shadow-lg'>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
