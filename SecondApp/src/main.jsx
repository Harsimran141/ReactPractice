import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import User from './User.jsx'
import Form from './Form.jsx'
import './index.css'
import App from './App.jsx'
import Label from './Label.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <User/> */}
    {/* <Form/> */}
    <Label/>
  </StrictMode>,
)
