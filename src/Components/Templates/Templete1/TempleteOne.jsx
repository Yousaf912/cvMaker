import { useSelector } from 'react-redux'
import ZoomInOut from '../../ZoomInOut/ZomInOut'
import style from './templateone.module.css'
import React from 'react'
import img from '../../pics/me.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";




export default function TempleteOne() {
    const zoomvalue = useSelector((state) => {
        return state.zoom.zoomlevel
    })
    return (
        <div className='container' >
            <div className="row" style={{ overflow: 'hidden' }}>
                <div className={` mb-5  mt-3 `} style={{ transform: `scale(${zoomvalue})`, transformOrigin: 'top' }}>
                    <div className={`border mx-auto ${style.main}  d-flex`}>
                        <div className='col-5'>
                            <div className={`${style.box} col-2 p-5`}>
                            </div>
                            <div className={`${style.imgdiv}  col-3 bg-white rounded-circle`}>
                                <img src={img} className=' border border-2 border-black rounded-circle' style={{ width: '100%', height: '100%' }} />
                            </div>
                            <div className='mt-5 text-center'>
                                <h3 >About Me </h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nesciunt </p>
                            </div>

                            <div className='ps-3 pe-4'>
                                <div className='border  text-white ps-3  mt-5 ' style={{ backgroundColor: '#27384c' }}>
                                    <h4>Contact</h4>
                                </div>
                                <div className='mt-3 d-flex  '>
                                    <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                        <FaPhoneVolume className=' fs-4 mt-2' />
                                    </div>
                                    <p className='mt-1'>+9201828129821</p>
                                </div>
                                <div className='mt-2 d-flex  '>
                                    <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                        <IoMdMailOpen className=' fs-4 mt-2' />
                                    </div>
                                    <p className='mt-1'>yousaf@gmail.com</p>
                                </div>
                                <div className='mt-2 d-flex  '>
                                    <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                        <TbWorldWww className=' fs-4 mt-2' />
                                    </div>
                                    <p className='mt-1'>yousaf-eight.vercel.app</p>
                                </div>
                                <div className='mt-2 d-flex  '>
                                    <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                        <IoLocationOutline className=' fs-4 mt-2' />
                                    </div>
                                    <p className='mt-1'>30N gould street ,wyoming USA florida </p>
                                </div>

                            </div>

                            <div className='ps-3 pe-4'>
                                <div className='border  text-white ps-3  mt-3 ' style={{ backgroundColor: '#27384c' }}>
                                    <h4>Education</h4>
                                </div>
                                <div className='mt-2'>
                                    <li className='fw-bold'>
                                        Bachlors of Computer science
                                    </li>
                                    <div className='mb-1 mt-1'>
                                        12/03/2024
                                        <span> - </span>
                                        12/03/2024
                                    </div>
                                    <h6>karachi university of pakistan</h6>
                                </div>
                                <div className='mt-4'>
                                    <li className='fw-bold'>
                                        Bachlors of Computer science
                                    </li>
                                    <div className='mb-1 mt-1'>
                                        12/03/2024
                                        <span> - </span>
                                        12/03/2024
                                    </div>
                                    <h6>karachi university of pakistan</h6>
                                </div>
                                <div className='mt-4'>
                                    <li className='fw-bold'>
                                        Bachlors of Computer science
                                    </li>
                                    <div className='mb-1 mt-1'>
                                        12/03/2024
                                        <span> - </span>
                                        12/03/2024
                                    </div>
                                    <h6>karachi university of pakistan</h6>
                                </div>
                            </div>

                            {/* -------------------skills ---------------------------- */}
                            <div className='ps-3 pe-4'>
                                <div className='border  text-white ps-3  mt-3 ' style={{ backgroundColor: '#27384c' }}>
                                    <h4>Skills</h4>
                                </div>
                                <div className='mt-3 d-flex  align-items-center '>
                                    <div className={`${style.dot} rounded-circle me-3`}></div>
                                    <h5>Web Developemt</h5>
                                </div>
                                <div className='mt-3 d-flex  align-items-center '>
                                    <div className={`${style.dot} rounded-circle me-3`}></div>
                                    <h5>Mern STackDevelopment</h5>
                                </div>
                                <div className='mt-3 d-flex  align-items-center '>
                                    <div className={`${style.dot} rounded-circle me-3`}></div>
                                    <h5>Web Developemt</h5>
                                </div>
                                <div className='mt-3 d-flex  align-items-center '>
                                    <div className={`${style.dot} rounded-circle me-3`}></div>
                                    <h5>Web Developemt</h5>
                                </div>

                            </div>

                            {/* -------------language ------------------------- */}

                           



                        </div>

                        <div className='col-7  pt-5 mt-5'>
                            <h1 className='name'>Muhammad Yousaf</h1>
                            <h6>Mern stack developer</h6>
                            <div>
                                <div className='border col-8 text-white ps-3  mt-5 ' style={{ backgroundColor: '#27384c' }}>
                                    <h4>Description</h4>
                                </div>
                                <p className='col-11 mt-3'>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, asperiores enim rerum, recusandae unde soluta aperiam magnam quasi quae nam dolor, culpa reprehenderit est. Quos saepe voluptate dicta vero voluptates.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatem perspiciatis officia id blanditiis impedit molestiae, nam obcaecati explicabo repudiandae a quasi eius optio doloribus amet nobis consequatur possimus suscipit.</p>
                            </div>

                            <div>
                                <div className='border col-8 text-white ps-3  mt-5 ' style={{ backgroundColor: '#27384c' }}>
                                    <h4>Experience</h4>
                                </div>

                                <div>
                                    <div className='mt-3 d-flex  align-items-center '>
                                        <div className={`${style.dot} rounded-circle me-3`}></div>
                                        <h5>Web Developemt</h5>
                                    </div>
                                    <div className='d-flex'>
                                        <div className="progress col-8 me-4" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar" style={{ width: `50%`, backgroundColor: '#27384c' }}>50%</div>
                                        </div>
                                        <h6>50%</h6>
                                    </div>

                                </div>

                                <div>
                                    <div className='mt-3 d-flex  align-items-center '>
                                        <div className={`${style.dot} rounded-circle me-3`}></div>
                                        <h5>Web Developemt</h5>
                                    </div>
                                    <div className='d-flex'>
                                        <div className="progress col-8 me-4" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar" style={{ width: `50%`, backgroundColor: '#27384c' }}>50%</div>
                                        </div>
                                        <h6>50%</h6>
                                    </div>

                                </div>

                                <div>
                                    <div className='mt-3 d-flex  align-items-center '>
                                        <div className={`${style.dot} rounded-circle me-3`}></div>
                                        <h5>Web Developemt</h5>
                                    </div>
                                    <div className='d-flex'>
                                        <div className="progress col-8 me-4" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar" style={{ width: `50%`, backgroundColor: '#27384c' }}>50%</div>
                                        </div>
                                        <h6>50%</h6>
                                    </div>

                                </div>

                            </div>

                            <div className='mt-5 col-8 pe-4'>
                                <div className='border  text-white ps-3  mt-3 ' style={{ backgroundColor: '#27384c' }}>
                                    <h4>Languages</h4>
                                </div>
                                <div className='mt-3 d-flex  align-items-center '>
                                    <div className={`${style.dot} rounded-circle me-3`}></div>
                                    <h5>Urdu</h5>
                                </div>
                                <div className='mt-3 d-flex  align-items-center '>
                                    <div className={`${style.dot} rounded-circle me-3`}></div>
                                    <h5>English</h5>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className={`${style.zoomdiv}  `}>
                <ZoomInOut />
            </div>
        </div>
    )
}
