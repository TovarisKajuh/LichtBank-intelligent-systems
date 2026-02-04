import React, { useState } from 'react';
import { Button } from './ui/Button';
import { CheckCircle2, Phone, Mail, MapPin, Loader2, CheckCircle } from 'lucide-react';

export const FunnelForm = () => {
  const [formData, setFormData] = useState({
    zip: '',
    consumption: 'Unter 3.000 kWh',
    roofType: 'Schrägdach',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.zip || !formData.email || !formData.phone) {
      alert("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }

    setStatus('loading');

    try {
      // Send data to webhook
      const response = await fetch('https://services.leadconnectorhq.com/hooks/m8L2VGDcaMUQf31S0yN4/webhook-trigger/17eb66c5-db0a-43c2-832d-f79eebf28ec7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section id="funnel" className="py-24 px-6 bg-solar-dark relative text-white">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-solar-orange/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-solar-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ihre KI-Analyse in <br/><span className="text-solar-yellow">2 Minuten.</span></h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  Erfahren Sie kostenlos, wie viel Ihr Dach produzieren kann. Unsere KI berechnet Ertrag, Förderung und Amortisation individuell für Ihre Situation.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "KI-gestützte 3D-Dachanalyse",
                  "Persönliche Wirtschaftlichkeitsberechnung",
                  "Prüfung aller Wien-Förderungen 2026",
                  "Festpreisgarantie nach Vor-Ort-Besuch"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-solar-yellow flex-shrink-0" />
                    <span className="text-base md:text-lg font-light text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111] rounded-2xl p-6 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-solar-yellow to-solar-orange"></div>
              
              {status === 'success' ? (
                <div className="text-center animate-in fade-in zoom-in duration-500 py-10">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Vielen Dank!</h3>
                  <p className="text-white/60 mb-6">
                    Wir haben Ihre Anfrage erhalten. Ein Solarexperte wird sich in Kürze mit Ihrer persönlichen Analyse bei Ihnen melden.
                  </p>
                  <Button 
                    variant="outline" 
                    type="button"
                    className="!border-white/20 !text-white hover:!bg-white/10 mx-auto"
                    onClick={() => {
                        setFormData({
                            zip: '',
                            consumption: 'Unter 3.000 kWh',
                            roofType: 'Schrägdach',
                            email: '',
                            phone: ''
                        });
                        setStatus('idle');
                    }}
                  >
                    Neue Anfrage
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-white/40 font-semibold flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> Postleitzahl *
                    </label>
                    <input 
                      type="text" 
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      placeholder="z.B. 1190" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow transition-all" 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                       <label className="text-xs uppercase tracking-wider text-white/40 font-semibold">Stromverbrauch</label>
                       <select 
                         name="consumption"
                         value={formData.consumption}
                         onChange={handleChange}
                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-solar-yellow transition-all appearance-none cursor-pointer"
                       >
                         <option className="text-solar-dark" value="Unter 3.000 kWh">Unter 3.000 kWh</option>
                         <option className="text-solar-dark" value="3.000 - 5.000 kWh">3.000 - 5.000 kWh</option>
                         <option className="text-solar-dark" value="Über 5.000 kWh">Über 5.000 kWh</option>
                       </select>
                     </div>
                     <div className="space-y-2">
                       <label className="text-xs uppercase tracking-wider text-white/40 font-semibold">Dachart</label>
                       <select 
                         name="roofType"
                         value={formData.roofType}
                         onChange={handleChange}
                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-solar-yellow transition-all appearance-none cursor-pointer"
                       >
                         <option className="text-solar-dark" value="Schrägdach">Schrägdach</option>
                         <option className="text-solar-dark" value="Flachdach">Flachdach</option>
                         <option className="text-solar-dark" value="Sonstiges">Sonstiges</option>
                       </select>
                     </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-white/40 font-semibold flex items-center gap-2">
                      <Mail className="w-3 h-3" /> E-Mail Adresse *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="max@muster.at" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow transition-all" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-white/40 font-semibold flex items-center gap-2">
                      <Phone className="w-3 h-3" /> Telefonnummer *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+43 660 ..." 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-solar-yellow focus:ring-1 focus:ring-solar-yellow transition-all" 
                    />
                  </div>

                  {status === 'error' && (
                    <div className="text-red-400 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20 text-center">
                      Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                    </div>
                  )}

                  <Button 
                    fullWidth 
                    type="submit"
                    className="mt-6 !bg-solar-yellow !text-solar-dark hover:!bg-white !py-5 text-lg shadow-lg shadow-solar-yellow/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...
                      </>
                    ) : (
                      "Jetzt kostenlos analysieren"
                    )}
                  </Button>
                  
                  <p className="text-xs text-center text-white/30 mt-4">
                    100% unverbindlich. Ihre Daten werden SSL-verschlüsselt übertragen.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};