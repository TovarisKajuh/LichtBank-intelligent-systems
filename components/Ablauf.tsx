import React, { useState } from 'react';
import { FileText, Users, Cpu, Hammer, Power, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: "Anfrage",
    duration: "Tag 1",
    description: "Füllen Sie unser kurzes Formular aus. Innerhalb von 24 Stunden meldet sich Ihr persönlicher Berater bei Ihnen.",
    details: "Keine Verpflichtung, keine Kosten. Wir beantworten erste Fragen und vereinbaren einen Termin."
  },
  {
    icon: Users,
    title: "Beratung",
    duration: "Woche 1",
    description: "Vor-Ort-Termin bei Ihnen zu Hause. Wir analysieren Ihr Dach, Ihren Verbrauch und Ihre Wünsche.",
    details: "Ihr Berater nimmt sich 1-2 Stunden Zeit. Wir klären alle Fragen zu Technik, Förderung und Kosten."
  },
  {
    icon: Cpu,
    title: "3D-Planung",
    duration: "Woche 2",
    description: "Unsere KI erstellt ein präzises 3D-Modell und berechnet die optimale Anlagenkonfiguration.",
    details: "Sie erhalten ein detailliertes Angebot mit Ertragsprognose, Amortisationsrechnung und Fixpreis."
  },
  {
    icon: Hammer,
    title: "Installation",
    duration: "Woche 3-4",
    description: "Unser eigenes Montageteam installiert Ihre Anlage professionell und sauber in 1-2 Tagen.",
    details: "Keine Subunternehmer. Wir respektieren Ihr Eigentum und hinterlassen die Baustelle sauber."
  },
  {
    icon: Power,
    title: "Aktivierung",
    duration: "Gleicher Tag",
    description: "Inbetriebnahme, Netzanmeldung und Einrichtung der Monitoring-App direkt nach der Installation.",
    details: "Sie sehen sofort, wie viel Strom Sie produzieren. Wir erklären Ihnen alle Funktionen."
  },
  {
    icon: HeartHandshake,
    title: "Betreuung",
    duration: "Lebenslang",
    description: "Ihr persönlicher Ansprechpartner bleibt für Sie da. Wartung, Support und Monitoring inklusive.",
    details: "Bei Fragen oder Problemen sind wir für Sie erreichbar. Echte Menschen, echter Service."
  }
];

export const Ablauf = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="ablauf" className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-solar-dark mb-6">
            Ihr Weg zur eigenen Solaranlage
          </h2>
          <p className="text-lg text-solar-dark/60 max-w-2xl mx-auto">
            Von der ersten Anfrage bis zur lebenslangen Betreuung. So einfach funktioniert's.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting Line */}
          <div className="absolute top-16 left-0 right-0 h-1 bg-solar-grey/20 rounded-full">
            <div className="h-full w-full bg-gradient-to-r from-solar-yellow via-solar-orange to-solar-yellow rounded-full opacity-30"></div>
          </div>

          <div className="grid grid-cols-6 gap-4 relative">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;

              return (
                <div
                  key={i}
                  className="flex flex-col items-center cursor-pointer group"
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Step Circle */}
                  <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-gradient-to-br from-solar-yellow to-solar-orange scale-110 shadow-lg shadow-solar-orange/30' : 'bg-white border-2 border-solar-grey/30 group-hover:border-solar-orange'}`}>
                    <Icon className={`w-7 h-7 transition-colors ${isActive ? 'text-white' : 'text-solar-dark/60 group-hover:text-solar-orange'}`} />
                  </div>

                  {/* Duration Badge */}
                  <div className={`mt-4 px-3 py-1 rounded-full text-xs font-semibold transition-all ${isActive ? 'bg-solar-orange text-white' : 'bg-solar-grey/10 text-solar-dark/60'}`}>
                    {step.duration}
                  </div>

                  {/* Title */}
                  <h3 className={`mt-3 text-lg font-bold text-center transition-colors ${isActive ? 'text-solar-orange' : 'text-solar-dark'}`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-sm text-solar-dark/60 text-center leading-relaxed">
                    {step.description}
                  </p>

                  {/* Expanded Details */}
                  <div className={`mt-4 overflow-hidden transition-all duration-300 ${isActive ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-xs text-solar-dark/50 text-center italic px-2">
                      {step.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={i} className="flex gap-4">
                {/* Left: Icon and Line */}
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-solar-yellow to-solar-orange flex items-center justify-center shadow-md">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-solar-orange to-solar-grey/20 mt-2"></div>
                  )}
                </div>

                {/* Right: Content */}
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-solar-dark">{step.title}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-solar-yellow/20 text-solar-orange text-xs font-semibold">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-solar-dark/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <p className="mt-2 text-xs text-solar-dark/40 italic">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
