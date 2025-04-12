import {useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "../Redux/slices/CouterSlice"

export  default function Counter(){
    // step -6  useSelector hook is used to fetch data from the slice 
   const count = useSelector((state)=> state.counter.value)
   // step 7 - we use for click useDispatch hook for any functcion related to click 
   const dispatch = useDispatch()


    return(
        <>
        <h1>this is th ecounter</h1>
        <div>
            <button onClick={()=> dispatch(increment()) }>Incremetn</button>
            {count}
            <button onClick={()=>dispatch(decrement())}>Decremnt </button>
            <button onClick={()=>dispatch(reset())}>reset </button>
        </div>
        </>
    )
}