import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Institucional from './pages/Institucional';
import Convenios from './pages/Convenios';
import Beneficios from './pages/Beneficios';
import Servicos from './pages/Servicos';
import Comunicacao from './pages/Comunicacao';
import Noticias from './pages/Noticias';
import Duvidas from './pages/Duvidas';
import Contato from './pages/Contato';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/institucional' element={<Institucional />} />
        <Route path='/convenios' element={<Convenios />} />
        <Route path='/beneficios' element={<Beneficios />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/comunicacao' element={<Comunicacao />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/duvidas' element={<Duvidas />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </Router>
  );
}