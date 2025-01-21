import React, { useEffect, useRef, useState } from 'react';
import style from './personalnfo.module.css'
import img1 from '../../pics/download.jpeg'
import { useNavigate } from 'react-router-dom';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify"
import { useDispatch, useSelector } from 'react-redux';
import { setSpinner } from '../../ReduxStore/Spinner';
import { uploadImage } from '../../../firebasefunction';





export default function PersonInfo() {
  const [facebook, setfacebook] = useState(false);
  const [linkedin, setLinkedin] = useState(false);
  const [website, setWebsite] = useState(false);
  const [erros, seterros] = useState({})
  const id = localStorage.getItem('userid')
  const navigate = useNavigate()
  const url = import.meta.env.VITE_FETCHING_URL;
  const [imege, setimg] = useState()
  const dispatch = useDispatch();

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
    website: '',
    description: '',
    secdescription: '',
    img: ''
  });


  useEffect(() => {
    const getalldata = async () => {
      try {
        await fetch(`${url}/userdata/${id}`)
          .then(async (res) => {
            const fnal = await res.json();
            const dt = fnal.userdata.personalinfo[0];
            if (fnal.userdata.personalinfo.length != 0) {
              setimg(dt.img)
              setAllFieldData({
                name: dt.name,
                surname: dt.surname,
                address: dt.address,
                postalcode: dt.postalcode,
                country: dt.country,
                number: dt.number,
                email: dt.email,
                facebook: dt.facebook,
                linkedin: dt.linkedin,
                website: dt.website,
                description: dt.description,
                secdescription: dt.secdescription,
              })
            }


          })

      } catch (er) {
        console.log(er);
      }

    }
    getalldata()

  }, []);





  const getData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAllFieldData({
      ...allfieldData,
      [name]: value
    })
  }



  const sendAllData = async () => {
    dispatch(setSpinner(true));
    const newdata = await { ...allfieldData, img: imege }
  
    setTimeout(async () => {
      try {
        const updated = await fetch(`${url}/addpersonalinfo/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newdata)
        })
        const data = await updated.json();
        console.log(data);
        if (data.message == 'Validation failed') {
          dispatch(setSpinner(false));
          seterros(data.errors)
        }
        if (data.message == 'Added') {
          dispatch(setSpinner(false));
          navigate('/makeResume/education')
        }


      } catch (er) { throw er }
    }, 1000);


  }
  const getimg = async (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(setSpinner(true));
      const imgurl = await uploadImage(file, id);
      if (imgurl) {
        console.log(imgurl);
        dispatch(setSpinner(false));
      }

      setimg(imgurl);

    }
  }



  return (

    <div className={`${style.personinfo} position-relative mt-5 px-3 mb-5`}>
      <ToastContainer />
      <h1> What’s the best way for employers to contact you?</h1>
      <h4>We suggest including an email and phone number.</h4>
      <div className='d-md-flex justify-content-between mt-5'>
        <div className=' col-md-3 col-8'>
          <div className=" border border-3">
            {imege ?
              <img src={imege} style={{ width: '100%' }} /> :
              <img src={img1} style={{ width: '100%' }} />
            }
          </div>
            {erros.img && <p className='text-danger'>*{erros.img.message  }</p>}
          <div className='border ' style={{ overflow: 'hidden' }}>
            <input type="file" onChange={getimg} />

          </div>
        </div>

        <div className='col-md-8'>
          <div className='d-md-flex justify-content-between'>
            <div className='col-md-5'>
              <h6>FirstName</h6>
              <input value={allfieldData.name} onChange={getData} name='name' type="text" placeholder='Yousaf ...' className='py-2' style={{ width: '100%' }} />
              {erros.name && <p className='text-danger'>*{erros.name.message}</p>}
            </div>
            <div className='col-md-5'>
              <h6>SurName</h6>
              <input value={allfieldData.surname} onChange={getData} name='surname' type="text" placeholder='shafique ...' className='py-2' style={{ width: '100%' }} />
              {erros.surname && <p className='text-danger'>*{erros.surname.message}</p>}
            </div>
          </div>

          <div className='d-md-flex justify-content-between mt-4'>
            <div className='col-md-5'>
              <h6>Address</h6>
              <input value={allfieldData.address} onChange={getData} name='address' type="text" placeholder='30N Gould street Usa' className='py-2' style={{ width: '100%' }} />
              {erros.address && <p className='text-danger'>*{erros.address.message}</p>}
            </div>
            <div className='col-md-5 d-flex justify-content-between'>
              <div className='col-5'>
                <h6>Postal Code</h6>
                <input value={allfieldData.postalcode} onChange={getData} name='postalcode' type="number" placeholder='5930..' className='py-2' style={{ width: '100%' }} />
                {erros.postalcode && <p className='text-danger'>*{erros.postalcode.message}</p>}
              </div>
              <div className='col-5'>
                <h6>Country</h6>
                <input value={allfieldData.country} onChange={getData} name='country' type="text" placeholder='USA' className='py-2' style={{ width: '100%' }} />
                {erros.country && <p className='text-danger'>*{erros.country.message}</p>}
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-between mt-4 flex-wrap'>
            <div className='col-5'>
              <h6>Number</h6>
              <input value={allfieldData.number} onChange={getData} name='number' type="number" placeholder='+9237364543' className='py-2' style={{ width: '100%' }} />
              {erros.number && <p className='text-danger'>*{erros.number.message}</p>}
            </div>
            <div className='col-5'>
              <h6>Email</h6>
              <input value={allfieldData.email} onChange={getData} name='email' type="email" placeholder='yousafva9@gmail.com' className='py-2' style={{ width: '100%' }} />
              {erros.email && <p className='text-danger'>*{erros.email.message}</p>}
            </div>

            <div className='col-12 mt-2'>
              <h6>Tell about yourself in 210 words</h6>
              <textarea value={allfieldData.description} onChange={getData} name="description" rows={5} className='rounded-3 p-1' style={{ width: '100%' }}></textarea>
              {erros.description && <p className='text-danger'>*{erros.description.message}</p>}
            </div>
            <div className='col-12 mt-2'>
              <h6>Tell about your work,experience,skills</h6>
              <textarea value={allfieldData.secdescription} onChange={getData} name="secdescription" rows={5} className='rounded-3 p-1' style={{ width: '100%' }}></textarea>
              {erros.secdescription && <p className='text-danger'>*{erros.secdescription.message}</p>}
            </div>

            {facebook && <div className='col-md-5 mt-2'>
              <div>
                <div className='d-flex justify-content-between'>
                  <h6>Facebook</h6>
                  <MdOutlineDeleteOutline style={{ cursor: 'pointer' }} onClick={() => setfacebook(false)} className='text-danger fs-3 ' />
                </div>
              </div>
              <input value={allfieldData.facebook} onChange={getData} name='facebook' type="text" placeholder='https://facebook' className='py-2' style={{ width: '100%' }} />
            </div>}

            {linkedin && <div className='col-md-5 mt-2'>
              <div className='d-flex justify-content-between'>
                <h6>LinkedIn</h6>
                <MdOutlineDeleteOutline style={{ cursor: 'pointer' }} onClick={() => setLinkedin(false)} className='text-danger fs-3 ' />
              </div>
              <input value={allfieldData.linkedin} onChange={getData} name='linkedin' type="text" placeholder='https://yousaf' className='py-2' style={{ width: '100%' }} />
            </div>}

            {website && <div className='col-md-5 mt-2'>
              <div className='d-flex justify-content-between'>
                <h6>Website</h6>
                <MdOutlineDeleteOutline style={{ cursor: 'pointer' }} onClick={() => setWebsite(false)} className='text-danger fs-3 ' />
              </div>
              <input value={allfieldData.website} onChange={getData} name='website' type="text" placeholder='www.yousafva.com' className='py-2' style={{ width: '100%' }} />
            </div>}

          </div>


          <div className='mt-3'>
            <p className='text-primary'>Optionals</p>
            <div className='mt-2 d-flex flex-wrap justify-content-between'>
              {!facebook && <div onClick={() => setfacebook(true)} className='border col-5 col-md-3 py-2 bg-primary text-white rounded-5  btn '>+ facebook</div>}
              {!linkedin && <div onClick={() => { setLinkedin(true) }} className='border col-5 col-md-3 py-2 bg-primary text-white rounded-5  btn '>+ linkdin</div>}
              {!website && <div onClick={() => setWebsite(true)} className='border col-5 col-md-3 py-2 bg-primary text-white rounded-5  btn '>+ website</div>}

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
