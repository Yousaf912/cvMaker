import { useSelector } from 'react-redux'
import ZoomInOut from '../../ZoomInOut/ZomInOut'
import style from './TemplateTwo.module.css'
import React from 'react'
import img from '../../pics/me.png'
// import { FaPhoneVolume } from "react-icons/fa6";
// import { IoMdMailOpen } from "react-icons/io";
// import { IoLocationOutline } from "react-icons/io5";
// import { TbWorldWww } from "react-icons/tb";




export default function TempleteOne() {
    const zoomvalue = useSelector((state) => {
        return state.zoom.zoomlevel
    })
    return (
        <div className='container' >
            <div className="row" style={{ overflow: 'hidden' }}>
                <div className={` mb-5  mt-3 `} style={{ transform: `scale(${zoomvalue})`, transformOrigin: 'top' }}>
                    <div className={`border mx-auto ${style.main}  d-flex`}>
                      



                    </div>

                </div>
            </div>
            <div className={`${style.zoomdiv}  `}>
                <ZoomInOut />
            </div>
        </div>
    )
}

