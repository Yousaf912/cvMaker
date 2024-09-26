import React from 'react'
import Sidebar from './Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import PersonInfo from './Personalinfo/PersonInfo';
import Education from './EDucation/Education';

export default function MainPart() {
  const name = useLocation().pathname.split('/')[2]
  const obj = { 'personalinfo': <PersonInfo />, 'education': <Education /> }
  const element = obj[name]

  return (
    <div className='d-flex'> <Sidebar /> {element}        </div>
  )
}
