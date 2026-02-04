import React, { useRef, useState } from 'react';
import { PiggyBank, Zap, Home, Shield, Leaf, Wrench, LucideIcon } from 'lucide-react';

interface BentoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  large?: boolean;
}

const BentoCard = ({ icon: Icon, title, description, stat, large = false }: BentoCardProps) => {
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
      className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-solar-grey/20 hover:-translate-y-1 overflow-hidden ${large ? 'md:col-span-2' : ''}`}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 rounded-3xl"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,176,41,0.15), transparent 40%)`
        }}
      />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-solar-yellow/10 flex items-center justify-center mb-6 text-solar-orange group-hover:scale-110 transition-transform duration-500">
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-2xl font-bold text-solar-dark mb-3">{title}</h3>
        <p className="text-solar-dark/60 leading-relaxed mb-6">{description}</p>

        <div className="pt-4 border-t border-solar-grey/10">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow">
            {stat}
          </span>
        </div>
      </div>
    </div>
  );
};

export const Vorteile = () => {
  const benefits = [
    {
      icon: PiggyBank,
      title: "Maximale Förderung",
      description: "Wir holen für Sie bis zu 30% der Investitionssumme zurück. Die EAG-Förderung plus Wien-Bonus machen 2026 zum idealen Zeitpunkt.",
      stat: "bis zu €4.600 zurück",
      large: true
    },
    {
      icon: Zap,
      title: "Energieunabhängigkeit",
      description: "Intelligente Speicher und smarte Wechselrichter machen Sie nahezu autark. Kein Zittern mehr vor der nächsten Stromrechnung.",
      stat: "90% Autarkie",
      large: true
    },
    {
      icon: Home,
      title: "Wertsteigerung",
      description: "Eine Solaranlage ist die einzige Renovierung, die Geld verdient und gleichzeitig den Immobilienwert steigert.",
      stat: "+15% Hauswert",
      large: false
    },
    {
      icon: Shield,
      title: "Fixe Energiekosten",
      description: "Während Strompreise steigen, bleibt Ihre Sonnenenergie kostenlos. 30 Jahre Preissicherheit.",
      stat: "30 Jahre sicher",
      large: false
    },
    {
      icon: Leaf,
      title: "Umweltschutz",
      description: "Jede Anlage spart durchschnittlich 4 Tonnen CO₂ pro Jahr. Ihr aktiver Beitrag zur Klimawende.",
      stat: "4t CO₂/Jahr",
      large: false
    },
    {
      icon: Wrench,
      title: "Wartungsfrei",
      description: "Premium-Komponenten mit 25 Jahren Garantie. Keine versteckten Kosten, kein Aufwand für Sie.",
      stat: "25 Jahre Garantie",
      large: false
    }
  ];

  return (
    <section id="vorteile" className="py-24 px-6 bg-[#FAFAFA] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(255,176,41,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-solar-dark mb-6">
            Warum jetzt auf Solar umsteigen?
          </h2>
          <p className="text-lg text-solar-dark/60 max-w-2xl mx-auto">
            2026 bietet die beste Kombination aus Förderungen, Technologie und Energiepreisen. Hier sind Ihre Vorteile.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((benefit, i) => (
            <BentoCard key={i} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};
