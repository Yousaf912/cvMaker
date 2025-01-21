import { useNavigate } from 'react-router-dom'
import img from '../pics/img4.png'
import style from "./home.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setToken } from '../ReduxStore/Tokenslice';
import { toast, ToastContainer } from 'react-toastify';
import { setSpinner } from '../ReduxStore/Spinner';
import { useTypewriter } from 'react-simple-typewriter';
const url = import.meta.env.VITE_FETCHING_URL;

export default function Home() {
  const navigate = useNavigate();
  const id = localStorage.getItem('userid');
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');

  const [text] = useTypewriter({
    words: ['Effortlessly!'],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 40,
  })


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
    dispatch(setSpinner(true))
    setTimeout(() => {

      if (id) {
        navigate('/makeResume')
        dispatch(setSpinner(false))
      } else {
        navigate('/login')
        dispatch(setSpinner(false))
      }
    }, 1000)

  }

  return (

    <div className={`${style.main} `}>

      <div className={` container`}>
        <div className={`row justify-content-around mt-5 align-items-center d-md-flex `}>
          <div data-aos="zoom-in" data-aos-duration="2000" className="col-md-5">
            <h1 className=' mt-5'>Build Your Potential CV <br /> {text} <span className=''>|</span> </h1>
            <p className='mt-3'>
              Transform your job search with our powerful CV maker. Create a professional, eye-catching resume that showcases your unique skills and experiences—all in just a few clicks. Stand out from the competition and take the next step toward your dream job today.
            </p>
            <div className='mt-4  text-center text-md-start'>
              <button onClick={openlink} className='btn  px-3 shadow-lg'>
                Make Resume
              </button>
            </div>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000" className="col-md-5 ">
            <img src={img} style={{ width: '100%' }} />
          </div>
        </div>

      </div>
    </div>
  )
}
