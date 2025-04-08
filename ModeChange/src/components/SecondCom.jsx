
// import app contaxt 
import { useContext } from "react"
import { AppContaxt } from "../ContaxtAPI/Appcontaxt"
// create a function or component 

export default function SecondCom(){

// step 1 - jo bhi data mujko use krna hai usko lo 
const {Data_BCA } = useContext(AppContaxt) ;

return(
    <>
{
Data_BCA.map((dat)=>(
    <p key={dat.id}> {dat.class} </p>
))
}

</>
)


}