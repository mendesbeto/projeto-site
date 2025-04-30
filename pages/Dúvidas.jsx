import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function Dúvidas() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Dúvidas</h2>
        <Card><CardContent className="p-6"><h3 className="text-xl font-bold mb-2">DÚVIDAS FREQUENTES</h3><p>TIRE SUAS DÚVIDAS AQUI.</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-bold mb-2">O que é ACPSP?</h3><p>...</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-bold mb-2">Quem pode se assiciar a ACPSP ?</h3><p>...</p></CardContent></Card>
        <Card><CardContent className="p-6"><h3 className="text-xl font-bold mb-2">Qual é custo para ser associado ?</h3><p> R$ 0,00 </p></CardContent></Card>
      </main>
      <Footer />
    </>
  );
}
