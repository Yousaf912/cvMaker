import React, { useEffect } from 'react';
import style from './Experience.module.css'
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setSpinner } from '../../ReduxStore/Spinner';




export default function Experience() {
    const id = localStorage.getItem('userid');
    const url = import.meta.env.VITE_FETCHING_URL;
    const navigate = useNavigate();
    const [eror, seteror] = useState({});
    const [indicator, setindicator] = useState(false);
    const [userExperience, setuserexperience] = useState([]);
    const [edit, setedit] = useState(false);
    const [arr,setarr]=useState();
    const disptach = useDispatch()


    useEffect(() => {

        const getalldata = async () => {
            try {
                await fetch(`${url}/userdata/${id}`)
                    .then(async (res) => {
                        const fnal = await res.json();

                        if (fnal.userdata.experience.length != 0) {
                            setuserexperience(fnal.userdata.experience)
                        }

                    })

            } catch (er) {
                console.log(er);
            }
        }
        getalldata();

    }, [indicator]);






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
        disptach(setSpinner(true));

        setTimeout(async() => {
            
            try {
                const res = await fetch(`${url}/addexperince/${id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });
    
                const fnal = await res.json();
                console.log(fnal);
    
                if (fnal.message === 'validation eror') {
                    disptach(setSpinner(false));
                    seteror(fnal.eror.errors);
                } else {
                    switch (fnal.message) {
                        case 'data can not be exceed more than 5':
                            disptach(setSpinner(false));
                            toast.error(fnal.message);
                            break;
                        case 'added':
                            disptach(setSpinner(false));
                            toast.success('Experience is added');
                          
                            seteror({});
                            setindicator(!indicator)
                            setdata({
                                title: '',
                                office: '',
                                address: '',
                                startingDate: '',
                                endDate: ''
                            });
                            break;
                        default:
                            console.error('Unexpected message:', fnal.message);
                            break;
                    }
                }
    
            } catch (er) {
                console.error('Error during the fetch:', er);
            }
        }, 1000);

    }


    const update = (num) => {
        const slected = userExperience[num];
        setedit(true);
        setarr(num)
        setdata(
            {
                title: slected.title,
                office: slected.office,
                address: slected.address,
                startingDate: slected.startingDate,
                endDate: slected.endDate
            }
        )

    };


    const deletexperience = async (num) => {
        disptach(setSpinner(true));

        setTimeout(async() => {
            
            try {
                await fetch(`${url}/deletexperience/${id}/${num}`, {
                    method: 'DELETE',
    
                }).then(async (res) => {
                    const fnal = await res.json();
                    if (fnal.message == 'experience is deleted') {
                        disptach(setSpinner(false));
                        toast.success(fnal.message);
                        setindicator(!indicator)
                    }
                })
            } catch (er) {
                console.log(er);
            }
        }, 1000);

    }


    const editext = async () => {
        disptach(setSpinner(true));

        setTimeout(async() => {
            try {
                await fetch(`${url}/editexperience/${id}/${arr}`,
                    {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(data)
                    }
                ).then(async (res) => {
                    const fnal = await res.json();
                    if (fnal.message == 'validation eror') {
                          disptach(setSpinner(false));
                        seteror(fnal.eror.errors)
                    } else {
                        if (fnal.message == 'edited') {
                            disptach(setSpinner(false));
                            toast.success("Experience is updated");
                            setindicator(!indicator)
                            seteror('');
                            setedit(false)
                            setdata(
                                {
                                    title: '',
                                    office: '',
                                    address: '',
                                    startingDate: '',
                                    endDate: ''
                                }
                            )
    
                        }
    
                    }
    
                })
    
            } catch (er) { console.log(er); }
        }, 1000);

       
    }

    return (
        <div className={` ${style.education} mt-4 p-3  `}>
            <ToastContainer />
            <h1>Tell us about your most recent job</h1>
            <h4>We’ll start there and work backward. Tell us your experirnce where do you work </h4>
            <div className=' '>

                <div className='  d-md-flex justify-content-between flex-wrap mt-4'>
                    <div className='col-md-5'>
                        <h6>Job Title</h6>
                        <input onChange={getdata} name='title' value={data.title} type="text" placeholder='Mern stack developwmt ...' style={{ width: '100%' }} />
                        {eror.title && <p className='text-danger'>*{eror.title.message}</p>}
                    </div>
                    <div className='col-md-5'>
                        <h6>Office name</h6>
                        <input onChange={getdata} name='office' value={data.office} type="text" placeholder='karachi ' style={{ width: '100%' }} />
                        {eror.office && <p className='text-danger'>*{eror.office.message}</p>}
                    </div>
                    <div className='col-md-5 mt-4'>
                        <h6>Address</h6>
                        <input onChange={getdata} value={data.address} name='address' type="text" placeholder='karachi ' style={{ width: '100%' }} />
                        {eror.address && <p className='text-danger'>*{eror.address.message}</p>}
                    </div>
                    <div className='col-md-5 mt-4 d-flex justify-content-between'>
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
                    {!edit ?
                        <button onClick={add} className={`${style.button} btn py-3  px-3 shadow-lg`}>
                            Add
                        </button> :
                        <button onClick={editext} className={`${style.button2} btn py-3  px-3 shadow-lg`}>
                            Edit
                        </button>
                    }
                </div>
                {userExperience.length != 0 &&
                    <div className={`d-md-flex flex-wrap justify-content-between  `}>
                        {userExperience.map((val, i) =>
                            <div key={i} className='d-flex flex-column col-md-5 '>

                                <div className={`mt-3  border-3 rounded-4  p-2 shadow ${style.educationlist} `}>

                                    <h5 className='text-center text-primary'>{val.title}</h5>
                                    <h6>Office: {val.office} </h6>
                                    <h6>Address: {val.address} </h6>
                                    <h6>StartDate: {val.startingDate} </h6>
                                    <h6>EndDate: {val.endDate} </h6>

                                </div>
                                <div className='pt-2 text-center'>
                                    <FaRegEdit onClick={() => update(i)} className='fs-3 text-success' style={{ cursor: 'pointer' }} />
                                    <MdOutlineDeleteOutline onClick={()=>deletexperience(i)} className='fs-2 text-danger ms-2' style={{ cursor: 'pointer' }} />

                                </div>
                            </div>

                        )}
                    </div>
                }
            </div>
            <div className={`mt-5 ${style.main} text-center  `}>
                <button onClick={() => navigate('/makeResume/skills')} className={`${style.button} btn py-3  px-3 shadow-lg`}>
                    Next to: Experience
                </button>
            </div>
        </div>
    )
}