import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import de Router
import Router from './components/Router.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)