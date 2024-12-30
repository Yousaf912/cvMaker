import React, { useEffect } from 'react';
import style from './Experience.module.css'
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';




export default function Experience() {
    const id = localStorage.getItem('userid');
    const navigate = useNavigate();
    const [eror, seteror] = useState({});

    useEffect(() => {
        if (!id) {
            navigate('/')
        }
    }, []);

    const [data, setdata] = useState({
        title: '',
        office: '',
        address: '',
        startingDate: '',
        endDate: ''
    });

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
            await fetch(`${url}/addexperince/${id}`, {
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
                    if (fnal.message == 'data can not be exceed more than 5') {
                        toast.error(fnal.message)
                    }
                    if (fnal.message == 'added') {
                        toast.success('experience is added')
                        seteror({});
                        setdata({
                            title: '',
                            office: '',
                            address: '',
                            startingDate: '',
                            endDate: ''
                        });

                    }
                }

            })
        } catch (er) {
            console.log(er);
        }
    }


    return (
        <div className={` ${style.education} mt-4 p-3  `}>
            <h1>Tell us about your most recent job</h1>
            <h4>We’ll start there and work backward. Tell us your experirnce where do you work </h4>
            <div className=''>

                <div className='  d-flex justify-content-between flex-wrap mt-4'>
                    <div className='col-5'>
                        <h6>Job Title</h6>
                        <input onChange={getdata} name='title' value={data.title} type="text" placeholder='Mern stack developwmt ...' style={{ width: '100%' }} />
                        {eror.title && <p className='text-danger'>*{eror.title.message}</p>}
                    </div>
                    <div className='col-5'>
                        <h6>Office name</h6>
                        <input onChange={getdata} name='office' value={data.office} type="text" placeholder='karachi ' style={{ width: '100%' }} />
                        {eror.office && <p className='text-danger'>*{eror.office.message}</p>}
                    </div>
                    <div className='col-5 mt-4'>
                        <h6>Address</h6>
                        <input onChange={getdata} value={data.address} name='address' type="text" placeholder='karachi ' style={{ width: '100%' }} />
                        {eror.address && <p className='text-danger'>*{eror.address.message}</p>}
                    </div>
                    <div className='col-5 mt-4 d-flex justify-content-between'>
                        <div className='col-5'>
                            <h6>Starting Date</h6>
                            <input onChange={getdata} name='startingDate' value={data.startingDate} type="date" style={{ width: '100%' }} />
                            {eror.startingDate && <p className='text-danger'>*{eror.startingDate.message}</p>}
                        </div>
                        <div className='col-5'>
                            <h6>End Date</h6>
                            <input onChange={getdata} type="date" name='endDate' value={data.endDate} style={{ width: '100%' }} />
                            {eror.endDate && <p className='text-danger'>*{eror.endDate.message}</p>}
                        </div>
                    </div>

                </div>
                <div className={` ${style.main} mt-4  text-center mt-3  `}>
                    <button onClick={add} className={` btn py-3 mt-4  px-3 shadow-lg`}>
                        Add
                    </button>
                </div>
            </div>
            <div className={`mt-5 ${style.main} text-center  `}>
                <button onClick={() => navigate('/makeResume/skills')} className='btn py-3  px-3 shadow-lg'>
                    Next to: Experience
                </button>
            </div>
        </div>
    )
}