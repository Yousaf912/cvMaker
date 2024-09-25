
import React, { useEffect, useState } from 'react';
import { TfiZoomIn, TfiZoomOut } from "react-icons/tfi";
import {useDispatch, useSelector} from 'react-redux'
import { zoomValue } from '../ReduxStore/Zoomslice';




const ZoomInOut = () => {
    const dispatch = useDispatch()
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleZoomIn = () => {
        setZoomLevel(prev => prev + 0.1);
    };

    const handleZoomOut = () => {
        setZoomLevel(prev => (prev > 0.1 ? prev - 0.1 : prev));
    };

    useEffect(()=>{
        dispatch(zoomValue(zoomLevel))
    },[zoomLevel])

    

    return (

        <div className='d-flex justify-content-between align-items-center  ' style={{width:'100%'}}>

            <div onClick={handleZoomIn} className='p-2 rounded-circle text-white bg-primary'>
                <TfiZoomIn className='fs-4' />
            </div>
            <span className='text-primary'>ZoomIn / ZoomOut</span>
            <div onClick={handleZoomOut} className='p-2 rounded-circle text-white bg-primary'>
                <TfiZoomOut className='fs-4 ' />
            </div>
        </div>


    );
};

export default ZoomInOut;