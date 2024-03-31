import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import {Inicio} from './Paginas/Inicio';
import Nosotros from './Paginas/Nosotros';
import Productos from './Paginas/Productos';
import Servicios from './Paginas/Servicios';
import Contacto from './Paginas/Contacto';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Servicios' element={<Servicios/>}/>
          <Route path='/Nosotros' element={<Nosotros/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
