import React, { useEffect, useState, useCallback } from 'react';
import { Button } from './ui/Button';
import { CalculatorSlider } from './ui/CalculatorSlider';
import { ShieldCheck, TrendingUp, Sun, Zap, Battery, ArrowDown, X } from 'lucide-react';

const DashboardMockup = () => {
  return (
    <div className="relative w-full max-w-full lg:max-w-2xl mx-auto lg:perspective-1000">
      {/* Float wrapper - no clipping */}
      <div className="lg:animate-float">
        {/* Card - keeps overflow-hidden for internal glow only */}
        <div className="relative z-10 bg-[#0A0A0A] rounded-[1.5rem] sm:rounded-[2rem] p-4 sm:p-6 md:p-8 shadow-2xl shadow-black/20 border border-white/10 overflow-hidden lg:transform lg:rotate-x-6 lg:rotate-y-6 transition-transform duration-500 lg:hover:rotate-0 ring-1 ring-white/10">

          {/* Subtle internal glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-solar-orange/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Dashboard Header */}
          <div className="flex justify-between items-center mb-8 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-solar-yellow to-solar-orange flex items-center justify-center shadow-lg shadow-solar-orange/20 text-white">
                 <Sun className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">Ihre Bilanz 2026</div>
                <div className="text-white font-bold text-xl flex items-center gap-2">
                  + € 2.850,- <span className="text-xs font-normal text-zinc-500">/ gespart</span>
                </div>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs text-green-400 font-medium flex items-center gap-2">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
               </span>
               100% Autark
            </div>
          </div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
            {/* Stat 1 */}
            <div className="bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-md">
               <div className="flex items-center gap-2 mb-2 text-zinc-400 text-xs font-medium uppercase tracking-wider">
                 <Zap className="w-3 h-3" /> Produktion
               </div>
               <div className="text-3xl font-bold text-white">
                 9.4 <span className="text-sm font-normal text-zinc-500">kWp</span>
               </div>
               <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-gradient-to-r from-solar-yellow to-solar-orange w-[85%]"></div>
               </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-md">
               <div className="flex items-center gap-2 mb-2 text-zinc-400 text-xs font-medium uppercase tracking-wider">
                 <Battery className="w-3 h-3" /> Speicher
               </div>
               <div className="text-3xl font-bold text-white">
                 100 <span className="text-sm font-normal text-zinc-500">%</span>
               </div>
               <div className="mt-2 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-green-500 w-full shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
               </div>
            </div>
          </div>

          {/* Graph Area */}
          <div className="mt-4 bg-white/5 rounded-2xl p-6 border border-white/5 relative z-10 backdrop-blur-md">
             <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Tagesverlauf</div>
                  <div className="text-white text-sm mt-1">Spitzenlast abgedeckt</div>
                </div>
                <div className="text-solar-yellow text-xs font-bold">+ 42kWh</div>
             </div>

             {/* Bell Curve Graph */}
             <div className="flex items-end justify-between h-24 gap-1 px-2">
                {[5, 12, 25, 45, 65, 85, 95, 100, 90, 70, 50, 30, 15, 8].map((h, i) => (
                  <div key={i} className="w-full bg-gradient-to-t from-white/5 to-white/20 rounded-t-sm relative group overflow-hidden" style={{ height: `${h}%` }}>
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-solar-orange/80 to-solar-yellow opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// Calculator savings calculation
const calculateSavings = (consumption: number, roofSize: number) => {
  const production = roofSize * 150; // kWh/m²/year
  const selfConsumption = Math.min(consumption * 0.7, production);
  const feedIn = Math.max(0, production - selfConsumption);
  const savings = (selfConsumption * 0.35) + (feedIn * 0.08);
  return {
    production,
    selfConsumption: Math.round(selfConsumption),
    feedIn: Math.round(feedIn),
    savings: Math.round(savings),
  };
};

export const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [consumption, setConsumption] = useState(4000);
  const [roofSize, setRoofSize] = useState(40);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close calculator on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && calculatorOpen) {
        setCalculatorOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [calculatorOpen]);

  // Prevent body scroll when modal is open and hide ElevenLabs widget
  useEffect(() => {
    if (calculatorOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [calculatorOpen]);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setCalculatorOpen(false);
    }
  }, []);

  const savings = calculateSavings(consumption, roofSize);

  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden bg-white">

      {/* Background - The "Beautiful Apple Light" */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Golden Sun - Top Right */}
        <div className="absolute -top-[20%] -right-[10%] w-[1200px] h-[1200px] bg-[radial-gradient(circle,rgba(255,176,41,0.12)_0%,rgba(255,255,255,0)_60%)] blur-[80px] animate-pulse-slow" />

        {/* Ambient Fill - Bottom Left */}
        <div className="absolute bottom-0 -left-[10%] w-[1000px] h-[800px] bg-[radial-gradient(circle,rgba(254,200,0,0.05)_0%,rgba(255,255,255,0)_60%)] blur-[100px]" />

        {/* Editorial Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-multiply" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Ambient Glow - positioned outside any clipping container */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] pointer-events-none z-10 hidden lg:block">
        <div className="absolute inset-0 bg-gradient-to-tr from-solar-yellow/20 to-solar-orange/25 blur-[120px] rounded-full animate-pulse-slow"></div>
      </div>

      <div className="relative z-20 container mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center overflow-hidden">

        {/* Text Content */}
        <div className={`space-y-8 text-center lg:text-left max-w-full overflow-hidden transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-solar-yellow/10 border border-solar-yellow/20 text-xs sm:text-sm font-semibold text-solar-dark mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2 flex-shrink-0">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-solar-orange opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-solar-orange"></span>
             </span>
            <span className="tracking-wide">Wien Förderung 2026</span>
          </div>

          <div className="relative">
            {/* Mobile sunny hue behind headline */}
            <div className="absolute -inset-x-8 -inset-y-4 bg-[radial-gradient(ellipse_at_center,rgba(255,176,41,0.15)_0%,rgba(254,200,0,0.08)_40%,transparent_70%)] blur-[40px] pointer-events-none lg:hidden" />
            <h1 className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-solar-dark">
              2026: Jahr ohne Stromrechnungen.
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2 text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow">
                Sparen Sie 2.800€/Jahr.
              </span>
            </h1>
          </div>

          <div className="space-y-6 max-w-xl mx-auto lg:mx-0">
            <p className="text-lg text-zinc-500 leading-relaxed font-light">
              Unsere <strong className="text-solar-dark font-medium">KI-optimierten Systeme</strong> mit Speicher und Wallbox maximieren Ihren Ertrag. <span className="text-solar-dark/70">Experten aus Wien betreuen Sie persönlich.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button variant="primary" withArrow onClick={() => document.getElementById('funnel')?.scrollIntoView({ behavior: 'smooth' })} className="shadow-2xl shadow-solar-orange/20">
              Jetzt Gratis-Analyse sichern
            </Button>
            <Button
              variant="outline"
              className="border-zinc-200 hover:bg-zinc-50"
              onClick={() => setCalculatorOpen(true)}
            >
              Ersparnis berechnen
            </Button>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 text-sm font-medium text-zinc-500">
             <div className="flex items-center gap-2">
               <ShieldCheck className="w-5 h-5 text-solar-orange" />
               <span>25 Jahre Leistungsgarantie</span>
             </div>
             <div className="w-1 h-1 rounded-full bg-zinc-300 hidden md:block"></div>
             <div className="flex items-center gap-2">
               <TrendingUp className="w-5 h-5 text-solar-orange" />
               <span>ROI in unter 7 Jahren</span>
             </div>
          </div>

        </div>

        {/* Visual Content */}
        <div className={`relative overflow-hidden lg:overflow-visible transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
           <DashboardMockup />
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-300">
        <ArrowDown className="w-6 h-6" />
      </div>

      {/* Calculator Modal */}
      {calculatorOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-lg bg-[#0A0A0A] rounded-[2rem] p-6 sm:p-8 shadow-2xl border border-white/10 animate-in zoom-in-95 duration-300">
            {/* Close button */}
            <button
              onClick={() => setCalculatorOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              aria-label="Schließen"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-solar-yellow to-solar-orange flex items-center justify-center text-white">
                  <Zap className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-white">Ersparnis berechnen</h2>
              </div>
              <p className="text-sm text-zinc-400">Passen Sie die Werte an Ihre Situation an.</p>
            </div>

            {/* Sliders */}
            <div className="space-y-8 mb-8">
              <CalculatorSlider
                label="Jährlicher Stromverbrauch"
                value={consumption}
                min={1000}
                max={10000}
                step={100}
                unit="kWh"
                onChange={setConsumption}
              />
              <CalculatorSlider
                label="Verfügbare Dachfläche"
                value={roofSize}
                min={15}
                max={100}
                step={5}
                unit="m²"
                onChange={setRoofSize}
              />
            </div>

            {/* Results */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5 mb-6">
              <div className="text-xs text-zinc-400 uppercase tracking-wider font-medium mb-3">
                Ihre geschätzte Ersparnis pro Jahr
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow">
                € {savings.savings.toLocaleString('de-DE')},-
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                <div>
                  <div className="text-xs text-zinc-500">Eigenverbrauch</div>
                  <div className="text-white font-semibold">{savings.selfConsumption.toLocaleString('de-DE')} kWh</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500">Einspeisung</div>
                  <div className="text-white font-semibold">{savings.feedIn.toLocaleString('de-DE')} kWh</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="primary"
              fullWidth
              withArrow
              onClick={() => {
                setCalculatorOpen(false);
                document.getElementById('funnel')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="shadow-2xl shadow-solar-orange/20"
            >
              Individuelle Analyse anfordern
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
