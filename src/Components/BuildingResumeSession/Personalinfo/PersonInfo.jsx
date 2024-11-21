import React, { useState } from 'react';
import style from './personalnfo.module.css'
import img from '../../pics/download.jpeg'
import { useNavigate } from 'react-router-dom';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify"


export default function PersonInfo() {
  const [facebook, setfacebook] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [website, setWebsite] = useState(false);
  const id = sessionStorage.getItem('userid')
  const navigate = useNavigate()
 

  const [allfieldData, setAllFieldData] = useState({
    name: '',
    surname: '',
    address: '',
    postalcode: '',
    country: '',
    number: '',
    email: '',
    facebook: '',
    linkedin: '',
    website: ''
  });

  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAllFieldData({
      ...allfieldData,
      [name]: value
    })
  }

  const sendAllData = async () => {

    try {
      const updated = await fetch(`http://localhost:7000/personalinfo/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(allfieldData)
      })
      const data = await updated.json();
     if(data.acknowledged){
      navigate('/makeResume/education')
     }


    } catch (er) { throw er }
  }


  return (
    <div className={`${style.personinfo} mt-5 px-3 mb-5`}>
      <ToastContainer />
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
              <input onChange={getData} name='name' type="text" placeholder='Yousaf ...' className='py-2' style={{ width: '100%' }} />
            </div>
            <div className='col-5'>
              <h6>SurName</h6>
              <input onChange={getData} name='surname' type="text" placeholder='shafique ...' className='py-2' style={{ width: '100%' }} />
            </div>
          </div>

          <div className='d-flex justify-content-between mt-4'>
            <div className='col-5'>
              <h6>Address</h6>
              <input onChange={getData} name='address' type="text" placeholder='30N Gould street Usa' className='py-2' style={{ width: '100%' }} />
            </div>
            <div className='col-5 d-flex justify-content-between'>
              <div className='col-5'>
                <h6>Postal Code</h6>
                <input onChange={getData} name='postalcode' type="number" placeholder='5930..' className='py-2' style={{ width: '100%' }} />
              </div>
              <div className='col-5'>
                <h6>Country</h6>
                <input onChange={getData} name='country' type="text" placeholder='USA' className='py-2' style={{ width: '100%' }} />
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between mt-4 flex-wrap'>
            <div className='col-5'>
              <h6>Number</h6>
              <input onChange={getData} name='number' type="number" placeholder='+9237364543' className='py-2' style={{ width: '100%' }} />
            </div>
            <div className='col-5'>
              <h6>Email</h6>
              <input onChange={getData} name='email' type="email" placeholder='yousafva9@gmail.com' className='py-2' style={{ width: '100%' }} />
            </div>
            {facebook && <div className='col-5 mt-2'>
              <div>
                <div className='d-flex justify-content-between'>
                  <h6>Facebook</h6>
                  <MdOutlineDeleteOutline style={{ cursor: 'pointer' }} onClick={() => setfacebook(false)} className='text-danger fs-3 ' />
                </div>
              </div>
              <input onChange={getData} name='facebook' type="text" placeholder='https://facebook' className='py-2' style={{ width: '100%' }} />
            </div>}

            {linkedin && <div className='col-5 mt-2'>
              <div className='d-flex justify-content-between'>
                <h6>LinkedIn</h6>
                <MdOutlineDeleteOutline style={{ cursor: 'pointer' }} onClick={() => setLinkedin(false)} className='text-danger fs-3 ' />
              </div>
              <input onChange={getData} name='linkedin' type="text" placeholder='https://yousaf' className='py-2' style={{ width: '100%' }} />
            </div>}

            {website && <div className='col-5 mt-2'>
              <div className='d-flex justify-content-between'>
                <h6>Website</h6>
                <MdOutlineDeleteOutline style={{ cursor: 'pointer' }} onClick={() => setWebsite(false)} className='text-danger fs-3 ' />
              </div>
              <input onChange={getData} name='website' type="text" placeholder='www.yousafva.com' className='py-2' style={{ width: '100%' }} />
            </div>}

          </div>


          <div className='mt-3'>
            <p className='text-primary'>Optionals</p>
            <div className='mt-2 d-flex justify-content-between'>
              {!facebook && <div onClick={() => setfacebook(true)} className='border col-3 py-2 bg-primary text-white rounded-5  btn '>+ facebook</div>}
              {!linkedin && <div onClick={() => { setLinkedin(true) }} className='border col-3 py-2 bg-primary text-white rounded-5  btn '>+ linkdin</div>}
              {!website && <div onClick={() => setWebsite(true)} className='border col-3 py-2 bg-primary text-white rounded-5  btn '>+ website</div>}

            </div>
          </div>

          <div className={`mt-5 ${style.main} text-center `}>
            <button onClick={sendAllData} className='btn  px-3 shadow-lg'>
              Next: Education
            </button>
          </div>



        </div>





      </div>
    </div>
  )
}
