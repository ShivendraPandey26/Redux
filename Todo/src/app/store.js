import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feauters/todoSlice.js';


const store = configureStore({
    reducer : todoReducer
});

export default store;