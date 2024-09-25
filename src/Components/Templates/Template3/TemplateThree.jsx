import { useSelector } from 'react-redux'
import ZoomInOut from '../../ZoomInOut/ZomInOut'
import style from './TemplateThree.module.css'
import React from 'react'
import img from '../../pics/me.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";




export default function TempleteThree() {
    const zoomvalue = useSelector((state) => {
        return state.zoom.zoomlevel
    })
    return (
        <div className='container' >
            <div className="row" style={{ overflow: 'hidden' }}>
                <div className={` mb-5  mt-3 `} style={{ transform: `scale(${zoomvalue})`, transformOrigin: 'top' }}>
                    <div className={`border mx-auto ${style.main}  d-flex `}>
                        <div className="col-5 ps-4" style={{ backgroundColor: '#dbc08c' }}  >
                            <div className={` ${style.imgdiv} col-3 `}>
                                <img src={img} className='border  border-5 rounded-circle border-white' style={{ width: "100%" }} />
                            </div>
                            <div className={`${style.emptydiv}`}>
                            </div>

                            <div className=''>
                                <h4>Contact</h4>
                                <div className={` mt-3 d-flex`}><FaPhoneVolume className={`${style.icon} fs-4 me-3`} />
                                    <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>+9230937645
                                    </p>
                                </div>
                                <div className={` mt-3 d-flex`}><IoMdMailOpen className={`${style.icon} fs-4 me-3`} />
                                    <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>yousafva9@gmail.com
                                    </p>
                                </div>
                                <div className={` mt-3 d-flex`}><TbWorldWww className={`${style.icon} fs-4 me-3`} />
                                    <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>yousaf-eight.vercel.app                                    </p>
                                </div>
                                <div className={` mt-3 d-flex`}><IoLocationOutline className={`${style.icon} fs-4 me-3`} />
                                    <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>30N gould street Wyoming USA
                                    </p>
                                </div>
                            </div>

                            {/* --------------------------------------- education --------------------------------------- */}

                            <div className='ps-3 mt-2 pe-4'>

                                <h4>Education</h4>

                                <div className='mt-4 '>
                                    <div className='d-flex'>
                                        <div className={`${style.dot} mt-1 rounded-circle me-3`}></div>
                                        <h6>Bachlor In Computer science</h6>
                                    </div>

                                    <p>20/02/2034 - 18/08/2024 <br /> karachi university of paskitan</p>

                                </div>
                                <div className='mt-4 '>
                                    <div className='d-flex'>
                                        <div className={`${style.dot} mt-1 rounded-circle me-3`}></div>
                                        <h6>Bachlor In Computer science</h6>
                                    </div>

                                    <p>20/02/2034 - 18/08/2024 <br /> karachi university of paskitan</p>

                                </div>
                                <div className='mt-4'>
                                    <div className='d-flex'>
                                        <div className={`${style.dot} mt-1 rounded-circle me-3`}></div>
                                        <h6>Bachlor In Computer science</h6>
                                    </div>

                                    <p>20/02/2034 - 18/08/2024 <br /> karachi university of paskitan</p>

                                </div>


                            </div>

                            {/* ---------------------------------------- language ----------------------------------------- */}

                            <div>
                                <h4>Languages</h4>
                                <div className='mt-3'>

                                    <div className='ps-3 pe-4'>

                                        <div className='mt-3 d-flex  align-items-center '>
                                            <div className={`${style.dot} rounded-circle me-3`}></div>
                                            <h6>Web Developemt</h6>
                                        </div>
                                        <div className='mt-3 d-flex  align-items-center '>
                                            <div className={`${style.dot} rounded-circle me-3`}></div>
                                            <h6>Mern STackDevelopment</h6>
                                        </div>
                                        <div className='mt-3 d-flex  align-items-center '>
                                            <div className={`${style.dot} rounded-circle me-3`}></div>
                                            <h6>Web Developemt</h6>
                                        </div>
                                        <div className='mt-3 d-flex  align-items-center '>
                                            <div className={`${style.dot} rounded-circle me-3`}></div>
                                            <h6>Web Developemt</h6>
                                        </div>

                                    </div>
                                </div>

                            </div>



                        </div>
                        <div className={`${style.secdiv} col-9 ps-5 py-4`}>
                            <div className=' ms-5 ps-5 '>
                                <h1 >Muhammad Yousaf</h1>
                                <h5>Mern Stack Developer</h5>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt deserunt minima nihil nulla. Tenetur, nam eius consectetur alias quas itaque cum ratione deleniti, non ut sunt aliquam deserunt nostrum voluptate.</p>
                            </div>


                        </div>

                        <div className={`${style.data} ps-3`}>
                            <div>
                                <h4>Discription</h4>
                                <p>lorem</p>
                            </div>
                            <div>
                                <h4>Skills</h4>
                                <div className='d-flex '>
                                    <div>
                                        <div className={`${style.dot} rounded`}></div>
                                        <div className=' ms-1 ' style={{ height: '25px ', borderLeftColor: '#8a5b04', borderLeft: '2px solid #8a5b04' }}></div>
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Frontend Developer</h4>
                                        30/06/2021 - 25/07/2024
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, laborum lorem10 jjjjcx</p>
                                    </div>
                                </div>
                                <div className='d-flex '>
                                    <div>
                                        <div className={`${style.dot} rounded`}></div>
                                        <div className=' ms-1 ' style={{ height: '25px ', borderLeftColor: '#8a5b04', borderLeft: '2px solid #8a5b04' }}></div>
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Frontend Developer</h4>
                                        30/06/2021 - 25/07/2024
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, laborum lorem10 jjjjcx</p>
                                    </div>
                                </div>
                                <div className='d-flex '>
                                    <div>
                                        <div className={`${style.dot} rounded`}></div>
                                        <div className=' ms-1 ' style={{ height: '25px ', borderLeftColor: '#8a5b04', borderLeft: '2px solid #8a5b04' }}></div>
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Frontend Developer</h4>
                                        30/06/2021 - 25/07/2024
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, laborum lorem10 jjjjcx</p>
                                    </div>
                                </div>
                                <div className='d-flex '>
                                    <div>
                                        <div className={`${style.dot} rounded`}></div>
                                        <div className=' ms-1 ' style={{ height: '25px ', borderLeftColor: '#8a5b04', borderLeft: '2px solid #8a5b04' }}></div>
                                    </div>
                                    <div className='ms-3'>
                                        <h4>Frontend Developer</h4>
                                        30/06/2021 - 25/07/2024
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, laborum lorem10 jjjjcx</p>
                                    </div>
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