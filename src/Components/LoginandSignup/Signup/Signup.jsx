import React, { useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Signup() {
    const navigate = useNavigate();
    const [emaileror, setEmailEror] = useState();
    const [passworderor, setPaswordEror] = useState();
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: ''
    })

    const getData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({
            ...data,
            [name]: value
        })
    }
    const signup = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://localhost:7000/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(async (res) => {
                const data = await res.json()
                const status = await res.ok

                if (status) {
                    setdata({
                        name: "",
                        email: "",
                        password: ''
                    })
                }
                if (data.message.issues) {

                    await data.message.issues.filter((val) => {
                        if (val.path[0] == 'email') {
                            setEmailEror(val.message)
                        }
                        else if (val.path[0] == 'password') {
                            setPaswordEror(val.message)
                        }

                    })
                }else{
                    toast.error(data.message)
                }


            }).catch((er) => {
                console.log(er);

            })
        } catch (er) { }

    }


    return (
        <div>
            <ToastContainer />
            <h1 className='text-center text-white'>Signup</h1>
            <div className='text-white'>
                <form onSubmit={signup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input value={data.name} onChange={getData} name='name' type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <div className='d-flex justify-content-between'>
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            {emaileror != '' && <h6 className='text-danger'>{emaileror}</h6>}
                        </div>
                        <input value={data.email} onChange={getData} name='email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <div className='d-flex justify-content-between'>
                            <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                            {passworderor != '' && <h6 className='text-danger'>{passworderor}</h6>}
                        </div>
                        <input value={data.password} onChange={getData} name='password' type="password" className="form-control" id="exampleInputPassword1" />
                    </div>


                    <div className='text-center'>
                        <button type="submit" className="btn text-white border-white border-2 " style={{ backgroundColor: '#7448cf' }}>Signup</button>
                        <NavLink className='ms-5 text-white ' to={'/login'}>Login</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}
