import { createSlice } from "@reduxjs/toolkit";

export const spinner = createSlice({
    name:'Spinner',
    initialState:{
        spinner:false
    },
    reducers:{
        setSpinner:(state,action)=>{
            state.spinner = action.payload
        }
    }
})

export const {setSpinner} = spinner.actions