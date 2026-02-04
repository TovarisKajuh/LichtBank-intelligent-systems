import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Vorteile } from './components/Vorteile';
import { Ablauf } from './components/Ablauf';
import { Referenzen } from './components/Referenzen';
import { Comparison } from './components/Comparison';
import { Foerderung } from './components/Foerderung';
import { FunnelForm } from './components/FunnelForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { LegalModals, LegalPage } from './components/LegalModals';

const App: React.FC = () => {
  const [legalPage, setLegalPage] = useState<LegalPage>(null);

  return (
    <div className="font-sans antialiased text-solar-dark bg-[#FAFAFA] min-h-screen selection:bg-solar-yellow selection:text-solar-dark">
      <Navbar />

      <main>
        <Hero />

        {/* Benefits Section */}
        <Vorteile />

        {/* Process Timeline */}
        <Ablauf />

        {/* Portfolio & Testimonials */}
        <Referenzen />

        {/* Comparison Table */}
        <Comparison />

        {/* Subsidies Section */}
        <Foerderung />

        {/* Lead Capture Form */}
        <FunnelForm />

        {/* FAQ */}
        <FAQ />
      </main>

      <Footer onLegalPageClick={setLegalPage} />

      {/* Floating CTA Button */}
      <FloatingCTA />

      {/* Legal Pages Modals */}
      <LegalModals activePage={legalPage} onClose={() => setLegalPage(null)} />
    </div>
  );
};

export default App;
