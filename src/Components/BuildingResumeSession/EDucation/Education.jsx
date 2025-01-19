import React, { useEffect } from 'react';
import style from './education.module.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setSpinner } from '../../ReduxStore/Spinner';





export default function Education() {
  const url = import.meta.env.VITE_FETCHING_URL;
  const [edit, setedit] = useState(false)
  const id = localStorage.getItem('userid')
  const [added, setadded] = useState(false)
  const [eror, seteror] = useState({});
  const [userEducation, setUserEducation] = useState([]);
  const [arr, setarr] = useState();
  const [indicator, setindicator] = useState(false);
  const dispatch = useDispatch();


  const [education, setEducation] = useState({
    name: '',
    instituteName: '',
    startdate: '',
    enddate: ''
  });
  const [data, setAllData] = useState([])
  const naviagte = useNavigate();
  useEffect(() => {
    if (!id) {
      naviagte('/')
    }
  }, []);

  useEffect(() => {

    const getalldata = async () => {
      try {
        await fetch(`${url}/userdata/${id}`)
          .then(async (res) => {
            const fnal = await res.json();

            if (fnal.userdata.education.length != 0) {
              setUserEducation(fnal.userdata.education)
            }

          })

      } catch (er) {
        console.log(er);
      }
    }
    getalldata();



  }, [indicator]);


  const getalldata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEducation({
      ...education,
      [name]: value
    })
  }



  const ad = async () => {
    dispatch(setSpinner(true));

    setTimeout(async () => {
      try {
        await fetch(`${url}/addeducation/${id}`, {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(education)
        })
          .then(async (res) => {
            const fnal = await res.json();
            if (fnal.message == 'only 4 education can be added') {
              dispatch(setSpinner(false))
              toast.error(fnal.message)
            } else {
              if (fnal.message == 'validation eror') {
                dispatch(setSpinner(false))
                seteror(fnal.eror.errors)
              } else {
                if (fnal.message == 'this degree is already added') {
                  dispatch(setSpinner(false))
                  toast.error(fnal.message)
                } else {

                  if (fnal.message == 'added') {
                    setindicator(!indicator)
                    toast.success(`${education.name} education is added`);
                    dispatch(setSpinner(false));
                    seteror({})
                    setEducation({
                      name: '',
                      instituteName: '',
                      startdate: '',
                      enddate: ''
                    })
                  }
                }
              }
            }

          })
      } catch (er) {
        console.log(er);
      }
    }, 1000);


  }

  const update = (num) => {
    const slected = userEducation[num];
    setedit(true)
    setarr(num)
    setEducation({
      name: slected.name,
      instituteName: slected.instituteName,
      startdate: slected.startdate,
      enddate: slected.enddate
    })

  };

  const editext = async () => {
    dispatch(setSpinner(true))
    setTimeout(async () => {
      try {
        await fetch(`${url}/editeducation/${id}/${arr}`,
          {
            method: 'PUT',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(education)
          }
        ).then(async (res) => {
          const fnal = await res.json();
          if (fnal.message == 'validation eror') {
            dispatch(setSpinner(false))
            seteror(fnal.eror.errors)
          } else {
            if (fnal.message == 'edited') {
              toast.success("Education is updated");
              setindicator(!indicator)
              seteror('');
              setedit(false)
              dispatch(setSpinner(false))
              setEducation(
                {
                  name: '',
                  instituteName: '',
                  startdate: '',
                  enddate: ''
                }
              )

            }

          }

        })

      } catch (er) { console.log(er); }
    }, 1000);

  }


  const deleteducation = async (num) => {
    dispatch(setSpinner(true));
    setTimeout(async() => {
      
      try {
        await fetch(`${url}/deleteducation/${id}/${num}`, {
          method: 'DELETE',
  
        }).then(async (res) => {
          const fnal = await res.json();
          if (fnal.message == 'education is deleted') {
            dispatch(setSpinner(false));
            toast.success(fnal.message);
            setindicator(!indicator)
          }
        })
      } catch (er) {
        console.log(er);
      }
    }, 1000);

  }


  return (
    <div className={` ${style.education} mt-4 p-3`}>
      <ToastContainer />
      <h1>Tell us about your education</h1>
      <h4>Enter your education experience so far, even if you are a current student or did not graduate.</h4>


      <div className=' d-flex justify-content-between flex-wrap mt-4'>
        <div className='col-5'>
          <h6>Degree</h6>
          <input onChange={getalldata} name='name' value={education.name} type="text" placeholder='degree title ......' style={{ width: '100%' }} />
          {eror.name && <p className='text-danger'>*{eror.name.message}</p>}
        </div>
        <div className='col-5'>
          <h6>Institute</h6>
          <input onChange={getalldata} value={education.instituteName} name='instituteName' type="text" placeholder='karachi university....' style={{ width: '100%' }} />
          {eror.instituteName && <p className='text-danger'>*{eror.instituteName.message}</p>}
        </div>
        <div className='col-5 mt-4 d-flex justify-content-between'>
          <div className='col-5'>
            <h6>Starting Date</h6>
            <input onChange={getalldata} value={education.startdate} name='startdate' type="date" style={{ width: '100%' }} />
            {eror.startdate && <p className='text-danger'>*{eror.startdate.message}</p>}
          </div>
          <div className='col-5'>
            <h6>End Date</h6>
            <input onChange={getalldata} value={education.enddate} name='enddate' type="date" style={{ width: '100%' }} />
            {eror.enddate && <p className='text-danger'>*{eror.enddate.message}</p>}
          </div>
        </div>
        <div className={` ${added ? style.added : style.main} text-center mt-3  `}>
          {!edit ?
            <button onClick={ad} className={`${style.button} btn py-3  px-3 shadow-lg`}>
              {added ? 'Added' : 'Add'}
            </button> :
            <button onClick={editext} className={`${style.button2} btn py-3  px-3 shadow-lg`}>
              {added ? 'Edited' : 'Edit'}
            </button>
          }
        </div>


      </div>

      {userEducation.length != 0 &&
        <div className={`d-flex flex-wrap justify-content-between mt-5 `}>
          {userEducation.map((val, i) =>
            <div key={i} className='d-flex flex-column col-5 '>

              <div className={`mt-3  border-3 rounded-4  p-2 shadow ${style.educationlist} `}>

                <h5 className='text-center text-primary'>{val.name}</h5>
                <h6>Institute: {val.instituteName} </h6>
                <h6>StartDate: {val.startdate} </h6>
                <h6>EndDate: {val.enddate} </h6>

              </div>
              <div className='pt-2 text-center'>
                <FaRegEdit onClick={() => update(i)} className='fs-3 text-success' style={{ cursor: 'pointer' }} />
                <MdOutlineDeleteOutline onClick={() => deleteducation(i)} className='fs-2 text-danger ms-2' style={{ cursor: 'pointer' }} />

              </div>
            </div>

          )}
        </div>
      }


      <div className='text-center'>
        <button onClick={() => naviagte('/makeResume/experience')} className={`${style.button} btn py-3 ms-4 mt-5 px-3 shadow-lg`}>
          Next to: Experience
        </button>
      </div>

    </div>
  )
}

