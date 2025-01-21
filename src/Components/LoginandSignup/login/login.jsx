import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
const url = import.meta.env.VITE_FETCHING_URL;

export default function Login() {
    const navigate =useNavigate()
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

    const login =async (e) => {
        e.preventDefault();
        try{
            await fetch(`${url}/login`,{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
            }).then(async(res)=>{
                const fnal =await res.json();
              
                if(res.ok){
                   await localStorage.setItem('token',fnal.token);
                   navigate('/')
                }else{
                   toast.error(fnal.message)
                    
                }
                
            })

          
        }catch(er){throw er}
    }

    return (
        <div data-aos="zoom-in-up" data-aos-duration="2000" >
           <ToastContainer/>
            <h1 className='text-center text-white'>Login</h1>
            <div className='text-white mt-5'>
                <form onSubmit={login}>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input name='email' onChange={getdata} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input name='password' onChange={getdata} type="password" className="form-control" id="exampleInputPassword1" />
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

