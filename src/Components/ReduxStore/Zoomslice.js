import { createSlice } from "@reduxjs/toolkit";

const zoomslice = createSlice({
    name:'zoom',
    initialState:{
        zoomlevel:1
    },
    reducers:{
        zoomValue:(state,action)=>{
            state.zoomlevel = action.payload
        },
       

    }
})

export const {zoomValue}=zoomslice.actions;
export default zoomslice;
