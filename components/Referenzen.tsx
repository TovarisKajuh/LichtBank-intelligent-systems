import React from 'react';
import { Star, MapPin, Zap, Battery } from 'lucide-react';

const stats = [
  { value: "500+", label: "Anlagen installiert" },
  { value: "4.2 MW", label: "Gesamtleistung" },
  { value: "€1.2M", label: "Förderung gesichert" },
  { value: "4.8", label: "Sterne Bewertung", icon: Star }
];

const projects = [
  {
    location: "1190 Wien, Döbling",
    specs: "9.8 kWp + 10 kWh Speicher",
    year: "2025",
    image: "/projects/project-1.jpeg"
  },
  {
    location: "1220 Wien, Donaustadt",
    specs: "12.5 kWp + Wallbox",
    year: "2025",
    image: "/projects/project-2.jpeg"
  },
  {
    location: "Klosterneuburg",
    specs: "15 kWp + 15 kWh Speicher",
    year: "2024",
    image: "/projects/project-4.jpeg"
  }
];

const caseStudies = [
  {
    name: "Thomas Huber",
    location: "1190 Wien",
    system: "9.4 kWp | 10 kWh BYD Speicher",
    quote: "Die KI-Planung hat mich überzeugt. Das Team hat mir am 3D-Modell genau gezeigt, warum welches Modul wo sitzt. Nach 8 Monaten kann ich sagen: Die Prognose war sogar konservativ.",
    before: "€280/Monat",
    after: "€25/Monat",
    savings: "- €2.340/Jahr",
    stars: 5
  },
  {
    name: "Familie Schneider",
    location: "Klosterneuburg",
    system: "12.5 kWp | 15 kWh Speicher | Wallbox",
    quote: "Ehrlich gesagt hat die Installation einen Tag länger gedauert als geplant, weil unser Dach komplizierter war. Aber das Ergebnis? Seit Mai haben wir keinen Strom mehr zugekauft. Die App zeigt alles in Echtzeit.",
    before: "€320/Monat",
    after: "€15/Monat",
    savings: "95% Autarkie",
    stars: 4
  },
  {
    name: "Markus Berger",
    location: "1220 Wien",
    system: "8.2 kWp | 5 kWh Speicher",
    quote: "Die Beratung war wirklich persönlich. Herr Novak hat sich 2 Stunden Zeit genommen und alle Optionen durchgerechnet. Die Förderabwicklung lief dann komplett ohne mein Zutun.",
    before: "Kompliziert",
    after: "Einfach",
    savings: "Förderung erhalten",
    stars: 5
  }
];

export const Referenzen = () => {
  return (
    <section id="referenzen" className="py-24 px-6 bg-[#FAFAFA]">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-solar-dark mb-6">
            Wien vertraut uns.
          </h2>
          <p className="text-lg text-solar-dark/60 max-w-2xl mx-auto">
            Über 500 Familien in Wien und Niederösterreich produzieren bereits ihren eigenen Sonnenstrom.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-white rounded-3xl shadow-lg border border-solar-grey/10 p-8 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-solar-orange to-solar-yellow">
                    {stat.value}
                  </span>
                  {stat.icon && <Star className="w-6 h-6 text-solar-yellow fill-solar-yellow" />}
                </div>
                <span className="text-sm text-solar-dark/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-solar-dark mb-8 text-center">Unsere Projekte</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-zinc-200 aspect-video cursor-pointer">
                {/* Project photo */}
                <img
                  src={project.image}
                  alt={`Solar installation in ${project.location}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-solar-dark/90 via-solar-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-2 text-white text-sm font-medium">
                    <Zap className="w-4 h-4 text-solar-yellow" />
                    {project.specs}
                  </div>
                  <div className="text-white/60 text-xs mt-2">{project.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-2xl font-bold text-solar-dark mb-8 text-center">Was unsere Kunden sagen</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-lg border border-solar-grey/10 hover:shadow-xl transition-shadow">
                {/* Photo Placeholder */}
                <div className="w-16 h-16 rounded-full bg-zinc-200 flex items-center justify-center mb-6 mx-auto">
                  <span className="text-zinc-400 text-xs text-center">Foto</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 justify-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${j < study.stars ? 'text-solar-yellow fill-solar-yellow' : 'text-gray-300'}`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-solar-dark/70 italic text-center leading-relaxed mb-6">
                  "{study.quote}"
                </p>

                {/* Customer Info */}
                <div className="text-center border-t border-solar-grey/10 pt-6">
                  <div className="font-bold text-solar-dark">{study.name}</div>
                  <div className="text-sm text-solar-dark/50 mb-4">{study.location}</div>

                  {/* System Specs */}
                  <div className="flex items-center justify-center gap-2 text-xs text-solar-dark/60 mb-4">
                    <Battery className="w-3 h-3" />
                    {study.system}
                  </div>

                  {/* Before/After */}
                  <div className="flex justify-center gap-6 text-sm">
                    <div>
                      <span className="text-solar-dark/40">Vorher:</span>
                      <span className="ml-1 text-solar-dark/60">{study.before}</span>
                    </div>
                    <div className="text-green-600 font-bold">
                      {study.savings}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Logos */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-bold text-solar-dark flex items-center gap-2"><span className="text-3xl">☀</span> SolarEdge</div>
          <div className="text-xl font-bold text-solar-dark flex items-center gap-2"><span className="text-3xl">⚡</span> Fronius</div>
          <div className="text-xl font-bold text-solar-dark flex items-center gap-2"><span className="text-3xl">🔋</span> BYD</div>
          <div className="text-xl font-bold text-solar-dark flex items-center gap-2"><span className="text-3xl">🇦🇹</span> PV Austria</div>
        </div>
      </div>
    </section>
  );
};
