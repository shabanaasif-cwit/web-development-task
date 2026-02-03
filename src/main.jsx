import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'   // Global resets and body styling
import './App.css'     // <--- ADD THIS LINE to load Tailwind and custom buttons
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> {/*did not render anything but double check your logic or warn you */}
    <App />
  </StrictMode>,
)
