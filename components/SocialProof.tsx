import React from 'react';
import { Star } from 'lucide-react';

const ReviewCard = ({ name, location, text, savings }: { name: string, location: string, text: string, savings: string }) => (
  <div className="bg-[#F5F5F7] p-8 rounded-3xl relative">
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-solar-yellow fill-solar-yellow" />
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
            text="Die Beratung war extrem transparent. Keine leeren Versprechungen. Die Monteure waren pünktlich und haben den Arbeitsplatz sauber hinterlassen."
            savings="- € 2.100 / Jahr"
          />
          <ReviewCard 
            name="Familie Schneider" 
            location="Klosterneuburg" 
            text="Endlich unabhängig! Die App zeigt genau, was wir produzieren. Seit März haben wir fast keinen Strom mehr zugekauft."
            savings="95% Autarkie"
          />
          <ReviewCard 
            name="Markus Berger" 
            location="1220 Wien" 
            text="Die Abwicklung der Förderung war mein größtes Bedenken, aber das Team hat alles übernommen. Das Geld war schneller da als gedacht."
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