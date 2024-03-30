import './App.css';
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import {Inicio} from './Paginas/Inicio';
import Contacto from './Paginas/Contacto';
import Productos from './Paginas/Productos';
import SobreNosotros from './Paginas/SobreNosotros';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/SobreNosotros' element={<SobreNosotros/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
