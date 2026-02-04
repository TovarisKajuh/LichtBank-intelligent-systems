import React from 'react';
import { LegalPage } from './LegalModals';

interface FooterProps {
  onLegalPageClick: (page: LegalPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ onLegalPageClick }) => {
  return (
    <footer className="bg-[#FAFAFA] pt-20 pb-10 px-6 border-t border-solar-grey/20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-solar-dark mb-6 flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-tr from-solar-yellow to-solar-orange"></div>
              LichtPakt
            </h3>
            <p className="text-solar-dark/60 max-w-sm mb-6">
              KI-geplante Solaranlagen mit intelligenten Komponenten. Persönlich betreut von echten Wiener Experten. Lebenslanger Service.
            </p>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <div className="w-10 h-10 rounded-full bg-solar-grey/10 hover:bg-solar-orange hover:text-white flex items-center justify-center transition-all cursor-pointer">
                 <span className="sr-only">Facebook</span>
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9.9 22v-9.6h-3.2v-3.8h3.2V6c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.5.1 2.8.1v3.3h-1.9c-1.5 0-1.8.7-1.8 1.8v2.3h3.6l-.5 3.8h-3.1V22h-3.8z"/></svg>
               </div>
               <div className="w-10 h-10 rounded-full bg-solar-grey/10 hover:bg-solar-orange hover:text-white flex items-center justify-center transition-all cursor-pointer">
                 <span className="sr-only">Instagram</span>
                 <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.5.5.2.9.5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .5 2.2.1 1.2.1 1.6.1 4.9 0 3.2 0 3.6-.1 4.9-.1 1.2-.3 1.8-.5 2.2-.2.5-.5.9-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.5-1.2.1-1.6.1-4.9.1-3.2 0-3.6 0-4.9-.1-1.2-.1-1.8-.3-2.2-.5-.5-.2-.9-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.5-2.2-.1-1.2-.1-1.6-.1-4.9 0-3.2 0-3.6.1-4.9.1-1.2.3-1.8.5-2.2.2-.5.5-.9.9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.5 1.3-.1 1.7-.1 4.9-.1zm0 1.8c-3.2 0-3.6 0-4.8.1-1.2.1-1.7.3-2 .4-.4.1-.7.3-1 .6-.3.3-.5.6-.6 1-.1.3-.3.8-.4 2-.1 1.2-.1 1.6-.1 4.8 0 3.2 0 3.6.1 4.8.1 1.2.3 1.7.4 2 .1.4.3.7.6 1 .3.3.6.5 1 .6.3.1.8.3 2 .4 1.2.1 1.6.1 4.8.1 3.2 0 3.6 0 4.8-.1 1.2-.1 1.7-.3 2-.4.4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .1-.3.3-.8.4-2 .1-1.2.1-1.6.1-4.8 0-3.2 0-3.6-.1-4.8-.1-1.2-.3-1.7-.4-2-.1-.4-.3-.7-.6-1-.3-.3-.6-.5-1-.6-.3-.1-.8-.3-2-.4-1.2-.1-1.6-.1-4.8-.1zM12 7c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm0 1.8c-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2-1.4-3.2-3.2-3.2zM17.3 5.4c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1z"/></svg>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-solar-dark mb-4">Kontakt</h4>
            <ul className="space-y-3 text-solar-dark/60">
              <li>Wien, Österreich</li>
              <li className="pt-2">
                <a href="tel:+436604108890" className="hover:text-solar-orange transition-colors font-medium">
                  +43 660 4108890
                </a>
              </li>
              <li>
                <a href="mailto:info@lichtpakt.at" className="hover:text-solar-orange transition-colors">
                  info@lichtpakt.at
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-solar-dark mb-4">Rechtliches</h4>
            <ul className="space-y-3 text-solar-dark/60">
              <li><button onClick={() => onLegalPageClick('impressum')} className="hover:text-solar-orange transition-colors">Impressum</button></li>
              <li><button onClick={() => onLegalPageClick('datenschutz')} className="hover:text-solar-orange transition-colors">Datenschutz</button></li>
              <li><button onClick={() => onLegalPageClick('agb')} className="hover:text-solar-orange transition-colors">AGB</button></li>
              <li><button onClick={() => onLegalPageClick('cookies')} className="hover:text-solar-orange transition-colors">Cookie Einstellungen</button></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-solar-dark/30 text-sm border-t border-solar-grey/10 pt-8">
          &copy; {new Date().getFullYear()} LichtPakt GmbH. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};