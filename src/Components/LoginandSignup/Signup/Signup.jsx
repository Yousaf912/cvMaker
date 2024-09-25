import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Signup() {
    return (
        <div>
            <h1 className='text-center text-white'>Signup</h1>
            <div className='text-white'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn text-white border-white border-2 " style={{backgroundColor:'#7448cf'}}>Signup</button>
                        <NavLink  className='ms-5 text-white ' to={'/login'}>Login</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}
