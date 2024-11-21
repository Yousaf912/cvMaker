import { configureStore } from '@reduxjs/toolkit';
import zoomslice from './Zoomslice';
import tokenSlice from './Tokenslice';
import LogedInUserInfo from './LOgedInUserInfo';

const store = configureStore({
    reducer: {
        zoom:zoomslice.reducer,
        token:tokenSlice.reducer,
        logedinuser:LogedInUserInfo.reducer
    },
});

export default store;
