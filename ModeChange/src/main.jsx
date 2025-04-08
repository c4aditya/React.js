
import { createRoot } from 'react-dom/client'
import AppContaxtProvider from "./ContaxtAPI/Appcontaxt"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <AppContaxtProvider>
    <App />
    </AppContaxtProvider>
 
)
