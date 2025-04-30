import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

export default function Comunicação() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto p-4 space-y-6">
        <h2 className="text-2xl font-bold mb-4">Comunicação</h2>
        <Card><CardContent className="p-6"><p>Acompanha nos nas redes sociaias.</p></CardContent></Card>
      </main>
      <Footer />
    </>
  );
}