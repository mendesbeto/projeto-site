import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <section className="flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold">Bem-vindo à ASPP</h2>
        <p className="text-lg mt-4 max-w-2xl">
          Apoio, benefícios e informação para servidores públicos e seus dependentes.
        </p>
      </section>
      <section className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">Fale Conosco</h3>
        <form
          action="https://formspree.io/f/SEU_ENDPOINT_AQUI"
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            className="w-full p-2 border rounded"
          />
          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            required
            rows="5"
            className="w-full p-2 border rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded"
          >
            Enviar
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}