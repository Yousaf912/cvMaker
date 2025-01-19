import { configureStore } from '@reduxjs/toolkit';
import zoomslice from './Zoomslice';
import tokenSlice from './Tokenslice';
import LogedInUserInfo from './LOgedInUserInfo';
import { UserData } from './Userdata';
import { spinner } from './Spinner';




const store = configureStore({
    reducer: {
        zoom: zoomslice.reducer,
        token: tokenSlice.reducer,
        logedinuser: LogedInUserInfo.reducer,
        userData: UserData.reducer,
        spiner:spinner.reducer
       
    },
});

export default store;
