import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import NuestrasTiendas from './pages/NuestrasTiendas'
import PreguntasFrecuentes from './pages/PreguntasFrecuentes'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />
        
        <main className='flex-grow-1'>
          <Routes>
            <Route path='/' element={<Inicio />}/>
            <Route path='/nuestras-tiendas' element={<NuestrasTiendas />}/>
            <Route path='/preguntas-frecuentes' element={<PreguntasFrecuentes />}/>
          </Routes>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
