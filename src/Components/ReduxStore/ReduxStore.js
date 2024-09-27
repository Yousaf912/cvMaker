import { configureStore } from '@reduxjs/toolkit';
import zoomslice from './Zoomslice';
import tokenSlice from './Tokenslice';

const store = configureStore({
    reducer: {
        zoom:zoomslice.reducer,
        token:tokenSlice.reducer
        
    },
});

export default store;
