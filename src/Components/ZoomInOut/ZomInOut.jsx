
import React, { useEffect, useState } from 'react';
import { TfiZoomIn, TfiZoomOut } from "react-icons/tfi";
import {useDispatch, useSelector} from 'react-redux'
import { zoomValue } from '../ReduxStore/Zoomslice';




const ZoomInOut = () => {
    const dispatch = useDispatch()
    const [zoomLevel, setZoomLevel] = useState(1);

    const minZoomLevel = 0.4; 
    const maxZoomLevel = 1.1;  
    
    const handleZoomIn = () => {
        setZoomLevel(prev => (prev < maxZoomLevel ? prev + 0.1 : prev));
    };
    
    const handleZoomOut = () => {
        setZoomLevel(prev => (prev > minZoomLevel ? prev - 0.1 : prev));
    };

    useEffect(()=>{
        dispatch(zoomValue(zoomLevel))
    },[zoomLevel])

    

    return (

        <div className='d-flex justify-content-between align-items-center  ' style={{width:'100%'}}>

            <button onClick={handleZoomIn} style={{cursor:'pointer',border:'none',outline:'none'}} className='p-2 me-3 rounded-circle text-white bg-primary'>
                <TfiZoomIn className='fs-4' />
            </button>
            <span className='text-primary'>ZoomIn / ZoomOut</span>
            <button onClick={handleZoomOut} style={{cursor:'pointer',border:'none',outline:'none'}} className='p-2 ms-3 rounded-circle text-white bg-primary'>
                <TfiZoomOut className='fs-4 ' />
            </button>
        </div>


    );
};

export default ZoomInOut;