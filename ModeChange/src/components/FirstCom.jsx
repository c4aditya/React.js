import { useContext } from "react";
import { AppContaxt } from "../ContaxtAPI/Appcontaxt";
export default function FirstCom(){
    const { Data_BCA } = useContext(AppContaxt);

    return(
        <div>
            {
                Data_BCA.map((data_items)=>(
                  
                    <p key={data_items.id}>{data_items.name}</p>
                  )
                )
            }
        </div>
    )

}