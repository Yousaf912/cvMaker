import { createSlice } from "@reduxjs/toolkit";

export const IMG = createSlice({
    name:'IMG',
    initialState:{
        img:false
    },
    reducers:{
        setimg:(state,action)=>{
            state.img = action.payload
        }
    }
})

export const {setimg} = IMG.actions