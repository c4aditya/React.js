import React ,{useContext} from "react";
import {userContaxtdata} from "./contatx/UserContaxt"

 export const  Home  =()=>{
    const {user ,setuser} = useContext(userContaxtdata)

    return(
        <>
        <h1>Welcome , {user}</h1>
        </>
    )
}