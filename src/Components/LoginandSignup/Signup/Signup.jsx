import React, { useRef, useState } from 'react'
import { json, NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

export default function Signup() {
    const navigate = useNavigate();
    const fetchingurl = import.meta.env.VITE_FETCHING_URL;
    const [eror,setEror] = useState({})
    

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

 
    const signup = async(e)=>{
        e.preventDefault();
        try{
            await fetch(`${fetchingurl}/signup`,
               {
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(data)
               }
            ).then(async(res)=>{
                const fnal = await res.json();
                
                if(fnal.message == 'Validation failed'){
                    console.log(fnal);
                    
                    setEror(fnal.errors)
                }
                if(res.ok){
                    toast.success(fnal.message);
                    setdata({
                        name: "",
                        email: "",
                        password: ''
                    })
                    setTimeout(() => {
                        navigate('/login')
                    }, 3000);
                    
                }else{
                    toast.error(fnal.message)
                }
                
            })
        }catch(er){}
    }


    return (
        <div data-aos="zoom-in-up" data-aos-duration="2000" >
            <ToastContainer />
            <h1 className='text-center text-white'>Signup</h1>
            <div  className='text-white'>
                <form onSubmit={signup}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input value={data.name} onChange={getData} name='name' type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                        {eror.name && <h6 className='text-danger'>*{eror.name.message}</h6> }
                    </div>
                    <div className="mb-3">
                        <div className='d-flex justify-content-between'>
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                          
                        </div>
                        <input value={data.email} onChange={getData} name='email' type="email" className="form-control"  />
                    {eror.email && <h6 className='text-danger '>*{eror.email.message}</h6> }
                    </div>
                    <div className="mb-3">
                        <div className='d-flex justify-content-between'>
                            <label htmlFor="exampleInputEmail1" className="form-label">Password</label>
                           
                        </div>
                        <input value={data.password} required onChange={getData} name='password' type="password" className="form-control" />
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
