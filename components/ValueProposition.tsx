import React, { useRef, useState } from 'react';
import { Zap, PiggyBank, Home, ArrowUpRight, LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stat?: string;
}

const ValueCard = ({ icon: Icon, title, description, stat }: ValueCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-solar-grey/20 hover:-translate-y-2 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,176,41,0.15), transparent 40%)`
        }}
      />
      
      <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <ArrowUpRight className="w-6 h-6 text-solar-orange" />
      </div>
      
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-solar-yellow/10 flex items-center justify-center mb-6 text-solar-orange group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="relative z-10 text-2xl font-bold text-solar-dark mb-4">{title}</h3>
      <p className="relative z-10 text-solar-dark/70 leading-relaxed mb-6">
        {description}
      </p>
      
      {stat && (
        <div className="relative z-10 pt-6 border-t border-solar-grey/10">
          <span className="block text-xs text-solar-grey uppercase tracking-wider font-semibold">Ihr Vorteil</span>
          <span className="text-3xl font-bold text-solar-dark bg-clip-text text-transparent bg-gradient-to-r from-solar-dark to-solar-orange/80">{stat}</span>
        </div>
      )}
    </div>
  );
};

export const ValueProposition = () => {
  return (
    <section className="py-32 px-6 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Background Decor to add contrast/interest */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,176,41,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-extrabold text-solar-dark mb-8 tracking-tight">
            Die Sonne stellt keine <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow">Rechnung.</span>
          </h2>
          
          <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-solar-grey/10 max-w-3xl mx-auto">
             <p className="text-xl md:text-2xl text-solar-dark/80 font-medium leading-relaxed">
               <span className="block mb-4 text-solar-orange font-bold uppercase text-sm tracking-widest">Die Chance 2026</span>
               "Nutzen Sie das historische Zeitfenster: Noch nie waren die Förderungen in Wien so hoch und die Technologie so effizient wie heute. Wer jetzt investiert, sichert sich dauerhaft günstige Energie für die nächsten 30 Jahre."
             </p>
             <div className="mt-6 flex items-center justify-center gap-2">
                <div className="h-1 w-12 bg-solar-gradient rounded-full"></div>
                <div className="h-1 w-2 bg-solar-grey/30 rounded-full"></div>
                <div className="h-1 w-2 bg-solar-grey/30 rounded-full"></div>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <ValueCard 
            icon={PiggyBank}
            title="Maximale Förderung"
            description="Wien fördert wie nie zuvor. Wir holen für Sie bis zu 30% der Investitionssumme zurück und kümmern uns um den gesamten Papierkram mit der Stadt."
            stat="€ 0,- Umsatzsteuer"
          />
          <ValueCard
            icon={Zap}
            title="Selbstlernendes System"
            description="Intelligente Wechselrichter, Smart Meter und Speicher bilden ein vernetztes System. Es lernt Ihre Gewohnheiten und optimiert den Energiefluss automatisch, sodass Sie bis zu 90% autark werden."
            stat="90% weniger Netzstrom"
          />
          <ValueCard 
            icon={Home}
            title="Sofortige Wertsteigerung"
            description="Eine Solaranlage ist die einzige Renovierung, die Geld verdient. Sie steigern den Wert Ihrer Immobilie sofort und verbessern den Energieausweis drastisch."
            stat="+15% Hauswert"
          />
        </div>
      </div>
    </section>
  );
};