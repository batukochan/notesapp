import { configureStore } from "@reduxjs/toolkit";
import noteSlice from './noteSlices/noteSlice'

const store = configureStore({
    reducer:{
        notes:noteSlice
    }
})

export default store;