import { useNavigate } from 'react-router-dom'
import img from '../pics/img4.png'
import style from "./home.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setToken } from '../ReduxStore/Tokenslice';
import { toast, ToastContainer } from 'react-toastify';
const url = import.meta.env.VITE_FETCHING_URL;

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  

  const getuserinfo = async () => {
    try {
      const getUser = await fetch(`${url}/home`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      }).then(async (res) => {
        const data = await res.json();
        localStorage.setItem('userid', data.user.userexist._id)
      })
    } catch (er) { }

  }

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
      getuserinfo()
    }
  }, []);



  const openlink = async () => {
    const id = localStorage.getItem('userid');
   
    if (id) {
      navigate('/makeResume')
    } else {
      navigate('/login')
    }
  }

  return (

    <div className={`${style.main} `}>

      <div className={` container`}>
        <div className={`row justify-content-around mt-5 align-items-center d-md-flex `}>
          <div className="col-md-5">
            <h1 className=' mt-5'>Build Your Dream CV Effortlessly!</h1>
            <p className='mt-3'>
              Transform your job search with our powerful CV maker. Create a professional, eye-catching resume that showcases your unique skills and experiences—all in just a few clicks. Stand out from the competition and take the next step toward your dream job today.
            </p>
            <div className='mt-4  text-center text-md-start'>
              <button onClick={openlink} className='btn  px-3 shadow-lg'>
                Make Resume
              </button>
            </div>
          </div>
          <div className="col-md-5 ">
            <img src={img} style={{ width: '100%' }} />
          </div>
        </div>

      </div>
    </div>
  )
}
