import React from 'react';
import { Check, Euro, Clock, FileCheck, ArrowRight, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';

const subsidies = [
  {
    name: "EAG Bundesförderung",
    amount: "€160/kWp",
    status: "aktiv",
    description: "Investitionszuschuss für PV-Anlagen bis 100 kWp",
    highlight: true
  },
  {
    name: "Speicherförderung",
    amount: "€150/kWh",
    status: "aktiv",
    description: "Zusätzliche Förderung für Batteriespeicher",
    highlight: true
  },
  {
    name: "Wien Landesförderung",
    amount: "bis €250/kWp",
    status: "kommt 2026",
    description: "Neues Förderprogramm in Vorbereitung",
    highlight: false
  },
  {
    name: "Made in Europe Bonus",
    amount: "+20%",
    status: "aktiv",
    description: "Zusatzbonus für europäische Komponenten",
    highlight: true
  }
];

const eligibility = [
  "Eigenheim, Reihenhaus oder Mehrparteienhaus",
  "Dachfläche ab ca. 20 m² nutzbar",
  "Keine Denkmalschutz-Einschränkungen",
  "Wohnsitz in Wien oder Niederösterreich"
];

const benefits = [
  { icon: FileCheck, text: "Wir übernehmen den Papierkram", stat: "100%" },
  { icon: Check, text: "Erfolgsquote bei Förderanträgen", stat: "98%" },
  { icon: Clock, text: "Durchschnittliche Bearbeitungszeit", stat: "14 Tage" }
];

export const Foerderung = () => {
  return (
    <section id="foerderung" className="py-24 px-6 bg-white relative">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-solar-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-sm font-semibold text-green-600 mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Förderungen 2026 aktiv</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-solar-dark mb-6">
            Maximale Förderung sichern.
          </h2>
          <p className="text-lg text-solar-dark/60 max-w-2xl mx-auto">
            Bis zu 30% der Investitionskosten werden gefördert. Wir kümmern uns um alle Anträge.
          </p>
        </div>

        {/* Subsidy Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {subsidies.map((subsidy, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 border transition-all hover:-translate-y-1 ${
                subsidy.highlight
                  ? 'bg-white shadow-lg border-solar-orange/20 hover:shadow-xl'
                  : 'bg-zinc-50 border-zinc-200'
              }`}
            >
              {/* Status Badge */}
              <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold mb-4 ${
                subsidy.status === 'aktiv'
                  ? 'bg-green-500/10 text-green-600'
                  : 'bg-amber-500/10 text-amber-600'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${
                  subsidy.status === 'aktiv' ? 'bg-green-500' : 'bg-amber-500'
                }`}></span>
                {subsidy.status}
              </div>

              <h3 className="text-lg font-bold text-solar-dark mb-2">{subsidy.name}</h3>
              <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow mb-3">
                {subsidy.amount}
              </div>
              <p className="text-sm text-solar-dark/60">{subsidy.description}</p>
            </div>
          ))}
        </div>

        {/* Two Column: Benefits + Eligibility */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Benefits */}
          <div className="bg-gradient-to-br from-solar-dark to-zinc-900 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Wir machen es Ihnen einfach.</h3>

            <div className="space-y-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-solar-yellow" />
                    </div>
                    <div className="flex-1">
                      <div className="text-white/80">{benefit.text}</div>
                    </div>
                    <div className="text-2xl font-bold text-solar-yellow">{benefit.stat}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-white/60 text-sm">
                Sie unterschreiben, wir erledigen den Rest. Von der Antragstellung bis zur Auszahlung.
              </p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="bg-[#FAFAFA] rounded-3xl p-8 border border-solar-grey/10">
            <h3 className="text-2xl font-bold text-solar-dark mb-8">Bin ich förderberechtigt?</h3>

            <div className="space-y-4 mb-8">
              {eligibility.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <span className="text-solar-dark/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold text-amber-800 text-sm">Nächster Fördercall</div>
                <div className="text-amber-700 text-sm">23. April - 11. Mai 2026. Jetzt vormerken lassen!</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <Button
              variant="primary"
              withArrow
              onClick={() => document.getElementById('funnel')?.scrollIntoView({ behavior: 'smooth' })}
              className="shadow-lg shadow-solar-orange/20"
            >
              Jetzt Förderung sichern
            </Button>
            <span className="text-solar-dark/40 text-sm">Unverbindlich und kostenlos</span>
          </div>
        </div>
      </div>
    </section>
  );
};
