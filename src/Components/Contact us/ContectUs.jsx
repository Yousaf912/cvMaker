import React from 'react'
import img from '../pics/bg.jpeg'
import style from "./contactus.module.css"
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";
import Footer from '../Footer/Footer';




export default function ContectUs() {
    return (
        <div className='position-relative' >
            <div className={`${style.picdiv} position-relative mb-5`}>
                <img src={img} />
                <div className={`${style.bgdiv}`}></div>
            </div>

            <div className={` ${style.contactinfo} position-absolute `} id='contact'>
                <div className="container">
                    <div className="row text-white">
                        <div className={`${style.centerdiv} rounded-4 p-3 mb-5 shadow-lg `}>
                            <h1 className='text-center mt-2'>Contact Us</h1>
                            <div className='d-md-flex justify-content-between align-items-center' >

                                <div className="col-md-5">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="name" className="form-label">Name</label>
                                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPassword1" className="form-label">Email Adress</label>
                                            <input type="email" className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div>
                                            <textarea name="" placeholder='enter your question....' rows={8} id=""></textarea>
                                        </div>
                                        <div className='text-center'>
                                            <button type="submit" className="btn btn-primary mt-3 ">Submit</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-md-5">
                                    <div className='d-flex '>
                                        <HiOutlineMailOpen className='fs-1' />
                                        <a className={`${style.mail} mt-2 ms-4 `} href="mailto:yousafva9@gmail.com">yousafva9@gmail.com</a>
                                    </div>
                                
                                    <div className='d-flex mt-3 '>
                                        <FaPhoneAlt className='fs-1' />
                                        <p className={`${style.mail} mt-2 ms-4 `}>+9230768646428</p>
                                    </div>
                                    <div className='d-flex mt-3 '>
                                        < IoLocation className='fs-1' />
                                        <p className={`${style.mail} mt-2 ms-4 `}>30N Gould Street, New York ,USA</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        < TbWorldWww  className='fs-1' />
                                        <a target='_blank' className={`${style.mail} mt-2 ms-4 `} href="https://yousaf-eight.vercel.app/">yousaf-eight.vercel.app</a>
                                    </div>
                                    <div className='d-flex mt-3'>
                                        <  FaLinkedin className='fs-1' />
                                        <a target='_blank' className={`${style.mail} mt-2 ms-4 `} href="https://www.linkedin.com/in/muhammad-yousaf-a6513a31b/">Muhammad Yousaf</a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
          

        </div>
    )
}
