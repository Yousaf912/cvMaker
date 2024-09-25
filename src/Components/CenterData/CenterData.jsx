import React from 'react'
import { useLocation } from 'react-router-dom'
import Main from '../LoginandSignup/main';
import Template from '../Templates/template';

export default function CenterData() {
    const location  = useLocation().pathname.split("/")[1];

    const obj ={
        'login':<Main/>,
        'signup':<Main/>,
    }
    let element = obj[location]
  return (
    <div>{element}</div>
  )
}
