import React from 'react'
import Navbar from '../../Navbar/Navbar';
import style from './firstpage.module.css'
import img from '../../pics/img2.png'
import { useNavigate } from 'react-router-dom';
export default function Firstpage() {
    const navigate = useNavigate();  const getstart = () => { navigate('/makeResume/personalinfo') }
    return (
        <div>
            <Navbar />
            <div className={`container ${style.main}  mt-5 pb-3 `}>
                <div className="row">
                    <div className='mt-5 d-flex justify-content-between align-items-center'>
                        <div className="col-5">
                            <h1 className='text-center'>Just three simple steps</h1>
                            <div className='d-flex  mt-5  '>
                                <div className={`${style.dot} col-1 me-4  rounded-circle fs-4  text-white`}>1</div>
                                <h5>Select a template from our library of professional designs</h5>

                            </div>
                            <div className='d-flex  mt-5  '>
                                <div className={`${style.dot} col-1 me-4  rounded-circle fs-4  text-white`}>2</div>
                                <h5> Build your resume with our industry-specific bullet points</h5>

                            </div>
                            <div className='d-flex  mt-5 '>
                                <div className={`${style.dot} col-1 me-4  rounded-circle fs-4  text-white`}>3</div>
                                <h5> Customize the details and wrap it up. You’re ready to send!</h5>

                            </div>
                        </div>
                        <div className="col-5">
                            <img src={img} />
                            <div className='mt-3 text-center'>
                                <button onClick={getstart} className='btn  px-3 shadow-lg'>
                                    Get Started                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
