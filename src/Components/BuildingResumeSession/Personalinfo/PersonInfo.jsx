import React from 'react';
import style from './personalnfo.module.css'
import img from '../../pics/download.jpeg'
import { useNavigate } from 'react-router-dom';


export default function PersonInfo() {
  const navigate = useNavigate()
  const education =()=>{
    navigate('/makeResume/education')
  }
  return (
    <div className={`${style.personinfo} mt-5 px-3`}>
      <h1> What’s the best way for employers to contact you?</h1>
      <h4>We suggest including an email and phone number.</h4>
      <div className='d-flex justify-content-between mt-5'>
        <div className=' col-3'>
          <div className=" border border-3">
            <img src={img} style={{ width: '100%' }} />

          </div>
          <div className='border ' style={{ overflow: 'hidden' }}>
            <input type="file" />

          </div>
        </div>

        <div className='col-8'>
          <div className='d-flex justify-content-between'>
            <div className='col-5'>
              <h6>FirstName</h6>
              <input type="text" placeholder='Yousaf ...' className='py-2' style={{ width: '100%' }} />
            </div>
            <div className='col-5'>
              <h6>SurName</h6>
              <input type="text" placeholder='shafique ...' className='py-2' style={{ width: '100%' }} />
            </div>
          </div>

          <div className='d-flex justify-content-between mt-4'>
            <div className='col-5'>
              <h6>Address</h6>
              <input type="text" placeholder='30N Gould street Usa' className='py-2' style={{ width: '100%' }} />
            </div>
            <div className='col-5 d-flex justify-content-between'>
              <div className='col-5'>
                <h6>Postal Code</h6>
                <input type="number" placeholder='5930..' className='py-2' style={{ width: '100%' }} />
              </div>
              <div className='col-5'>
                <h6>Country</h6>
                <input type="text" placeholder='USA' className='py-2' style={{ width: '100%' }} />
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between mt-4'>
            <div className='col-5'>
              <h6>Number</h6>
              <input type="number" placeholder='+9237364543' className='py-2' style={{ width: '100%' }} />
            </div>
            <div className='col-5'>
              <h6>Email</h6>
              <input type="email" placeholder='yousafva9@gmail.com' className='py-2' style={{ width: '100%' }} />
            </div>
          </div>

          <div className={`mt-5 ${style.main} text-center `}>
            <button onClick={education} className='btn  px-3 shadow-lg'>
              Next: Education
            </button>
          </div>
        </div>






      </div>
    </div>
  )
}
