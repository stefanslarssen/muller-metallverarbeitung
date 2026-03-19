import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { Building2, Scale, Handshake } from 'lucide-react';
import './Footer.css';

function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-section-header">
              <Building2 size={24} />
              <h4>{t.footer.company}</h4>
            </div>
            <p className="footer-tagline">{t.footer.tagline}</p>
            <p className="footer-address">
              Im Seifen 63<br />
              57258 Freudenberg-Alchen<br />
              Deutschland
            </p>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <div className="footer-section-header">
              <Scale size={24} />
              <h4>{t.footer.legal.title}</h4>
            </div>
            <ul className="footer-list">
              <li>{t.footer.legal.shareholders}</li>
              <li>{t.footer.legal.vat}</li>
              <li>{t.footer.legal.register}</li>
              <li>{t.footer.legal.webdesign}</li>
              <li>{t.footer.legal.photos}</li>
            </ul>
          </div>

          {/* Partners */}
          <div className="footer-section">
            <div className="footer-section-header">
              <Handshake size={24} />
              <h4>{t.footer.partners.title}</h4>
            </div>
            <ul className="footer-list">
              <li>{t.footer.partners.company1}</li>
              <li>{t.footer.partners.company2}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t.footer.copyright}</p>
          <div className="footer-links">
            <a href="#impressum">{t.footer.imprint}</a>
            <span className="footer-separator">|</span>
            <a href="#datenschutz">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
