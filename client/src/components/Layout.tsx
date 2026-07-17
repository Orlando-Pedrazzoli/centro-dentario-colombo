// client/src/components/Layout.tsx

import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import MobileCtaBar from './MobileCtaBar';

export default function Layout() {
  return (
    <>
      <Navbar />
      <Outlet /> {/* Aqui renderizam as páginas */}
      <Footer />
      {/* Botão flutuante apenas em desktop — no mobile a
          MobileCtaBar já inclui o WhatsApp (evita duplicação
          e sobreposição no canto inferior) */}
      <div className='hidden md:block'>
        <WhatsAppButton />
      </div>
      <MobileCtaBar />
    </>
  );
}
