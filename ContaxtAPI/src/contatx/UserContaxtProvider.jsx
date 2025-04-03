 import React, { Children } from "react";

 // import userContaxt.js

import {userContaxt} from "./userContaxt"


export const userContaxtProvider = ({userData}) =>{
    const [user ,setuser]= React.useState("rahul")

    return (

        <userContaxt.Provider value ={{user , setuser}}>
            {/* means chlidern ke jgh pejo bhi component rgeha iss user yani rahul ko use krega mtlb ye data usme pass hoga  */}
        {Children} 
        </userContaxt.Provider>
    )


}

