import { useNavigate } from 'react-router-dom'
import img from '../pics/img4.png'
import style from "./home.module.css"

export default function Home() {
  const navigate = useNavigate()

  const openlink =()=>{
    navigate('/makeResume')
  }
  return (

    <div className={`${style.main}`}>
      <div className={` container`}>
        <div className={`row justify-content-around mt-5 align-items-center d-flex `}>
          <div className="col-5">
            <h1 className=' mt-5'>Build Your Dream CV Effortlessly!</h1>
            <p className='mt-3'>
            Transform your job search with our powerful CV maker. Create a professional, eye-catching resume that showcases your unique skills and experiences—all in just a few clicks. Stand out from the competition and take the next step toward your dream job today.
            </p>
            <div className='mt-4'>
              <button onClick={openlink} className='btn  px-3 shadow-lg'>
                Make Resume
              </button>
            </div>
          </div>
          <div className="col-5">
            <img src={img} alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}
