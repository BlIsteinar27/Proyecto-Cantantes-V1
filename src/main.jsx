import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Cambia el nombre del tema según tu elección
import 'primereact/resources/primereact.min.css'; // CSS principal de PrimeReact
import 'primeicons/primeicons.css'; // CSS para los íconos
import "@madzadev/audio-player/dist/index.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
