
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from '../src/components/ScrollToTop';
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'


import CantantesG from './pages/(GenerosP)/CantantesG'
import DetalleC from './pages/(DetalleC)/Detalle'
import DetalleD from './pages/(DetalleD)/Detalle'
import DiscografiasG from './pages/(GenerosP)/DiscografiasG';


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Header/>
        <ScrollToTop/>
          <Routes>
           <Route path="/" element={<Inicio/>} />
           <Route path="/inicio" element={<Inicio/>} />
           <Route path="/cantantesg/:id" element={<CantantesG/>} />
           <Route path="/discografiasg/:id" element={<DiscografiasG/>} />
           <Route path="/detallec/:id" element={<DetalleC/>} />
           <Route path="/detalled/:id" element={<DetalleD/>} />
           <Route path="*" element={<Inicio/>} />

          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
