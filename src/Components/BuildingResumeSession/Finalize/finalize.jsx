import React, { useEffect, useState } from 'react'
import Template from '../../Templates/template'
import TempleteThree from '../../Templates/Template3/TemplateThree';
import TempleteOne from '../../Templates/Templete1/TempleteOne';
import { useDispatch } from 'react-redux';
import { setAllUserdata } from '../../ReduxStore/Userdata';
import html2pdf from "html2pdf.js";

export default function Finalize() {
  const url = import.meta.env.VITE_FETCHING_URL;
  const id = localStorage.getItem('userid');
  const [templte,settemplte]=useState('');
  const dispatch = useDispatch();

  const PdfDownload = (id, filename) => {
      return new Promise((resolve, reject) => {
          const element = document.getElementById(id);
          const options = {
              filename: filename,
              image: { type: "jpeg", quality: 0.98 },
              html2canvas: { scale: 4 },
              jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          };
  
          html2pdf().from(element).set(options).save().then(() => {
              resolve({message:'Download',id});
          }).catch((error) => {
              console.error("Download error:", error);
              reject("Error downloading file.");
          });
      });
  };

  const template ={
    "Template 1":<TempleteThree download={PdfDownload}/>,
    "Template 2":<TempleteOne download={PdfDownload}/>
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
