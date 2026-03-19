import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './CookieConsent.css';

function CookieConsent() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after a short delay
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <div className="cookie-icon">
          <Cookie size={24} />
        </div>
        <div className="cookie-text">
          <h4>{t.cookies.title}</h4>
          <p>{t.cookies.message}</p>
        </div>
        <div className="cookie-actions">
          <button className="cookie-accept" onClick={handleAccept}>
            {t.cookies.accept}
          </button>
          <button className="cookie-decline" onClick={handleDecline}>
            {t.cookies.decline}
          </button>
        </div>
        <button className="cookie-close" onClick={handleDecline} aria-label="Close">
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default CookieConsent;
