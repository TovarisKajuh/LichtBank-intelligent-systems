import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

export const Comparison = () => {
  const features = [
    { name: "Günstigstes Produkt am Markt", us: false, others: true },
    { name: "Schnellste Lieferzeit", us: false, others: true },
    { name: "KI-gestützte 3D-Planung", us: true, others: false },
    { name: "Intelligente Komponenten (Smart Meter, Wallbox)", us: true, others: false },
    { name: "Förderantrag inklusive", us: true, others: false },
    { name: "Fixpreis-Garantie", us: true, others: false },
    { name: "Persönlicher Ansprechpartner", us: true, others: false },
    { name: "Lebenslanger Service", us: true, others: false },
  ];

  return (
    <section className="py-24 px-6 bg-[#FAFAFA] relative">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-solar-dark mb-6">
            Warum LichtPakt wählen?
          </h2>
          <p className="text-lg text-solar-dark/60">
            6 Jahre Erfahrung und über 895 zufriedene Kunden in Wien sprechen für sich.
          </p>
        </div>

        {/* Light Glass Comparison Card with Orange Shine */}
        <div className="relative rounded-3xl p-1 shadow-2xl overflow-hidden group">
          
          {/* Animated Orange Shine Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-solar-yellow/40 via-solar-orange/40 to-solar-yellow/40 opacity-50 blur-xl group-hover:opacity-80 transition-opacity duration-700"></div>
          
          <div className="relative bg-white/80 backdrop-blur-xl rounded-[1.4rem] p-2 border border-white/50">
             
             {/* Header */}
             <div className="grid grid-cols-12 items-end text-sm md:text-base border-b border-solar-grey/20 pb-6 pt-6 px-6">
                <div className="col-span-6 md:col-span-6"></div>
                <div className="col-span-3 md:col-span-3 text-center text-solar-orange font-extrabold tracking-wide text-sm md:text-lg drop-shadow-sm">LichtPakt</div>
                <div className="col-span-3 md:col-span-3 text-center text-zinc-400 font-medium text-sm md:text-base">Andere</div>
             </div>

             {/* Rows */}
             <div className="flex flex-col">
                {features.map((feature, i) => (
                  <div 
                    key={i} 
                    className={`grid grid-cols-12 items-center py-5 px-6 transition-colors hover:bg-solar-yellow/5 ${i !== features.length - 1 ? 'border-b border-solar-grey/10' : ''}`}
                  >
                    <div className="col-span-6 md:col-span-6 text-solar-dark font-medium pr-4">
                      {feature.name}
                    </div>
                    
                    <div className="col-span-3 md:col-span-3 flex justify-center">
                      {feature.us ? (
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                      ) : (
                        <X className="w-5 h-5 text-zinc-300" />
                      )}
                    </div>

                    <div className="col-span-3 md:col-span-3 flex justify-center">
                      {feature.others ? (
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center shadow-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                      ) : (
                        <X className="w-5 h-5 text-zinc-300" />
                      )}
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-400 text-sm">
            *Vergleich basiert auf Marktanalysen in der Region Wien 2025/26. Andere Anbieter können bei Preis und Lieferzeit punkten. LichtPakt fokussiert auf intelligente Systemoptimierung und persönlichen Service.
          </p>
        </div>

      </div>
    </section>
  );
};