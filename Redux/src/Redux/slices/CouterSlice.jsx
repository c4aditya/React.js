
// step 1 - get a function for creating a slice  ie CreateSlice({})

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value : 0 ,
}
// step 2- create slice function contain a object whit takes three parameter 
export const CounterSlice  = createSlice(

// step - 3 - 1 name , 2 - initialState , 3- reducer (functionality of the slice )    
        {
          name :"counter", // name of the slice 
          initialState,
          reducer:{
            // it will conatain the functionalityes with key and value pairs 

            increment:(state)=>{
                state.value += 1;
            },

            decrement:(state)=>{
                 state.value -= 1;
            },

            reset:(state)=>{
               state.value = 0 ;
            }

            

        } 
    }
)

// step 5  export those function which are written in coutnerSlice for destructuring the fnction we use  action it is a syntax 

 export  const {increment , decrement ,reset} = CounterSlice.actions;

// step -6 
 export default CounterSlice.reducer;