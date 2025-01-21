import React, { useEffect } from 'react';
import style from './skills.module.css'
import { IoIosAddCircle } from "react-icons/io";
import { useState } from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegEdit } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { setSpinner } from '../../ReduxStore/Spinner';






export default function Skills() {
    const id = localStorage.getItem('userid');
    const url = import.meta.env.VITE_FETCHING_URL;
    const [eror, seteror] = useState({});
    const navigate = useNavigate();
    const [indicator, setindicator] = useState(false);
    const [userSkills, setskills] = useState([]);
    const [edit, setedit] = useState(false);
    const [arr, setarr] = useState();
    const [data, setdata] = useState({
        title: '',
        rate: '',
        description: ''
    });
    const dispatch = useDispatch();

    useEffect(() => {

        const getalldata = async () => {
            try {
                await fetch(`${url}/userdata/${id}`)
                    .then(async (res) => {
                        const fnal = await res.json();

                        if (fnal.userdata.experience.length != 0) {
                            setskills(fnal.userdata.skills)
                        }

                    })

            } catch (er) {
                console.log(er);
            }
        }
        getalldata();

    }, [indicator]);




    const getdata = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({
            ...data,
            [name]: value
        })
    }


    const add = async () => {
        dispatch(setSpinner(true));

        setTimeout(async() => {
            
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
                        dispatch(setSpinner(false));
                        seteror(fnal.eror.errors)
                    } else {
                        if (fnal.message == 'data can not be exceed more than 5') {
                            toast.error(fnal.message)
                        } else {
                            if (fnal.message == 'added') {
                                toast.success('skill is added')
                                seteror({});
                                dispatch(setSpinner(false));
                                setindicator(!indicator)
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
        }, 1000);
    }

    const update = (num) => {
        const slected = userSkills[num];
        setedit(true);
        setarr(num)
        setdata(
            {
                title: slected.title,
                rate: slected.rate,
                description: slected.description
            }
        )

    };

    
        const editext = async () => {

            dispatch(setSpinner(true));

            setTimeout(async() => {
                
                try {
                    await fetch(`${url}/editskill/${id}/${arr}`,
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
                            dispatch(setSpinner(false));
                            seteror(fnal.eror.errors)
                        } else {
                            if (fnal.message == 'edited') {
                                dispatch(setSpinner(false));
                                toast.success("Skill is updated");
                                setindicator(!indicator)
                                seteror('');
                                setedit(false);
                                
                                setdata(
                                    {
                                        title: '',
                                        rate: '',
                                        description: ''
                                    }
                                )
        
                            }
        
                        }
        
                    })
        
                } catch (er) { console.log(er); }
            }, 1000);
    
        }



          const deleteskill = async (num) => {
            dispatch(setSpinner(true));
            setTimeout(async() => {
                
                try {
                    await fetch(`${url}/deleteskill/${id}/${num}`, {
                        method: 'DELETE',
        
                    }).then(async (res) => {
                        const fnal = await res.json();
                        if (fnal.message == 'skill is deleted') {
                            dispatch(setSpinner(false));
                            toast.success(fnal.message);
                            setindicator(!indicator)
                        }
                    })
                } catch (er) {
                    console.log(er);
                }
            }, 1000);
        
            }


    return (
        <div className={` ${style.education} mt-4 p-3  `}>
            <ToastContainer />
            <h1>What skills would you like to highlight?</h1>
            <h4>Choose from our pre-written examples below or write your own. Tell us your experirnce where do you skills </h4>
            <div className=''>

                <div className='  d-md-flex justify-content-between flex-wrap mt-4'>
                    <div className='col-md-5'>
                        <h6>Skill name</h6>
                        <input name='title' value={data.title} onChange={getdata} type="text" placeholder='Mern stack developwmt ...' style={{ width: '100%' }} />
                        {eror.title && <p className='text-danger'>*{eror.title.message}</p>}
                    </div>
                    <div className='col-md-5'>
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
                    <div className='col-md-5 mt-4'>
                        <h6>About Skill</h6>
                        <textarea name='description' value={data.description} onChange={getdata} rows={5} style={{ width: '100%' }} />
                        {eror.description && <p className='text-danger'>*{eror.description.message}</p>}
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
                {userSkills.length != 0 &&
                    <div className={`d-md-flex flex-wrap justify-content-between  `}>
                        {userSkills.map((val, i) =>
                            <div key={i} className='d-flex flex-column col-md-5 '>

                                <div className={`mt-3  border-3 rounded-4  p-2 shadow ${style.educationlist} `}>

                                    <h5 className='text-center text-primary'>{val.title}</h5>
                                    <h6>Discription: {val.description.slice(0, 35)} ..... </h6>
                                    <h6>Rating: {val.rate} </h6>


                                </div>
                                <div className='pt-2 text-center'>
                                    <FaRegEdit onClick={() => update(i)} className='fs-3 text-success' style={{ cursor: 'pointer' }} />
                                    <MdOutlineDeleteOutline  onClick={()=>deleteskill(i)} className='fs-2 text-danger ms-2' style={{ cursor: 'pointer' }} />

                                </div>
                            </div>

                        )}
                    </div>
                }

            </div>
            <div className={`mt-5 ${style.main} text-center  `}>
                <button onClick={() => navigate('/makeResume/finalize')} className={`${style.button} btn py-3  px-3 shadow-lg`}>
                    Next to: FInalize
                </button>
            </div>
        </div>
    )
}