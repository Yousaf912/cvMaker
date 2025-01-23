import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
const url = import.meta.env.VITE_FETCHING_URL;
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function Login() {
    const navigate = useNavigate();
    const [show, setshow] = useState(false)
    const [data, setdata] = useState({
        email: '',
        password: '',
    })

    const getdata = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({
            ...data,
            [name]: value
        })
    }

    const login = async (e) => {
        e.preventDefault();
        try {
            await fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(async (res) => {
                const fnal = await res.json();

                if (res.ok) {
                    await localStorage.setItem('token', fnal.token);
                    await navigate('/')
                    window.location.reload()
                } else {
                    toast.error(fnal.message)

                }

            })


        } catch (er) { throw er }
    }

    return (
        <div data-aos="zoom-in-up" data-aos-duration="2000" >
            <ToastContainer />
            <h1 className='text-center text-white'>Login</h1>
            <div className='text-white mt-5'>
                <form onSubmit={login}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name='email' onChange={getdata} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <p>Password</p>
                    <div className='d-flex border rounded-2 bg-white '>
                        <input value={data.password} required onChange={getdata} name='password' type={show ? 'text' : "password"} style={{ width: '90%', background: 'none', border: 'none', outline: 'none' }} />
                        <div className=' text-primary text-center pt-1'>
                            {show ?
                                <FaRegEye onClick={() => setshow(!show)} className='fs-3 ms-2' style={{ cursor: 'pointer' }} /> :
                                <FaRegEyeSlash onClick={() => setshow(!show)} className='fs-3 ms-2' style={{ cursor: 'pointer' }} />
                            }
                        </div>

                    </div>

                    <div className='text-center mt-5'>
                        <button type="submit" className="btn text-white border-white border-2 " style={{ backgroundColor: '#7448cf' }}>Login</button>
                        <NavLink className='ms-5 text-white ' to={'/signup'}>Signup</NavLink>
                    </div>
                </form>
            </div>

        </div>
    )
}

