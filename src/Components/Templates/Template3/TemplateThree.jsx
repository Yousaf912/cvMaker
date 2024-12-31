import { useSelector } from 'react-redux'
import ZoomInOut from '../../ZoomInOut/ZomInOut'
import style from './TemplateThree.module.css'
import React, { useEffect, useState } from 'react'
import img from '../../pics/me.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { FaFacebook, FaLinkedin } from "react-icons/fa";



export default function TempleteThree() {
    const [alldata, setAllData] = useState()
    const zoomvalue = useSelector((state) => {
        return state.zoom.zoomlevel
    });

    const userdata = useSelector((state) => state.userData.data.userdata);
    useEffect(() => {
        if (userdata != undefined) {
            setAllData(userdata)
        }
    }, [])

    



    return (
        <div className='container' >
            {alldata != undefined &&
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
                                        <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>{alldata.personalinfo[0].number}
                                        </p>
                                    </div>
                                    <div className={` mt-3 d-flex`}><IoMdMailOpen className={`${style.icon} fs-4 me-3`} />
                                        <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>{alldata.personalinfo[0].email}
                                        </p>
                                    </div>
                                    <div className={` mt-3 d-flex`}><IoLocationOutline className={`${style.icon} fs-4 me-3`} />
                                        <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>{alldata.personalinfo[0].address}
                                        </p>
                                    </div>
                                </div>
                                {alldata.personalinfo[0].website &&
                                    <div className={` mt-3 d-flex`}><TbWorldWww className={`${style.icon} fs-4 me-3`} />
                                        <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>{alldata.personalinfo[0].website}                                  </p>
                                    </div>}
                                {alldata.personalinfo[0].facebook &&
                                    <div className={` mt-3 d-flex`}><FaFacebook className={`${style.icon} fs-4 me-3`} />
                                        <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>{alldata.personalinfo[0].facebook}                                  </p>
                                    </div>}
                                {alldata.personalinfo[0].linkedin &&
                                    <div className={` mt-3 d-flex`}><FaLinkedin className={`${style.icon} fs-4 me-3`} />
                                        <p className='ps-2' style={{ borderLeft: "2px solid #8a5b04" }}>{alldata.personalinfo[0].linkedin}                                  </p>
                                    </div>}

                                {/* --------------------------------------- education --------------------------------------- */}

                                <div className='ps-3 mt-2 pe-4'>

                                    <h4>Education</h4>
                                    {alldata.education.map((val, i) => {
                                        return (

                                            <div key={i} className='mt-4 '>
                                                <div className='d-flex'>
                                                    <div className={`${style.dot} mt-1 rounded-circle me-3`}></div>
                                                    <h6>{val.name}</h6>
                                                </div>

                                                <p>{val.startdate} - {val.enddate} <br /> {val.instituteName}</p>

                                            </div>
                                        )
                                    })}


                                </div>

                                {/* ---------------------------------------- language ----------------------------------------- */}

                                <div>
                                    <h4>Job Experience</h4>
                                    {alldata.experience.map((val, i) => {
                                        return (
                                            <div key={i}>
                                                <div  className='d-flex  align-items-center'>
                                                    <div className={`${style.dot} me-3 rounded`}></div>
                                                    <h4>{val.title}</h4>
                                                </div>
                                                <div className='ms-3'>
                                                    {val.startingDate} - {val.endDate}
                                                    <p>Address:{val.address}</p>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>




                            </div>


                            {/* ------------------------------------------------------about--------------- */}
                            <div className={`${style.secdiv} col-9 ps-5 py-4`}>
                                <div className=' ms-5 ps-5 '>
                                    <h1 >{alldata.personalinfo[0].name} {alldata.personalinfo[0].surname}</h1>
                                    <p>{alldata.personalinfo[0].description}.</p>
                                </div>


                            </div>

                            {/* -------------------------------------------------------------------------- */}
                            <div className={`${style.data} ps-3`}>
                                <div>
                                    <h4>Discription</h4>
                                    <p>lorem</p>
                                </div>


                                {/* -----------------------------------Skills --------------------------------- */}
                                <div>
                                    <h4>Skills</h4>
                                    {alldata.skills.map((val, i) => {
                                        return (

                                            <div key={i} className='d-flex '>
                                                <div>
                                                    <div className={`${style.dot} rounded`}></div>
                                                    <div className=' ms-1 ' style={{ height: '25px ', borderLeftColor: '#8a5b04', borderLeft: '2px solid #8a5b04' }}></div>
                                                </div>
                                                <div className='ms-3'>
                                                    <h4>{val.title}</h4>
                                                    <h6>Rate: {val.rate}</h6>
                                                    <p>{val.description}</p>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>





                            </div>
                        </div>

                    </div>
                </div>}
            <div className={`${style.zoomdiv}  `}>
                <ZoomInOut />
            </div>
        </div>
    )
}