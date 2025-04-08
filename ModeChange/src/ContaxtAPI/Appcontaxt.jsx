// step 1 - cretae an contaxt 

import {createContext } from "react";

export const AppContaxt = createContext();

// step 2 create an provider 

 export default function AppcontaxtProvider({children}){
// childern ka mtlb ye hai ki jo-jo component isko use krenge use hum chlidren bolte hai.
// ex :-  <AppContaxtProvider>
//          <App />
//        </AppContaxtProvider>


// step 3 write those data which is you want to pass
const Data_MCA = [
    {
        id :1,
        name:"Saurabh",
        class:"MCA"
    },

    {
        id :2,
        name:"Saurabh",
        class:"MCA"
    },
    {
        id :3,
        name:"Saurabh",
        class:"MCA"
    },
    {
        id :4,
        name:"Saurabh",
        class:"MCA"
    }


]

const Data_BCA = [
    {
        id :1,
        name:"Saurabh",
        class:"BCA"
    },

    {
        id :2,
        name:"Saksjdh",
        class:"BCA"
    },
    {
        id :3,
        name:"Skasdh",
        class:"BCA"
    },
    {
        id :4,
        name:"asdhashd",
        class:"BCA"
    }


]
return(
    <AppContaxt.Provider value={{Data_BCA  ,Data_MCA}}>
     {children}
    </AppContaxt.Provider>
)
}
