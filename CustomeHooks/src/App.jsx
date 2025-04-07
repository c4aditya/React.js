// impoting randomGif .jsx
import RandomGif from "./components/RendomGif"
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

    {/* <div className="gif-box">

      <div className="gif-first">

      </div>

      <div className="git-second">

      </div>
    </div> */}
   </div>
     
    
    </>
  )
}

export default App
