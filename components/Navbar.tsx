import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-solar-grey/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-solar-dark cursor-pointer flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-solar-yellow to-solar-orange"></div>
          LichtBank
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Vorteile', 'Ablauf', 'Referenzen', 'Förderung'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-solar-dark/70 hover:text-solar-dark transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary" className="!px-6 !py-2 !text-sm">Angebot</Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-solar-dark" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-solar-grey/10 p-6 md:hidden shadow-xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            {['Vorteile', 'Ablauf', 'Referenzen', 'Förderung'].map((item) => (
              <a key={item} href="#" className="text-lg font-medium text-solar-dark" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <Button variant="primary" fullWidth className="mt-4" onClick={() => setMobileMenuOpen(false)}>
              Kostenloses Angebot
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};