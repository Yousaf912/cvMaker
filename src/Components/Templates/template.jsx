import React from 'react'
import TempleteOne from './Templete1/TempleteOne'
import Navbar from '../Navbar/Navbar'
import TemplateTwo from './Template2/TemplateTwo'
import TempleteThree from './Template3/TemplateThree'


export default function Template() {
  return (
    <div>
        <Navbar/>
       <TempleteThree/>
       {/* <TempleteOne/> */}
    </div>
  )
}

