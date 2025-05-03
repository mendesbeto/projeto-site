import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">ACPSP</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/institucional" className="hover:underline">Institucional</Link>
          <Link to="/servicos" className="hover:underline">Serviços</Link>
          <Link to="/convenios" className="hover:underline">Convênios</Link>
          <Link to="/noticias" className="hover:underline">Notícias</Link>
          <Link to="/contato" className="hover:underline">Contato</Link>
        </nav>
      </div>
    </header>
  );
}