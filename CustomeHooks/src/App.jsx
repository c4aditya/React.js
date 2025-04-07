// impoting randomGif .jsx
import RandomGif from "./components/RendomGif";
import SearchGif from "./components/SearchGif";
// importing css 
import "./App.css"
function App() {
  
  return (
    <>
   <div className="main-class">
    <div className="headings">
      <h1>Rendome Gif</h1>
    </div>

    <div>
      <RandomGif/>
    </div>

    <div>
      <SearchGif/>
    </div>

   </div>
     
    
    </>
  )
}

export default App
