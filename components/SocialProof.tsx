import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, location, text, savings, stars = 5 }: { name: string, location: string, text: string, savings: string, stars?: number }) => (
  <div className="bg-[#F5F5F7] p-8 rounded-3xl relative">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-4 h-4 ${i < stars ? 'text-solar-yellow fill-solar-yellow' : 'text-gray-300'}`} />
      ))}
    </div>
    <p className="text-solar-dark/80 italic mb-6 leading-relaxed">"{text}"</p>
    <div className="flex justify-between items-end border-t border-solar-grey/20 pt-6">
      <div>
        <div className="font-bold text-solar-dark">{name}</div>
        <div className="text-sm text-solar-dark/50">{location}</div>
      </div>
      <div className="text-right">
        <div className="text-xs text-solar-dark/50 uppercase">Ersparnis</div>
        <div className="font-bold text-green-600">{savings}</div>
      </div>
    </div>
  </div>
);

export const SocialProof = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-solar-dark mb-4">Wien vertraut uns.</h2>
          <p className="text-lg text-solar-dark/60">Über 500 installierte Anlagen in Wien und Niederösterreich.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ReviewCard
            name="Thomas Huber"
            location="1190 Wien"
            text="Die KI-Planung hat mich überzeugt. Das Team hat mir am 3D-Modell genau gezeigt, warum welches Modul wo sitzt. Nach 8 Monaten kann ich sagen: Die Prognose war sogar konservativ."
            savings="- € 2.340 / Jahr"
          />
          <ReviewCard
            name="Familie Schneider"
            location="Klosterneuburg"
            text="Ehrlich gesagt hat die Installation einen Tag länger gedauert als geplant, weil unser Dach komplizierter war. Aber das Ergebnis? Seit Mai haben wir keinen Strom mehr zugekauft. Die App zeigt alles in Echtzeit."
            savings="95% Autarkie"
            stars={4}
          />
          <ReviewCard
            name="Markus Berger"
            location="1220 Wien"
            text="Die Beratung war wirklich persönlich. Herr Novak hat sich 2 Stunden Zeit genommen und alle Optionen durchgerechnet. Die Förderabwicklung lief dann komplett ohne mein Zutun."
            savings="Förderung erhalten"
          />
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
           {/* Simple placeholders for logos */}
           <div className="text-xl font-bold text-solar-dark flex items-center gap-2"><span className="text-3xl">☀</span> SolarEdge</div>
           <div className="text-xl font-bold text-solar-dark flex items-center gap-2"><span className="text-3xl">⚡</span> Fronius</div>
           <div className="text-xl font-bold text-solar-dark flex items-center gap-2"><span className="text-3xl">🔋</span> BYD</div>
           <div className="text-xl font-bold text-solar-dark flex items-center gap-2"><span className="text-3xl">🇦🇹</span> PV Austria</div>
        </div>
      </div>
    </section>
  );
};