import React from 'react'
import img from '../pics/img3.png'
import style from './about.module.css'

export default function About() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="d-md-flex justify-contnet-between align-items-center mb-5 " id='about'>
                        <div className="col-md-7 ">
                            <img src={img} style={{ width: '100%' }} />
                        </div>
                        <div className="col-md-5">
                            <h6 className='text-center'>ABout Us</h6>
                            <h2 className={`${style.about}`}>Elevate Your Career with Professional Resumes and Cover Letters!</h2>
                            <p>At "CVMaker"
                                we empower job seekers by providing expert-crafted resumes and cover letters that stand out. Our intuitive platform and personalized support help you showcase your unique skills and experiences effectively. With our guidance, you'll increase your chances of landing your dream job in today’s competitive market.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
