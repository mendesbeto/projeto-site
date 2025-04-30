import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Institucional from './pages/Institucional';
import Convênios from './pages/Convênios';
import Benefícios from './pages/Beneficios';
import Servicos from './pages/Servicos';
import Comunicação from './pages/Comunicação';
import Noticias from './pages/Noticias';
import Dúvidas from './pages/Dúvidas';
import Contato from './pages/Contato';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/institucional' element={<Institucional />} />
        <Route path='/convênios' element={<Convênios />} />
        <Route path='/beneficios' element={<Benefícios />} />
        <Route path='/servicos' element={<Servicos />} />
        <Route path='/comunicacao' element={<Comunicação />} />
        <Route path='/noticias' element={<Noticias />} />
        <Route path='/duvidas' element={<Dúvidas />} />
        <Route path='/contato' element={<Contato />} />
      </Routes>
    </Router>
  );
}