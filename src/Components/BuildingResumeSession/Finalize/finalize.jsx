import React, { useEffect, useState } from 'react'
import Template from '../../Templates/template'
import TempleteThree from '../../Templates/Template3/TemplateThree';
import TempleteOne from '../../Templates/Templete1/TempleteOne';
import { useDispatch } from 'react-redux';
import { setAllUserdata } from '../../ReduxStore/Userdata';

export default function Finalize() {
  const url = import.meta.env.VITE_FETCHING_URL;
  const id = localStorage.getItem('userid');
  const [templte,settemplte]=useState('');
  const dispatch = useDispatch();

  const template ={
    "Template 1":<TempleteThree/>,
    "Template 2":<TempleteOne/>
  }
  const element = template[templte]

  const getData = async () => {
    try {
      await fetch(`${url}/userdata/${id}`)
      .then(async(res)=>{
        const fnal =await res.json();
        settemplte(fnal.userdata.template)
       dispatch(setAllUserdata(fnal)) 
      })

    } catch (er) {
      console.log(er);

    }
  }

  useEffect(()=>{
    getData()
  },[])



  return (
    <div>
      {element}
    </div>
  )
}
