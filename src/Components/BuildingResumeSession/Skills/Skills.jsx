import React from 'react';
import style from './skills.module.css'
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';



export default function Skills() {
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
        navigate('/makeResume/finalize')
    }



    return (
        <div className={` ${style.education} mt-4 p-3  `}>
            <h1>What skills would you like to highlight?</h1>
            <h4>Choose from our pre-written examples below or write your own. Tell us your experirnce where do you skills </h4>
            <div className=''>
                <h4>Skill 1</h4>
                <InutFields />
            </div>
            {fields.map((val, i) => {
                return (

                    <div className='mt-4' key={i}>
                        <div className='d-flex justify-content-between col-5 mt-5 pt-4'>
                            <h4>Skill {i + 2}</h4>
                            <MdOutlineDeleteOutline onClick={() => deleteField(i)} className='fs-1 text-danger' />
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
                    Next to: FInalize
                </button>
            </div>
        </div>
    )
}



function InutFields() {
    return (
        <div className=''>
            <div className=''>

                <div className='  d-flex justify-content-between flex-wrap mt-4'>
                    <div className='col-5'>
                        <h6>Skill name</h6>
                        <input type="text" placeholder='Mern stack developwmt ...' style={{ width: '100%' }} />
                    </div>
                    <div className='col-5'>
                        <h6>Rate your skill</h6>
                        <select name="" id="" style={{ width: '100%' }}>
                            <option  selected disabled>Select</option>
                            <option value="25%">25%</option>
                            <option value="50%">50%</option>
                            <option value="75%">75%</option>
                            <option value="100%">100%</option>
                        </select>
                      
                    </div>
                    <div className='col-5 mt-4'>
                        <h6>About Skill</h6>
                        <textarea rows={5} style={{ width: '100%' }} />
                    </div>
                   

                </div>
            </div>
        </div>
    )
}