// client/src/pages/home.tsx

import { SEO } from '../components/SEO';
import { OrganizationJsonLd, WebSiteJsonLd } from '../components/JsonLd';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import TreatmentsSection from '../components/home/TreatmentsSection';
import DifferentialsSection from '../components/home/DifferentialsSection';
import ContactSection from '../components/home/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';

/**
 * Homepage componentizada.
 * Cada secção vive em components/home/* — o ficheiro de 798 linhas
 * passou a ser um orquestrador simples, seguindo o mesmo padrão
 * de organização do projeto GrowKind.
 */
export default function HomePage() {
  return (
    <div className='min-h-screen bg-white'>
      <SEO path='/' />
      <OrganizationJsonLd />
      <WebSiteJsonLd />

      {/* Navbar e WhatsApp vêm do Layout — não duplicar aqui. */}
      <HeroSection />
      <AboutSection />
      <TreatmentsSection />
      <DifferentialsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
