import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Radiobtn from './Radiobtn.jsx'
import Map from './Map.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   <Map/>
  </StrictMode>,
)
