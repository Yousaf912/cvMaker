import React, { useEffect } from 'react';
import style from './education.module.css'
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';




export default function Education() {
  const url = import.meta.env.VITE_FETCHING_URL;
  const id = localStorage.getItem('userid')
  const [added, setadded] = useState(false)
  const [eror, seteror] = useState({})
  const [education, setEducation] = useState({
    name: '',
    instituteName: '',
    startdate: '',
    enddate: ''
  });
  const [data, setAllData] = useState([])
  const naviagte = useNavigate();
  useEffect(() => {
    if (!id) {
      naviagte('/')
    }
  }, [])


  const getalldata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEducation({
      ...education,
      [name]: value
    })
  }


  const ad = async () => {
    try {
      await fetch(`${url}/addeducation/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(education)
      })
        .then(async (res) => {
          const fnal = await res.json();
          if(fnal.message == 'only 4 education can be added'){
            toast.error(fnal.message)
          }else{
            if (fnal.message == 'validation eror') {
              seteror(fnal.eror.errors)
            } else {
              if (fnal.message == 'this degree is already added') {
                toast.error(fnal.message)
              } else {
  
                if (fnal.message == 'added') {
                  toast.success(`${education.name} education is added`)
                  seteror({})
                  setEducation({
                    name: '',
                    instituteName: '',
                    startdate: '',
                    enddate: ''
                  })
                }
              }
            }
          }

        })
    } catch (er) {
      console.log(er);
    }

  }

  


  return (
    <div className={` ${style.education} mt-4 p-3`}>
      <ToastContainer />
      <h1>Tell us about your education</h1>
      <h4>Enter your education experience so far, even if you are a current student or did not graduate.</h4>


      <div className=' d-flex justify-content-between flex-wrap mt-4'>
        <div className='col-5'>
          <h6>Degree</h6>
          <input onChange={getalldata} name='name' value={education.name} type="text" placeholder='degree title ......' style={{ width: '100%' }} />
          {eror.name && <p className='text-danger'>*{eror.name.message}</p>}
        </div>
        <div className='col-5'>
          <h6>Institute</h6>
          <input onChange={getalldata} value={education.instituteName} name='instituteName' type="text" placeholder='karachi university....' style={{ width: '100%' }} />
          {eror.instituteName && <p className='text-danger'>*{eror.instituteName.message}</p>}
        </div>
        <div className='col-5 mt-4 d-flex justify-content-between'>
          <div className='col-5'>
            <h6>Starting Date</h6>
            <input onChange={getalldata} value={education.startdate} name='startdate' type="date" style={{ width: '100%' }} />
            {eror.startdate && <p className='text-danger'>*{eror.startdate.message}</p>}
          </div>
          <div className='col-5'>
            <h6>End Date</h6>
            <input onChange={getalldata} value={education.enddate} name='enddate' type="date" style={{ width: '100%' }} />
            {eror.enddate && <p className='text-danger'>*{eror.enddate.message}</p>}
          </div>
        </div>
        <div className={` ${added ? style.added : style.main} text-center mt-3  `}>
          <button onClick={ad} className={`${style.button} btn py-3  px-3 shadow-lg`}>
            {added ? 'Added' : 'Add'}
          </button>
        </div>


      </div>
      <div className='text-center'>
        <button onClick={()=>naviagte('/makeResume/experience')} className={`${style.button} btn py-3 ms-4 mt-5 px-3 shadow-lg`}>
          Next to: Experience
        </button>
      </div>

    </div>
  )
}

