import React, { useEffect, useState } from 'react'
import Template from '../../Templates/template'
import TempleteThree from '../../Templates/Template3/TemplateThree';
import TempleteOne from '../../Templates/Templete1/TempleteOne';
import { useDispatch, useSelector } from 'react-redux';
import { setAllUserdata } from '../../ReduxStore/Userdata';
import html2pdf from "html2pdf.js";
import { useNavigate } from 'react-router-dom';

export default function Finalize() {
  const url = import.meta.env.VITE_FETCHING_URL;
  const id = localStorage.getItem('userid');
  const [templte, settemplte] = useState('');
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.userData.data.userdata);
  const navigate = useNavigate()



  const UpdateAllData = async () => {
    const newdata = {
      ...userdata,
      personalinfo: [],
      education: [],
      skills: [],
      experience: [],
      template: ''
    }

    await fetch(`${url}/updatedata/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(newdata)
    }).then(async (res) => {
      const fnal = await res.json();
      if (fnal.message == 'updated') {
        navigate('/')
      }

    })

  }

  const PdfDownload = (id2, filename) => {
    return new Promise((resolve, reject) => {
      const element = document.getElementById(id2);
      const options = {
        filename: filename,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 4,
          useCORS: true,
          logging: true,
        },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      };

      html2pdf().from(element).set(options).save().then(() => {
        UpdateAllData();
      }).catch((error) => {
        console.error("Download error:", error);
        reject("Error downloading file.");
      });
    });
  };

  const template = {
    "Template 1": <TempleteThree download={PdfDownload} />,
    "Template 2": <TempleteOne download={PdfDownload} />
  }
  const element = template[templte]

  const getData = async () => {
    try {
      await fetch(`${url}/userdata/${id}`)
        .then(async (res) => {
          const fnal = await res.json();
          settemplte(fnal.userdata.template)
          dispatch(setAllUserdata(fnal))
        })

    } catch (er) {
      console.log(er);

    }
  }

  useEffect(() => {
    getData()
  }, [])



  return (
    <div>
      {element}
    </div>
  )
}
