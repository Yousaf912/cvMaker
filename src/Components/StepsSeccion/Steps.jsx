import React from 'react';
import style from "./steps.module.css";
import { HiOutlineNewspaper } from "react-icons/hi2";

export default function Steps() {
    return (
        <div className='px-3'>
        <div className={`${style.main} mt-3 p-2 mb-5 pb-5`}>
            <div className="container">
                <div className="row">
                    <div className='col-5 text-white text-center  mt-5 mx-auto'>
                        <p>HOW IT WORK</p>
                        <h2>Build your job-winning resume in three simple steps</h2>
                    </div>
                    <div className='mt-4 d-flex justify-content-around'>
                        <div className={`col-3 ${style.card} border p-2 text-center text-white rounded-4  py-3 shadow-lg`}>
                            <div className={`${style.crdicon}  mx-auto rounded-circle text-white`}>
                                <HiOutlineNewspaper className={` ${style.icon} fs-1 mt-2 `} />
                            </div>
                            <h5 className='mt-2 mb-3'>Step 1</h5>
                            <p>Choose one of our professionally designed resumes.</p>
                        </div>
                        <div className={`col-3 ${style.card} border p-2 text-center text-white rounded-4  py-3 shadow-lg`}>
                            <div className={`${style.crdicon}  mx-auto rounded-circle text-white`}>
                                <HiOutlineNewspaper className={` ${style.icon} fs-1 mt-2 `} />
                            </div>
                            <h5 className='mt-2 mb-3'>Step 2</h5>
                            <p>Fill in your details using our simple prompts.</p>
                        </div>
                        <div className={`col-3 ${style.card} border p-2 text-center text-white rounded-4  py-3 shadow-lg`}>
                            <div className={`${style.crdicon}  mx-auto rounded-circle text-white`}>
                                <HiOutlineNewspaper className={` ${style.icon} fs-1 mt-2 `} />
                            </div>
                            <h5 className='mt-2 mb-3'>Step 3</h5>
                            <p>Download & start applying for jobs today</p>
                        </div>

                    </div>
                    <button className='btn text-white  px-3  col-2 mx-auto mt-5 shadow-lg'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
        </div>
    )
}
