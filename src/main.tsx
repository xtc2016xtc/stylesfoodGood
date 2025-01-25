import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/*备注*/
const charAt = `
    ███████╗██╗     ███████╗██╗   ██╗██╗███████╗
    ██╔════╝██║     ██╔════╝██║   ██║██║██╔════╝
    █████╗  ██║     █████╗  ██║   ██║██║███████╗
    ██╔══╝  ██║     ██╔══╝  ╚██╗ ██╔╝██║╚════██║
    ███████╗███████╗███████╗ ╚████╔╝ ██║███████║
    ╚══════╝╚══════╝╚══════╝  ╚═══╝  ╚═╝╚══════╝
`;
console.info(`%c${charAt}`, "color: #5BE49B");


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
