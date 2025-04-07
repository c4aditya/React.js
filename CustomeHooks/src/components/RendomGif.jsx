import { useEffect, useState } from "react"

// import process from "react"
import axios from "axios";
export default function RandomGif() {
    const [gif, setGif] = useState(" ")
    const API_KEY = "TaTcBjzO6tlilymle2PiVMIBemAWIqYg"
    const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    


    // async function beacuse i have to call the API 

    async function fetchData() {
        // api fetch 

        try {
            const { data } = await axios.get(URL)
            console.log(data)
            // getting imafe 
            const Image_source = data.data.images.downsized_large.url

            console.log(Image_source)
            setGif(Image_source)

        }
        // if getting an error while fetching the api 
        catch (error) {
            console.log(error)
            console.log("There is an error while fetching the data ")
        }
    }
    // calling the fectdata 

    useEffect(() => {
        fetchData()
    }, [])


    function clickHandler() {
        console.log("The Genarate button is clicked ")
        fetchData()
        // setGif(Image_source)
    }
    return (
        <>
            <div className="top-randomGif">
                <h1>Random Gif</h1>

                <img src={gif} alt="gif not found " />

                <button onClick={clickHandler} className="gif-generator">Generate Gif</button>
            </div>
        </>
    )

}