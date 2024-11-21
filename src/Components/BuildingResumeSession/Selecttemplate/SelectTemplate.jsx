import { useEffect, useState } from 'react'
import img1 from '../../../assets/pic1.png'
import img2 from '../../../assets/pic2.png'
import Navbar from '../../Navbar/Navbar'
import { TiTickOutline } from "react-icons/ti";
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



export const SelectTemplate = () => {
    const [templateName, setTemplateName] = useState('');
    const navigate = useNavigate()
    const id = sessionStorage.getItem('userid');

    useEffect(()=>{
        if(!id){
            navigate('/login')
        }
    },[])
   
    const data = [
        {
            name: 'Template 1',
            pic: img1
        },
        {
            name: 'Template 2',
            pic: img2
        },
    ]

    const select = (e) => {
        setTemplateName(e)
    }

  

    const go =async()=>{
        if (templateName == '') {
            toast.error("Please select Template")
        } else {

            try{
                const res =await fetch(`http://localhost:7000/userid/${id}`,{
                    method:'PUT',
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        template:templateName
                    })
                })
                const data = await res.json();
                if(data.acknowledged){
                    navigate('/makeResume/personalinfo')
                }
                
            }catch(er){
                throw er
            }
        }
       
    }


    return (
        <>

            <Navbar />
            <div className="container mt-5">
                <ToastContainer />
                <div className="row">
                    <div className="position-relative d-flex justify-content-evenly flex-wrap">
                        {data.map((val, i) => {
                            return (
                                <div onClick={() => select(val.name)} key={i} className={` ${templateName == val.name && 'border-3  border-success'} col-3 border rounded-3 d-flex flex-column justify-content-between `}>
                                    {templateName == val.name &&
                                        <div className='dot border bg-success text-white rounded-circle text-center position-absolute  ' style={{ height: '40px', width: '40px ' }}>
                                            <TiTickOutline className='fs-2' />
                                        </div>}
                                    <img className='rounded-3' src={val.pic} style={{ width: "100%" }} />
                                    <h5 className='mt-2 ' >{val.name}</h5>
                                </div>
                            )
                        })}
                    </div>
                    <div onClick={go} className={`mt-5  text-center mb-5 `}>
                        <button className='btn  px-3 shadow-lg' style={{
                            background: 'linear-gradient(130deg, #506bc2, #3eadc9)',
                            border: 'none',
                            outline: 'none',
                            color: 'white',
                        }}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}