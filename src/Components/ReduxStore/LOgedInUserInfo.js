import { createSlice } from "@reduxjs/toolkit";

const LogedInUserInfo = createSlice({
    name:'LogedInUSerInfo',
    initialState:{
        user:{}
    },
    reducers:{
        setLogedInUser:(state,action)=>{
          state.user=action.payload
            
        }
    }
})

export default LogedInUserInfo;
export const {setLogedInUser} = LogedInUserInfo.actions;