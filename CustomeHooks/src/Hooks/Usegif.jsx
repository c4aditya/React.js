import { useEffect, useState } from "react"
//importing spinner 


// search gif 
// const Search_gif_url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
 
// import Spinner from "../components/Spinner.jsx";

// we have to create a two URL first ome is for randomgif.jsx and second one for Searchgif
// random gif


// import process from "react"
import axios from "axios";
// ye tag ko as a parameter le rha hai kyo ki isme serchGif vlae cmponent me tag as a inputfeild hai
export default function Usegif(tag) {
    // const [tag ,setTag]=useState("")
    const [gif, setGif] = useState("")
    const API_KEY = "TaTcBjzO6tlilymle2PiVMIBemAWIqYg"
    const Rendom_gif_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const Search_gif_url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    const URL = tag ?  Search_gif_url: Rendom_gif_url ;

    const [loading,setLoading] = useState(true)


    // async function beacuse i have to call the API 

    async function fetchData() {
        // api fetch 

      

        try {
            // yhaa pe hume ye krna hai ki kon sha url use hoo rha hai ex- searchGif vala ya RandomGif wala to usse ke hishb se gif show hoga to ise hum ptaa krnge tag se 
            // agr tag pass hua hai to tag vala urlkaam krega agr tag vala run nhi hoga to random wala url run hoga 
            setLoading(true)
            const data = await axios(URL)   
            // const { data } = await axios.get(URL)
            console.log(data)
            // getting image
            const Image_source = data.data.data.images.downsized_large.url;
            console.log(Image_source)
             setGif(Image_source)
             setLoading(false)

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

    return{gif, loading , fetchData};

    // function clickHandler() {
    //     console.log("The Genarate button is clicked ")
    //     fetchData()        
    // }

    // function changeHandler(event){
    //     setTag(event.target.value)
    //     console.log(tag)

    // }

 
// in hooks we did't need an jsx code 
    // return (
    //     <>
    //         <div className="top-randomGif">
    //             <h1>Random {tag}</h1>

    //             {  
    //           // if the loading is true then we show spinner else show image or gif 
    //           //  loading ? (<Spinner/>) : (image)
    //             loading ? (<Spinner/>) : (<img src={gif} alt="gif not found " width="59%" />)
                    
    //             }

                
    //             <input 
                
    //             className="input"
    //             onChange={changeHandler}
    //             value={tag}

    //             />
    //             <button onClick={clickHandler} className="gif-generator">Generate Gif</button>
    //         </div>
    //     </>
    // )

    // note in custome hooks humm bs usnhi ko rakhte hai jika use hum function me kr rhe hai like fetch data etc.

}