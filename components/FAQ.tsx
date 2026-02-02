import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={`border-b border-solar-grey/20 last:border-0 transition-colors duration-300 ${isOpen ? 'bg-solar-yellow/5' : 'hover:bg-white/50'}`}>
      <button 
        onClick={onClick}
        className="w-full flex justify-between items-center py-6 px-6 text-left group"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-solar-orange' : 'text-solar-dark'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-solar-orange rotate-180 text-white' : 'bg-solar-grey/10 text-solar-dark group-hover:bg-solar-orange/10'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-solar-dark/70 leading-relaxed pr-4">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Was kostet eine Photovoltaikanlage?",
      answer: "Die Kosten variieren je nach Dachgröße und Speicherbedarf. Durch die aktuellen Förderungen in Wien amortisieren sich unsere Anlagen jedoch oft schon nach 6-7 Jahren. Nach unserem kostenlosen Beratungsgespräch erhalten Sie ein Festpreisangebot."
    },
    {
      question: "Wie lange dauert die Installation?",
      answer: "Die reine Montage dauert 1-3 Tage je nach Anlagengröße. Der gesamte Prozess von Auftragsbestätigung bis Inbetriebnahme beträgt bei uns nur 2 Wochen – deutlich schneller als der Branchendurchschnitt von 6-8 Wochen."
    },
    {
      question: "Welche Förderungen gibt es aktuell?",
      answer: "2026 ist ein Rekordjahr. Es gibt die Bundesförderung (EAG) und spezifische Wiener Landesförderungen. Wichtig: Die Mehrwertsteuer von 0% auf PV-Anlagen gilt weiterhin! Wir übernehmen den gesamten bürokratischen Antragsprozess für Sie."
    },
    {
      question: "Funktioniert Solar auch bei bewölktem Wetter?",
      answer: "Ja. Photovoltaikmodule nutzen nicht nur direktes Sonnenlicht, sondern auch diffuse Strahlung. Zwar ist der Ertrag geringer als bei voller Sonne, aber unsere hocheffizienten Module produzieren auch an grauen Wintertagen in Wien Strom."
    },
    {
      question: "Brauche ich einen Stromspeicher?",
      answer: "Um 2026 maximale Unabhängigkeit zu erreichen: Ja. Ein Speicher ermöglicht es Ihnen, den tagsüber produzierten Strom auch abends und nachts zu nutzen. Unsere intelligenten Systeme steigern Ihren Eigenverbrauchsanteil so von ca. 30% auf bis zu 90%."
    },
    {
      question: "Was passiert, wenn ich mein Haus verkaufe?",
      answer: "Eine hochwertige PV-Anlage steigert den Wert Ihrer Immobilie sofort und erheblich. Ein Haus mit niedrigen Betriebskosten und besserem Energieausweis ist auf dem Wiener Markt deutlich attraktiver und erzielt höhere Verkaufspreise."
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center text-solar-dark">Häufige Fragen</h2>
        
        {/* Glass Gray Window with Yellow Hue */}
        <div className="rounded-3xl overflow-hidden backdrop-blur-md bg-zinc-50/80 border border-solar-yellow/20 shadow-[0_0_50px_-15px_rgba(255,176,41,0.15)] relative">
          
          {/* Subtle top yellow glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-solar-yellow/50 to-transparent"></div>
          
          <div className="divide-y divide-solar-grey/10">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-solar-dark/60 mb-6">Noch Fragen offen?</p>
          <button 
            onClick={() => document.getElementById('funnel')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-solar-orange font-medium hover:text-solar-dark transition-colors border-b border-solar-orange/30 hover:border-solar-dark pb-1"
          >
            Sprechen Sie mit einem Experten &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};