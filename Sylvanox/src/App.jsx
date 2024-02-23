import './App.css'
import NavBar from './components/NavBar/NavBar'
import Jugar from './components/L_Jugar/Jugar'
import Mapa from './components/L_Mapa/Mapa'
import Mazo from './components/L_Mazo/Mazo'
import Reglas from './components/L_Reglas/Reglas'
import Tienda from './components/L_Tienda/Tienda'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='background'>
      <BrowserRouter>
      <div>
        <NavBar/>
        <Routes>
          {/* <Route path='/' element={<App/>} /> */}
          <Route path='/Jugar' element={<Jugar/>} />
          <Route path='/Mapa' element={<Mapa/>} />
          <Route path='/Mazo' element={<Mazo/>} />
          <Route path='/Reglas' element={<Reglas/>} />
          <Route path='/Tienda' element={<Tienda/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App