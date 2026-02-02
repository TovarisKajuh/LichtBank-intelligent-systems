import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Features } from './components/Features';
import { SocialProof } from './components/SocialProof';
import { Comparison } from './components/Comparison';
import { FAQ } from './components/FAQ';
import { FunnelForm } from './components/FunnelForm';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-solar-dark bg-[#FAFAFA] min-h-screen selection:bg-solar-yellow selection:text-solar-dark">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Features: Moved up, now includes AI messaging */}
        <Features />
        
        {/* Trust: Wien vertraut uns */}
        <SocialProof />
        
        {/* Value: The "What" */}
        <ValueProposition />
        
        {/* Differentiation: White glass look */}
        <Comparison />
        
        {/* Action: The Close */}
        <FunnelForm />

        {/* FAQ: Moved under the form, white/glass style */}
        <FAQ />
      </main>

      <Footer />
    </div>
  );
};

export default App;