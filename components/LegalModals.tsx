import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export type LegalPage = 'impressum' | 'datenschutz' | 'agb' | 'cookies' | null;

interface LegalModalsProps {
  activePage: LegalPage;
  onClose: () => void;
}

const ImpressumContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-solar-dark">Impressum</h2>

    <div className="space-y-4 text-solar-dark/70">
      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Angaben gemaess ECG und MedienG</h3>
        <p>
          LichtPakt GmbH<br />
          <span className="text-solar-orange text-sm">(in Gruendung)</span>
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Anschrift</h3>
        <p>
          Mariahilfer Strasse 123/4<br />
          1060 Wien<br />
          Oesterreich
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Kontakt</h3>
        <p>
          Telefon: +43 660 4108890<br />
          E-Mail: info@lichtpakt.at<br />
          Web: www.lichtpakt.at
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Unternehmensgegenstand</h3>
        <p>
          Planung, Vertrieb und Installation von Photovoltaik-Anlagen,
          Stromspeichern und E-Mobilitaetsloesungen.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Firmenbuchdaten</h3>
        <p>
          UID-Nummer: ATU00000000 <span className="text-solar-orange text-sm">(in Beantragung)</span><br />
          Firmenbuchnummer: FN 000000x <span className="text-solar-orange text-sm">(in Eintragung)</span><br />
          Firmenbuchgericht: Handelsgericht Wien
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Behoerde gemaess ECG</h3>
        <p>
          Magistratisches Bezirksamt des VI. Bezirkes
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Berufsrecht</h3>
        <p>
          Gewerbeordnung: www.ris.bka.gv.at<br />
          Mitglied der Wirtschaftskammer Wien<br />
          Fachgruppe: Elektro-, Gebaeudetechnik und Mechatroniker
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Geschaeftsfuehrer</h3>
        <p>
          Wird nach Firmengruendung bekannt gegeben.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Haftungsausschluss</h3>
        <p className="text-sm">
          Die Inhalte dieser Website wurden mit groesster Sorgfalt erstellt.
          Fuer die Richtigkeit, Vollstaendigkeit und Aktualitaet der Inhalte koennen
          wir jedoch keine Gewaehr uebernehmen. Als Diensteanbieter sind wir fuer
          eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">Urheberrecht</h3>
        <p className="text-sm">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem oesterreichischen Urheberrecht. Die Vervielfaeltigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen
          des Urheberrechtes beduerfen der schriftlichen Zustimmung des jeweiligen
          Autors bzw. Erstellers.
        </p>
      </section>
    </div>
  </div>
);

const DatenschutzContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-solar-dark">Datenschutzerklaerung</h2>

    <div className="space-y-4 text-solar-dark/70">
      <section>
        <h3 className="font-semibold text-solar-dark mb-2">1. Datenschutz auf einen Blick</h3>
        <p>
          Wir nehmen den Schutz Ihrer persoenlichen Daten sehr ernst. Wir behandeln
          Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklaerung.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">2. Verantwortliche Stelle</h3>
        <p>
          LichtPakt GmbH (i.G.)<br />
          Mariahilfer Strasse 123/4<br />
          1060 Wien, Oesterreich<br />
          E-Mail: info@lichtpakt.at
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">3. Erhebung und Speicherung personenbezogener Daten</h3>
        <p>
          Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Name und Vorname</li>
          <li>E-Mail-Adresse</li>
          <li>Telefonnummer (optional)</li>
          <li>Adresse bzw. PLZ fuer die Projektplanung</li>
          <li>Angaben zu Ihrem Dach und Stromverbrauch</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">4. Zweck der Datenverarbeitung</h3>
        <p>
          Ihre Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage,
          zur Erstellung eines individuellen Angebots und zur Kommunikation
          im Rahmen einer moeglichen Geschaeftsbeziehung verwendet.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">5. Rechtsgrundlage</h3>
        <p>
          Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO
          (Einwilligung) bzw. Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung).
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">6. Speicherdauer</h3>
        <p>
          Ihre Daten werden geloescht, sobald sie fuer die Erreichung des Zweckes
          ihrer Erhebung nicht mehr erforderlich sind. Bei Anfragen ist dies der
          Fall, wenn die Konversation beendet ist und keine Geschaeftsbeziehung
          zustande kommt.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">7. Ihre Rechte</h3>
        <p>Sie haben das Recht auf:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Auskunft ueber Ihre gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Loeschung Ihrer Daten (Art. 17 DSGVO)</li>
          <li>Einschraenkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Datenuebertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">8. Cookies</h3>
        <p>
          Unsere Website verwendet technisch notwendige Cookies, die fuer den
          Betrieb der Seite erforderlich sind. Sie koennen Ihre Cookie-Einstellungen
          jederzeit ueber den entsprechenden Link in der Fusszeile anpassen.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">9. Drittanbieter-Dienste</h3>
        <p>
          Diese Website nutzt folgende externe Dienste:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Google Fonts (Schriftarten)</li>
          <li>ElevenLabs (Sprach-Widget)</li>
          <li>Unsplash (Bildmaterial)</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">10. Beschwerderecht</h3>
        <p>
          Sie haben das Recht, sich bei der oesterreichischen Datenschutzbehoerde
          zu beschweren:<br /><br />
          Oesterreichische Datenschutzbehoerde<br />
          Barichgasse 40-42<br />
          1030 Wien<br />
          dsb@dsb.gv.at
        </p>
      </section>
    </div>
  </div>
);

const AGBContent = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-solar-dark">Allgemeine Geschaeftsbedingungen</h2>

    <div className="space-y-4 text-solar-dark/70">
      <section>
        <h3 className="font-semibold text-solar-dark mb-2">1. Geltungsbereich</h3>
        <p>
          Diese Allgemeinen Geschaeftsbedingungen gelten fuer alle Vertraege zwischen
          der LichtPakt GmbH (i.G.) und ihren Kunden ueber die Planung, Lieferung
          und Installation von Photovoltaik-Anlagen und zugehoerigen Komponenten.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">2. Vertragsschluss</h3>
        <p>
          Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestaetigung
          oder die Ausfuehrung der Leistung zustande. Angebote sind freibleibend.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">3. Preise und Zahlung</h3>
        <p>
          Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer.
          Die Zahlungsbedingungen werden im individuellen Angebot festgelegt.
          Standardmaessig gilt: 30% bei Auftragserteilung, 60% nach Materiallieferung,
          10% nach Fertigstellung und Inbetriebnahme.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">4. Lieferung und Installation</h3>
        <p>
          Liefertermine sind unverbindlich, sofern nicht ausdruecklich als verbindlich
          vereinbart. Verzoegerungen durch hoehere Gewalt oder Umstaende, die wir nicht
          zu vertreten haben, berechtigen zu einer angemessenen Verlaengerung der
          Lieferfrist.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">5. Mitwirkungspflichten des Kunden</h3>
        <p>Der Kunde verpflichtet sich:</p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Zugang zum Installationsort zu gewaehrleisten</li>
          <li>Notwendige Genehmigungen einzuholen</li>
          <li>Korrekte Angaben zu Dach und Gebaeude zu machen</li>
          <li>Einen Stromanschluss fuer die Installationsarbeiten bereitzustellen</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">6. Gewaehrleistung und Garantie</h3>
        <p>
          Es gelten die gesetzlichen Gewaehrleistungsfristen. Zusaetzlich bieten
          wir Herstellergarantien auf Komponenten:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Solarmodule: 25 Jahre Leistungsgarantie</li>
          <li>Wechselrichter: 10-12 Jahre (herstellerabhaengig)</li>
          <li>Speicher: 10 Jahre</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">7. Haftung</h3>
        <p>
          Unsere Haftung fuer leicht fahrlaessige Pflichtverletzungen ist auf den
          vertragstypischen, vorhersehbaren Schaden begrenzt. Dies gilt nicht fuer
          Schaeden aus der Verletzung des Lebens, des Koerpers oder der Gesundheit.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">8. Eigentumsvorbehalt</h3>
        <p>
          Die gelieferte Ware bleibt bis zur vollstaendigen Bezahlung unser Eigentum.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">9. Widerrufsrecht</h3>
        <p>
          Bei Fernabsatzvertraegen steht Verbrauchern ein gesetzliches Widerrufsrecht
          von 14 Tagen zu. Details werden im Angebot mitgeteilt.
        </p>
      </section>

      <section>
        <h3 className="font-semibold text-solar-dark mb-2">10. Schlussbestimmungen</h3>
        <p>
          Es gilt oesterreichisches Recht. Gerichtsstand fuer Kaufleute ist Wien.
          Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der
          uebrigen Bestimmungen unberuehrt.
        </p>
      </section>
    </div>
  </div>
);

const CookiesContent = ({ onClose }: { onClose: () => void }) => {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    }));
    onClose();
  };

  const handleAcceptAll = () => {
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    localStorage.setItem('cookie-preferences', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
    }));
    onClose();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-solar-dark">Cookie Einstellungen</h2>

      <div className="space-y-4 text-solar-dark/70">
        <p>
          Wir verwenden Cookies, um Ihnen die bestmoegliche Erfahrung auf unserer
          Website zu bieten. Sie koennen Ihre Praeferenzen hier anpassen.
        </p>

        <div className="space-y-4 mt-6">
          {/* Necessary Cookies */}
          <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-solar-dark">Notwendige Cookies</h4>
                <p className="text-sm text-solar-dark/60 mt-1">
                  Diese Cookies sind fuer den Betrieb der Website erforderlich.
                </p>
              </div>
              <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-full">
                Immer aktiv
              </div>
            </div>
          </div>

          {/* Analytics Cookies */}
          <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-solar-dark">Analyse Cookies</h4>
                <p className="text-sm text-solar-dark/60 mt-1">
                  Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
                </p>
              </div>
              <button
                onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  analyticsEnabled ? 'bg-solar-orange' : 'bg-zinc-300'
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    analyticsEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Marketing Cookies */}
          <div className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-solar-dark">Marketing Cookies</h4>
                <p className="text-sm text-solar-dark/60 mt-1">
                  Werden verwendet, um relevante Werbung anzuzeigen.
                </p>
              </div>
              <button
                onClick={() => setMarketingEnabled(!marketingEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  marketingEnabled ? 'bg-solar-orange' : 'bg-zinc-300'
                }`}
              >
                <span
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    marketingEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={handleSavePreferences}
            className="flex-1 px-6 py-3 rounded-full border border-solar-dark/20 text-solar-dark font-semibold hover:bg-zinc-50 transition-colors"
          >
            Auswahl speichern
          </button>
          <button
            onClick={handleAcceptAll}
            className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-solar-orange to-solar-yellow text-solar-dark font-semibold hover:shadow-lg transition-all"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export const LegalModals: React.FC<LegalModalsProps> = ({ activePage, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activePage) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
    };
  }, [activePage]);

  if (!activePage) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderContent = () => {
    switch (activePage) {
      case 'impressum':
        return <ImpressumContent />;
      case 'datenschutz':
        return <DatenschutzContent />;
      case 'agb':
        return <AGBContent />;
      case 'cookies':
        return <CookiesContent onClose={onClose} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-700 transition-colors"
          aria-label="Schliessen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[90vh]">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};
