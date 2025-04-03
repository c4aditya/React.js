import { userContaxtProvider } from "./contatx/UserContaxtProvider"
import { Home } from "./Home"

function App() {
 

  return (
    <div>
    <userContaxtProvider>
      <Home/>
    </userContaxtProvider>
    </div>
  )
}

export default App
