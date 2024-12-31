import { createSlice } from "@reduxjs/toolkit";

export const UserData = createSlice({
    name:'Userdata',
    initialState:{
        data:{}
    },
    reducers:{
        setAllUserdata:(state,action)=>{
            state.data= action.payload
        }
    }
})

export const {setAllUserdata}=UserData.actions;