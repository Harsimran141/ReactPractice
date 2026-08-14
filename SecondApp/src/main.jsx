import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import Counteruse from './Counteruse.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counteruse/>
 
  </StrictMode>,
)
