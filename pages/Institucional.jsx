import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function Institucional() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Institucional</h2>
        <Card><CardContent className="p-6"><h3 className="text-xl font-bold mb-2">História</h3><p>A ACPSP é uma associação que tem por finalidade congregar servidores públicos e seus dependentes, oferecendo serviços de assistência social e outros benefícios.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-bold mb-2">Missão</h3><p>Promover qualidade de vida aos associados, por meio de serviços e ações de assistência social.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-bold mb-2">Visão</h3><p>Ser reconhecida como a melhor associação de servidores públicos do Brasil.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-bold mb-2">Valores</h3><ul className="list-disc pl-6 space-y-1"><li>Ética</li><li>Comprometimento</li><li>Transparência</li><li>Respeito</li><li>Inovação</li></ul></CardContent></Card>
      </main>
      <Footer />
    </>
  );
}