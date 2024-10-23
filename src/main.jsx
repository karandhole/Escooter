import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import Montserrat font
import '@fontsource/montserrat'; // Defaults to weight 400
import '@fontsource/montserrat/300.css'; // Light weight
import '@fontsource/montserrat/700.css'; // Bold weight


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
