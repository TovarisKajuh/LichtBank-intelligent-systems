import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export const FloatingCTA = () => {
  const [visible, setVisible] = useState(false);
  const [nearForm, setNearForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      const scrolled = window.scrollY > 500;

      // Hide when near the form section
      const formElement = document.getElementById('funnel');
      if (formElement) {
        const formRect = formElement.getBoundingClientRect();
        const isNearForm = formRect.top < window.innerHeight && formRect.bottom > 0;
        setNearForm(isNearForm);
      }

      setVisible(scrolled && !nearForm);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, [nearForm]);

  const scrollToForm = () => {
    document.getElementById('funnel')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToForm}
      className={`fixed bottom-6 left-4 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-solar-orange to-solar-yellow text-solar-dark font-bold shadow-lg shadow-solar-orange/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-solar-orange/40 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <span>Ihr Angebot</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  );
};
