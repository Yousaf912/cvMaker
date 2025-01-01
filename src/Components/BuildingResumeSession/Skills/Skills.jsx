import React from 'react';
import style from './skills.module.css'
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';






export default function Skills() {
    const id = localStorage.getItem('userid');
    const [eror, seteror] = useState({});
    const navigate = useNavigate();
   

    const [data, setdata] = useState({
        title: '',
        rate: '',
        description: ''
    })

    const getdata = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({
            ...data,
            [name]: value
        })
    }


    const add = async () => {
        const url = import.meta.env.VITE_FETCHING_URL;
        try {
            await fetch(`${url}/addskill/${id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(async (res) => {
                const fnal = await res.json();
                console.log(fnal);
                if (fnal.message == 'validation eror') {
                    seteror(fnal.eror.errors)
                } else {
                    if(fnal.message == 'data can not be exceed more than 5'){
                        toast.error(fnal.message)
                    }else{
                        if (fnal.message == 'added') {
                            toast.success('skill is added')
                            seteror({});
                            setdata({
                                title: '',
                                rate: '',
                                description: ''
                            });
    
                        }
                    }
                }

            })
        } catch (er) {
            console.log(er);
        }
    }

    console.log(eror);



    return (
        <div className={` ${style.education} mt-4 p-3  `}>
            <ToastContainer />
            <h1>What skills would you like to highlight?</h1>
            <h4>Choose from our pre-written examples below or write your own. Tell us your experirnce where do you skills </h4>
            <div className=''>

                <div className='  d-flex justify-content-between flex-wrap mt-4'>
                    <div className='col-5'>
                        <h6>Skill name</h6>
                        <input name='title' value={data.title} onChange={getdata} type="text" placeholder='Mern stack developwmt ...' style={{ width: '100%' }} />
                        {eror.title && <p className='text-danger'>*{eror.title.message}</p>}
                    </div>
                    <div className='col-5'>
                        <h6>Rate your skill</h6>
                        <select value={data.rate} name="rate" onChange={getdata} style={{ width: '100%' }}>
                            <option selected disabled>Select</option>
                            <option value="25%">25%</option>
                            <option value="50%">50%</option>
                            <option value="75%">75%</option>
                            <option value="100%">100%</option>
                        </select>
                        {eror.rate && <p className='text-danger'>*{eror.rate.message}</p>}
                    </div>
                    <div className='col-5 mt-4'>
                        <h6>About Skill</h6>
                        <textarea name='description' value={data.description} onChange={getdata} rows={5} style={{ width: '100%' }} />
                        {eror.description && <p className='text-danger'>*{eror.description.message}</p>}
                    </div>


                </div>
                <div className={` ${style.main} mt-4  text-center mt-3  `}>
                    <button onClick={add} className={` btn py-3 mt-4  px-3 shadow-lg`}>
                        Add
                    </button>
                </div>
            </div>
            <div className={`mt-5 ${style.main} text-center  `}>
                <button onClick={()=>navigate('/makeResume/finalize')} className='btn py-3  px-3 shadow-lg'>
                    Next to: FInalize
                </button>
            </div>
        </div>
    )
}