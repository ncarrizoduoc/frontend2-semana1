import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <>
      <div className='d-flex flex-column min-vh-100'>
        <Navbar />
        
        <main>
          <Routes>

          </Routes>
        </main>
        
        <Footer />
      </div>
    </>
  )
}

export default App
