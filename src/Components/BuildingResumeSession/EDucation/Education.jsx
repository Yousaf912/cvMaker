import React from 'react';
import style from './education.module.css'
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



export default function Education() {
  const navigate = useNavigate()
  const [fields, setFields] = useState([]);
  const addField = () => {
    setFields([...fields, <InutFields />])
  }

  const deleteField = (i) => {
    const newFields = [...fields]; 
    newFields.splice(i, 1); 
    setFields(newFields); 
  };

  const experience=()=>{
    navigate('/makeResume/experience')
  }



  return (
    <div className={` ${style.education} mt-4 p-3`}>
      <h1>Tell us about your education</h1>
      <h4>Enter your education experience so far, even if you are a current student or did not graduate.</h4>
      <div>
        <h4>Education 1</h4>
        <InutFields />
      </div>
      {fields.map((val, i) => {
        return (

          <div className='mt-4' key={i}>
            <div className='d-flex justify-content-between col-5 mt-5 pt-4'>
              <h4>Education {i + 2}</h4>
              <MdOutlineDeleteOutline onClick={()=>deleteField(i)} className='fs-1 text-danger' />
            </div>
            {val}</div>
        )
      })}
      <div onClick={addField} className='d-flex col-2  align-items-center border bg-primary text-white  btn  mt-5 '>
        Add More
        <IoIosAddCircle className='fs-2 ms-2 ' />

      </div>

      <div className={`mt-5 ${style.main} text-center  `}>
        <button onClick={experience} className='btn py-3  px-3 shadow-lg'>
          Next to: Experience
        </button>
      </div>
    </div>
  )
}



function InutFields() {
  return (
    <div>
      <div className=''>

        <div className=' d-flex justify-content-between flex-wrap mt-4'>
          <div className='col-5'>
            <h6>Degree</h6>
            <input type="text" placeholder='degree title ......' style={{ width: '100%' }} />
          </div>
          <div className='col-5'>
            <h6>Institute</h6>
            <input type="text" placeholder='karachi university....' style={{ width: '100%' }} />
          </div>
          <div className='col-5 mt-4 d-flex justify-content-between'>
            <div className='col-5'>
              <h6>Starting Date</h6>
              <input type="date" style={{ width: '100%' }} />
            </div>
            <div className='col-5'>
              <h6>End Date</h6>
              <input type="date" style={{ width: '100%' }} />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

