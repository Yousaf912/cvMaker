import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
    return (
        <div>
            <h1 className='text-center text-white'>Login</h1>
            <div className='text-white mt-5'>
                <form>
                   
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    <div className='text-center mt-5'>
                        <button type="submit" className="btn text-white border-white border-2 " style={{backgroundColor:'#7448cf'}}>Login</button>
                        <NavLink className='ms-5 text-white ' to={'/signup'}>Signup</NavLink>
                    </div>
                </form>
            </div>
        
        </div>
    )
}

