import { configureStore } from '@reduxjs/toolkit';
import zoomslice from './Zoomslice';

const store = configureStore({
    reducer: {
        zoom:zoomslice.reducer
        
    },
});

export default store;
