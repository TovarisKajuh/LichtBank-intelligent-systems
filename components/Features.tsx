import React from 'react';

export const Features = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative group">
             <div className="absolute inset-0 bg-solar-gradient blur-[100px] opacity-20 rounded-full transition-opacity duration-700 group-hover:opacity-30"></div>
             {/* Updated image URL that is reliable */}
             <img 
               src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop" 
               alt="Professional Solar Installation" 
               className="relative z-10 rounded-3xl shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-700 object-cover h-[500px] w-full"
             />
             
             {/* Floating Trust Badge */}
             <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs animate-float hidden md:block border border-solar-grey/10">
               <div className="flex items-center gap-4 mb-2">
                 <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                 <span className="font-bold text-solar-dark">Alles aus einer Hand</span>
               </div>
               <p className="text-sm text-solar-dark/60">Von der Planung bis zur Montage durch zertifizierte Wiener Teams.</p>
             </div>
          </div>

          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-solar-dark mb-6">Technologie, die mitdenkt.</h2>
              <p className="text-lg text-solar-dark/60 leading-relaxed">
                Wir installieren keine Standard-Lösungen. Unsere <strong className="text-solar-dark">fortschrittlichen KI-Systeme</strong> analysieren Ihren Verbrauch in Echtzeit und optimieren den Energiefluss intelligent zwischen Dach, Speicher und Netz, um Ihren Profit vollautomatisch zu maximieren.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "1. KI-Analyse & Design",
                  text: "Wir erstellen ein 3D-Modell Ihres Hauses und berechnen mittels künstlicher Intelligenz den optimalen Ertrag basierend auf lokalen Wetterdaten."
                },
                {
                  title: "2. Premium Komponenten",
                  text: "Wir verbauen ausschließlich Glas-Glas Module und smarte Wechselrichter von Marktführern, die perfekt mit unserer Software kommunizieren."
                },
                {
                  title: "3. Installation in 2 Tagen",
                  text: "Unsere eigenen Montageteams arbeiten schnell, sauber und respektieren Ihr Eigentum. Kein Subunternehmer-Chaos."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group cursor-default">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-solar-grey/20 flex items-center justify-center font-bold text-solar-dark group-hover:border-solar-orange group-hover:text-solar-orange transition-all duration-300 group-hover:scale-110">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-solar-dark mb-2 group-hover:text-solar-orange transition-colors">{item.title}</h4>
                    <p className="text-solar-dark/60">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};