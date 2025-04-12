
// use configStore for creating an store 

import { configureStore } from "@reduxjs/toolkit";
import { CounterSlice } from "./Redux/slices/CouterSlice";
export const store = configureStore({
    reducer:{
        // step -7  name of the slice :  //name of the  reducre 
        counter:CounterSlice.reducer,
    },
})