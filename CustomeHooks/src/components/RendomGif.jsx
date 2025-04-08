import { useEffect, useState } from "react"
//importing spinner 

import Spinner from "./Spinner.jsx";

// import process from "react"
// import axios from "axios";

import Usegif from "../Hooks/Usegif.jsx"
export default function RandomGif() {
    // const [gif, setGif] = useState("")
    // const API_KEY = "TaTcBjzO6tlilymle2PiVMIBemAWIqYg"
    // const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    // const [loading,setLoading] = useState(false)


    // async function beacuse i have to call the API 

    // async function fetchData() {
    //     // api fetch 

    //     try {
    //         // yha ye true hai means jb fetch data call hoga uske baad jb tk image load nhi le rha hai tb tk loding screen show ho 
    //         // setLoading(true)
    //         const { data } = await axios.get(URL)
    //         console.log(data)
    //         // getting image
    //         const Image_source = data.data.images.downsized_large.url
    //         console.log(Image_source)
    //         setGif(Image_source)

    //     }
    //     // if getting an error while fetching the api 
    //     catch (error) {
    //         console.log(error)
    //         console.log("There is an error while fetching the data ")
    //     }
    // }
    // // calling the fectdata 

    // useEffect(() => {
    //     fetchData()
    // }, [])
    const {gif,loading,fetchData} = Usegif();

    function clickHandler() {
        console.log("The Genarate button is clicked ")
         fetchData()        
    }

 

    return (
        <>
            <div className="top-randomGif">
                <h1>Random Gif</h1>

                {  
              // if the loading is true then we show spinner else show image or gif 
              //  loading ? (<Spinner/>) : (image)
                loading ? (<Spinner/>) : (<img src={gif} alt="gif not found " width="59%" />)
                    
                }



                

                <button onClick={clickHandler} className="gif-generator">Generate Gif</button>
            </div>
        </>
    )

}