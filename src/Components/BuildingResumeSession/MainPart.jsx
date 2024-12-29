import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import PersonInfo from './Personalinfo/PersonInfo';
import Education from './EDucation/Education';
import Experience from './Experirnce/Experience';
import Skills from './Skills/Skills';
import Finalize from './Finalize/finalize';

export default function MainPart() {
  const name = useLocation().pathname.split('/')[2]
  const obj = {
    'personalinfo': <PersonInfo />,
    'education': <Education/>,
    'experience':<Experience/>,
    'skills':<Skills/>,
    'finalize':<Finalize/>
  }
  const element = obj[name]

  return (
    <div className='d-flex'> <Sidebar /> <div style={{ marginLeft: "20%" }}> {element} </div>        </div>
  )
}
