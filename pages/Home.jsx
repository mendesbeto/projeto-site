import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <section className="text-center py-12">
        <h2 className="text-3xl font-bold">Bem-vindo ao CSP</h2>
        <p className="text-lg mt-2">Apoio, benefícios e informação para servidores públicos e seus dependentes.</p>
      </section>
      <Footer />
    </>
  );
}