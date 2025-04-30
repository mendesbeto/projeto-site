import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contato() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Contato</h2>
        <div className="space-y-2">
          <p>Endereço: Rua Exemplo, 123 - Centro - Cidade/UF</p>
          <p>Telefone: (00) 0000-0000</p>
          <p>Email: contato.acpsp@gmail.com.br</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
