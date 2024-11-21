import React, { useEffect } from 'react';
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

  const experience = () => {
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
              <MdOutlineDeleteOutline onClick={() => deleteField(i)} className='fs-1 text-danger' />
            </div>
            {val} 
            </div>
        )
      })}


      <div className={`mt-5 ${style.main} d-flex  justify-content-center `}>
        <div onClick={addField} className='d-flex col-2  align-items-center border bg-primary text-white  btn '>
          More Fields
          <IoIosAddCircle className='fs-2 ms-2 ' />

        </div>
        <button onClick={experience} className='btn py-3 ms-4  px-3 shadow-lg'>
          Next to: Experience
        </button>
      </div>
    </div>
  )
}



function InutFields() {
  const id = sessionStorage.getItem('userid')
  const [added,setadded]= useState(false)
  
  const  [education,setEducation]=useState({
    name:'',
    instituteName:'',
    startdate:'',
    enddate:''
  });

  const getalldata =(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setEducation({
      ...education,
      [name]:value
    })
  }
  
 const ad =async()=>{
  try {
    const updated = await fetch(`http://localhost:7000/education/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(education)
    })
    const data = await updated.json();
    console.log(data);
    
   if(data.acknowledged){
    setadded(true)
   }


  } catch (er) { throw er }
  
 }

 console.log(education);
 

  
  return (
    <div>
      <div className=''>

        <div className=' d-flex justify-content-between flex-wrap mt-4'>
          <div className='col-5'>
            <h6>Degree</h6>
            <input onChange={getalldata} name='name'  type="text" placeholder='degree title ......' style={{ width: '100%' }} />
          </div>
          <div className='col-5'>
            <h6>Institute</h6>
            <input onChange={getalldata} name='instituteName' type="text" placeholder='karachi university....' style={{ width: '100%' }} />
          </div>
          <div className='col-5 mt-4 d-flex justify-content-between'>
            <div className='col-5'>
              <h6>Starting Date</h6>
              <input onChange={getalldata} name='startdate' type="date" style={{ width: '100%' }} />
            </div>
            <div className='col-5'>
              <h6>End Date</h6>
              <input onChange={getalldata} name='enddate' type="date" style={{ width: '100%' }} />
            </div>
          </div>
          <div className={` ${ added ? style.added : style.main} text-center mt-3  `}>
              <button onClick={ad}  className={` btn py-3  px-3 shadow-lg`}>
                {added ? 'Added':'Add'}
              </button>
            </div>

        </div>
      </div>
    </div>
  )
}

