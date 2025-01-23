import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import PersonInfo from './Personalinfo/PersonInfo';
import Education from './EDucation/Education';
import Experience from './Experirnce/Experience';
import Skills from './Skills/Skills';
import Finalize from './Finalize/finalize';
import { Spinner } from '../Spinner';
import { useSelector } from 'react-redux';

export default function MainPart() {
  const name = useLocation().pathname.split('/')[2];
  const spiner = useSelector((state) => state.spiner.spinner);
  const obj = {
    'personalinfo': <PersonInfo />,
    'education': <Education />,
    'experience': <Experience />,
    'skills': <Skills />,
    'finalize': <Finalize />
  }
  const element = obj[name];
  const [isMdScreen, setIsMdScreen] = useState(false);


  useEffect(() => {
    
    const mdBreakpoint = 768;
    const handleResize = () => {
      if (window.innerWidth >= mdBreakpoint) {
        setIsMdScreen(true);
      } else {
        setIsMdScreen(false); 
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  
  return (
    < div className='position-relative' style={{height:'100%'}}>
      {spiner && <Spinner />}
      <div className='d-md-flex'>
       {isMdScreen &&
        <Sidebar />
       }
      
        <div  style={{ marginLeft: isMdScreen && "20%", height:'100vh' }}>

          {element}
        </div>
      </div>
    </div>
  )
}
