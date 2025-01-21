import { useSelector } from 'react-redux'
import ZoomInOut from '../../ZoomInOut/ZomInOut'
import style from './templateone.module.css'
import React, { useEffect, useState } from 'react'
import img from '../../pics/me.png'
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { PdfDownload } from '../DownloadFunction'




export default function TempleteOne() {
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

    const pdfdownload = (name) => {

        PdfDownload('divtodownload', name)
    }

    console.log(alldata);
    
 


    return (
        <div className='container' >
            {alldata != undefined && <>
                <div className="row" style={{ overflow: 'hidden' }}>
                    <div className={` mb-5  mt-3 `} style={{ transform: `scale(${zoomvalue})`, transformOrigin: 'top' }}>
                        <div id='divtodownload' className={` mx-auto ${style.main}  d-flex`}>
                            <div className='col-5'>
                                <div className={`${style.box} col-2 p-5`}>
                                </div>
                                <div className={`${style.imgdiv}  col-3 bg-white rounded-circle`}>
                                    <img src={alldata.personalinfo[0].img} className=' border border-2 border-black rounded-circle' style={{ width: '100%', height: '100%' }} />
                                </div>
                                <div className='mt-5 text-center'>
                                    <h3 >About Me </h3>
                                    <p>{alldata.personalinfo[0].description}</p>
                                </div>

                                <div className='ps-3 pe-4'>
                                    <div className='border  text-white ps-3  mt-5 ' style={{ backgroundColor: '#27384c' }}>
                                        <h4>Contact</h4>
                                    </div>
                                    <div className='mt-3 d-flex  '>
                                        <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                            <FaPhoneVolume className=' fs-4 mt-2' />
                                        </div>
                                        <p className='mt-1'>{alldata.personalinfo[0].number}</p>
                                    </div>
                                    <div className='mt-2 d-flex  '>
                                        <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                            <IoMdMailOpen className=' fs-4 mt-2' />
                                        </div>
                                        <p className='mt-1'>{alldata.personalinfo[0].email}</p>
                                    </div>

                                    <div className='mt-2 d-flex  '>
                                        <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                            <IoLocationOutline className=' fs-4 mt-2' />
                                        </div>
                                        <p className='mt-1'>{alldata.personalinfo[0].address} {alldata.personalinfo[0].country} {alldata.personalinfo[0].postalcode} </p>
                                    </div>
                                    {alldata.personalinfo[0].website &&
                                        <div className='mt-2 d-flex  '>
                                            <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                                <TbWorldWww className=' fs-4 mt-2' />
                                            </div>
                                            <p className='mt-1'>{alldata.personalinfo[0].website}</p>
                                        </div>}
                                    {alldata.personalinfo[0].linkedin &&
                                        <div className='mt-2 d-flex  '>
                                            <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                                <FaLinkedin className=' fs-4 mt-2' />
                                            </div>
                                            <p className='mt-1'>{alldata.personalinfo[0].linkedin}</p>
                                        </div>}
                                    {alldata.personalinfo[0].facebook &&
                                        <div className='mt-2 d-flex  '>
                                            <div className={` ${style.icondiv} rounded-circle text-center me-3`}>
                                                <FaFacebookSquare className=' fs-4 mt-2' />
                                            </div>
                                            <p className='mt-1'>{alldata.personalinfo[0].facebook}</p>
                                        </div>}

                                </div>

                                {/* ----------------------------------- education --------------------------------------- */}
                                <div className='ps-3 pe-4'>
                                    <div className='border  text-white ps-3  mt-3 ' style={{ backgroundColor: '#27384c' }}>
                                        <h4>Education</h4>
                                    </div>
                                    {alldata.education.map((val, i) =>

                                        <div key={i} className='mt-2'>
                                            <li className='fw-bold'>
                                                {val.name}
                                            </li>
                                            <div className='mb-1 mt-1'>
                                                {val.startdate}
                                                <span> - </span>
                                                {val.enddate}
                                            </div>
                                            <h6>{val.instituteName}</h6>
                                        </div>
                                    )}

                                </div>





                            </div>

                            {/* -------------------------------------  */}

                            <div className={`${style.scle} col-7  pt-2`}>
                                <h1 className='name'>{alldata.personalinfo[0].name} {alldata.personalinfo[0].surname}</h1>

                                <div>
                                    <div className='border col-8 text-white ps-3 mt-2 ' style={{ backgroundColor: '#27384c' }}>
                                        <h4>Description</h4>

                                    </div>
                                    <p className='col-11 mt-3'>
                                        {alldata.personalinfo[0].secdescription }

                                    </p>
                                </div>

                                {/* ------------------------------Skills ------------------------------------ */}
                                <div>
                                    <div className='border col-8 text-white ps-3  mt-1 ' style={{ backgroundColor: '#27384c' }}>
                                        <h4>Skills</h4>
                                    </div>

                                    {alldata.skills.map((val, i) =>
                                        <div key={i}>
                                            <div className='mt-3 d-flex  align-items-center '>
                                                <div className={`${style.dot} rounded-circle me-3`}></div>
                                                <h5>{val.title}</h5>
                                            </div>
                                            <div className='d-flex'>
                                                <div className="progress col-8 me-4" role="progressbar" aria-label="Info example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                    <div className="progress-bar" style={{ width: `${val.rate}`, backgroundColor: '#27384c' }}>{val.rate}</div>
                                                </div>
                                                <h6>{val.rate}</h6>
                                            </div>
                                            <p>{val.description}</p>

                                        </div>
                                    )}

                                </div>


                                {/* ------------------------------ Experience ------------------------------ */}


                                <div className='mt-2 col-8 '>
                                    <div className='border  text-white ps-3  mt-3 ' style={{ backgroundColor: '#27384c' }}>
                                        <h4>Experience</h4>
                                    </div>
                                    {alldata.experience.map((val, i) =>
                                        <div key={i}>

                                            <div className='mt-1  '>
                                                <div className='d-flex align-items-center '>
                                                    <div className={`${style.dot} rounded-circle me-3`}></div>
                                                    <h5>{val.title}</h5>
                                                </div>
                                                <h6>office : {val.office} </h6>
                                                <h6>Address : {val.address} </h6>
                                                <div className='d-flex justify-content-evenly '>

                                                    <p>{`${val.startingDate} `}</p>
                                                    <h6>to</h6>
                                                    <p>{`${val.startingDate} `}</p>

                                                </div>
                                            </div>
                                        </div>)}

                                </div>

                            </div>

                        </div>
                        <button onClick={() => pdfdownload(alldata.personalinfo[0].name)}>download</button>

                    </div>
                </div>
                <div className={`${style.zoomdiv}  `}>
                    <ZoomInOut />
                </div>

            </>

            }
        </div>
    )
}
