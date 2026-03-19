import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import './Hero.css';

function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  const scrollToContact = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>{t.hero.title}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <p className="hero-subtitle-2">{t.hero.subtitle2}</p>
        <button className="hero-cta" onClick={scrollToContact}>
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
}

export default Hero;
